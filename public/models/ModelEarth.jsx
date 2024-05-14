/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 modelEarth.glb 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function ModelEarth(props) {
  const { nodes, materials } = useGLTF("/models/modelEarth.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.map_new.geometry}
        material={materials["Material.006"]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={2}
      />
      <mesh
        geometry={nodes.Icosphere.geometry}
        material={materials["Matte Metallic Paint"]}
        scale={0.506}
      />
    </group>
  );
}

useGLTF.preload("/modelEarth.glb");
