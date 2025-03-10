'use client';

import { Canvas } from '@react-three/fiber';
import { SRGBColorSpace, Color } from 'three';
import Model from './Model';
import { Environment } from '@react-three/drei';
import PixelationEffect from '@/app/PixelationEffect';

export default function Index() {
  return (
    <>
      <div> {/* Header */} </div>
      
      <Canvas
        gl={{ alpha: true, outputColorSpace: SRGBColorSpace }}
        onCreated={({ gl }) => gl.setClearColor(new Color(0, 0, 0), 0)}
        style={{ background: '#000000' }}
      >
        <Model />
        <ambientLight intensity={1} color="#383c4f" />
        <directionalLight intensity={30} color="#383c4f" position={[1, 0, -2]} />
        <directionalLight intensity={30} color="#383c4f" position={[1.2, 0, -2]} />
        <directionalLight intensity={30} color="#383c4f" position={[0.8, 0, -2]} />
        <directionalLight intensity={30} color="#383c4f" position={[1, 0.2, -2]} />
        <PixelationEffect pixelSize={7} />
      </Canvas>
    </>
  );
}