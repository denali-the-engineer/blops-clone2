import { useRef, useEffect } from 'react';
import { useThree, extend, useFrame } from '@react-three/fiber';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { Vector2 } from 'three';

extend({ EffectComposer, RenderPass, ShaderPass });

export default function DotPixelationEffect({ pixelSize = 8 }) {
  const { gl, scene, camera, size } = useThree();
  const composer = useRef();
  const shaderPass = useRef();
  const initialized = useRef(false);

  useEffect(() => {
    // Shader definition
    const dotPixelationShader = {
      uniforms: {
        tDiffuse: { value: null },
        pixelSize: { value: pixelSize },
        resolution: { value: new Vector2(size.width, size.height) },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float pixelSize;
        uniform vec2 resolution;
        uniform sampler2D tDiffuse;
        varying vec2 vUv;

        void main() {
          // Calculate the pixelated coordinates
          vec2 pixelatedUV = floor(vUv * resolution / pixelSize) * pixelSize / resolution;
          
          // Sample the texture at the pixelated coordinates
          vec4 color = texture2D(tDiffuse, pixelatedUV);
          
          // Add circular dot effect
          vec2 pixelCoord = fract(vUv * resolution / pixelSize) - 0.5;
          float dist = length(pixelCoord);
          float alpha = smoothstep(0.4, 0.5, dist);
          
          // Apply dot effect only to RGB, preserving original alpha
          vec3 finalRGB = color.rgb * (1.0 - alpha);
          
          // Output the color with the original alpha intact
          gl_FragColor = vec4(finalRGB, color.a);
        }
      `,
    };

    // Setup composer
    composer.current = new EffectComposer(gl);
    const renderPass = new RenderPass(scene, camera);
    composer.current.addPass(renderPass);
    
    // Add shader pass
    shaderPass.current = new ShaderPass(dotPixelationShader);
    composer.current.addPass(shaderPass.current);

    // Set initial size
    composer.current.setSize(size.width, size.height);
    
    // Mark as initialized
    initialized.current = true;

    // Handle resize
    const handleResize = () => {
      if (composer.current && shaderPass.current) {
        composer.current.setSize(size.width, size.height);
        shaderPass.current.uniforms.resolution.value.set(size.width, size.height);
      }
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (composer.current) {
        composer.current.dispose();
      }
      initialized.current = false;
    };
  }, [gl, scene, camera, size.width, size.height, pixelSize]);

  // Update pixelSize when it changes
  useEffect(() => {
    if (shaderPass.current) {
      shaderPass.current.uniforms.pixelSize.value = pixelSize;
    }
  }, [pixelSize]);

  // Render the composer in the frame loop
  useFrame(({ gl }) => {
    if (initialized.current && composer.current) {
      gl.autoClear = false; // Prevent clearing the buffer
      composer.current.render();
    }
  }, 1); // Priority 1 to ensure it runs after the main render

  return null;
}