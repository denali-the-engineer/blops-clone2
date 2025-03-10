import React, { useRef, useEffect, useState, useMemo, forwardRef } from "react";
import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Color, MeshStandardMaterial } from "three";
import "../../app/modelcss.css";

let frame = 0;

const Model = forwardRef((props, ref) => {
  const { nodes } = useGLTF('/medias/watari.glb');
  const shape = useRef(null);
  const textData = useRef(null);
  const ringGroup = useRef(null);
  const [useMousePosition, setMousePosition] = useState({ x: null, y: null });

  const emissiveMaterial = useMemo(
    () =>
      new MeshStandardMaterial({
        emissive: new Color(0xffffff),
        emissiveIntensity: 1,
        toneMapped: false,
      }),
    []
  );

  useFrame((state, delta) => {
    if (shape.current) {
      shape.current.rotation.x = 0.25 * (useMousePosition.y / window.innerHeight);
      shape.current.rotation.y = frame * 0.005 + 1.55 + 0.25 * (useMousePosition.x / window.innerWidth);
      shape.current.rotation.z = 1.55;

      shape.current.position.y = 0.0;
      shape.current.position.x = 0;
      shape.current.position.z = -0.5;
    }

    if (textData.current) {
      textData.current.position.z = -4.5;
      textData.current.position.y = 0.5;
    }

    // Animate ringGroup scale once with ease-out
    if (ringGroup.current) {
      const duration = 2; // 2-second animation
      const tLinear = Math.min(state.clock.getElapsedTime() / duration, 1); // 0 to 1 over 2 seconds
      const t = 1 - Math.pow(1 - tLinear, 3); // Cubic ease-out
      const scaleStart = 0.1;
      const scaleEnd = 2.5;
      const scale = scaleStart + (scaleEnd - scaleStart) * t; // Interpolated with easing
      ringGroup.current.scale.set(scale, scale, scale);
    }

    frame += 1;
  });

  const materialProps = {
    thickness: 0.1,
    roughness: 0.25,
    transmission: 1,
    ior: 0.5,
    chromaticAberration: 0.5,
    backside: true,
    reflectivity: 0.0,
  };

  useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <group ref={ref}>
      <Text
        scale={2}
        material={emissiveMaterial}
        font={"/fonts/Connectioniii-Rj3W.otf"}
        ref={textData}
      >
        $OSOL
      </Text>
      <group ref={ringGroup}>
        <mesh ref={shape} geometry={nodes.Torus.geometry}>
          <MeshTransmissionMaterial {...materialProps} />
        </mesh>
      </group>
    </group>
  );
});

export default Model;