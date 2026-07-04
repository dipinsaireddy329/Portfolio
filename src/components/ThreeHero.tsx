"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import type { Points as ThreePoints } from "three";

function ParticleField() {
  const ref = useRef<ThreePoints>(null);
  const positions = useMemo(() => {
    const data = new Float32Array(900 * 3);
    for (let i = 0; i < 900; i += 1) {
      data[i * 3] = (Math.random() - 0.5) * 9;
      data[i * 3 + 1] = (Math.random() - 0.5) * 5;
      data[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    return data;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.pointer.x * 0.18 + state.clock.elapsedTime * 0.03;
    ref.current.rotation.x = state.pointer.y * 0.08;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#68e1fd" size={0.022} sizeAttenuation depthWrite={false} />
    </Points>
  );
}

function GlassCore() {
  return (
    <Float speed={1.5} rotationIntensity={0.35} floatIntensity={0.45}>
      <mesh>
        <icosahedronGeometry args={[1.25, 2]} />
        <meshStandardMaterial color="#dff9ff" roughness={0.28} metalness={0.2} transparent opacity={0.18} />
      </mesh>
    </Float>
  );
}

export function ThreeHero() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 6], fov: 58 }} dpr={[1, 1.6]}>
        <ambientLight intensity={1.1} />
        <pointLight position={[3, 4, 5]} intensity={3} color="#68e1fd" />
        <pointLight position={[-3, -2, 3]} intensity={2} color="#8b5cf6" />
        <ParticleField />
        <GlassCore />
      </Canvas>
    </div>
  );
}
