/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 heart.glb 
*/

import React, { useRef } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";

export function HeartModel(props) {
  const { nodes, materials } = useGLTF("/models/heart.glb");
  return (
    <group {...props} dispose={null}>
      <OrbitControls />
      <mesh
        geometry={nodes.Circle.geometry}
        material={materials["Material.001"]}
        position={[0.692, 0, 0.687]}
      />
    </group>
  );
}

useGLTF.preload("/heart.glb");
