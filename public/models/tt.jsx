/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 transparency_test.glb 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
export function NewGlobe(props) {
  const { nodes, materials } = useGLTF("/models/transparency_test.glb");
  return (
    <group {...props} dispose={null}>
      <directionalLight intensity={1} position={[0, 100, -555]} />
      <mesh geometry={nodes.Sphere.geometry} scale={1.723}>
        <meshPhysicalMaterial
          transparent
          transmission={1}
        
          roughness={0.5}
          color={"white"}
          opacity={0.1}
        />
      </mesh>
      <mesh geometry={nodes.Sphere.geometry} scale={1.5}>
        <meshPhysicalMaterial
          transparent
          transmission={1}
        
          roughness={0.5}
          color={"black"}
          opacity={0.3}
        />
      </mesh>
      <mesh geometry={nodes.Sphere.geometry} scale={1.3}>
        <meshPhysicalMaterial
          transparent
          transmission={1}
        
          color={"black"}
          opacity={0.5}
          roughness={0.5}
        />
      </mesh>
      <mesh geometry={nodes.Sphere.geometry} scale={1}>
        <meshPhysicalMaterial
          transparent
          transmission={1}
        
          color={"black"}
          opacity={0.8}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/transparency_test.glb");