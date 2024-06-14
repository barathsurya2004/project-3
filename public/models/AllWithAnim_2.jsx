/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 allWithAnim_2.glb 
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export function Animationtest(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/allWithAnim_2.glb");
  const { actions, mixer } = useAnimations(animations, group);

  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => {
        action.play();
      });
    }
  }, [actions]);

  useFrame((state, delta) => {
    mixer.update(delta);
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Empty001"
          position={[0, 1.218, 0]}
          rotation={[0, -0.199, 0]}
        >
          <group
            name="Empty"
            position={[0, -1.218, 0]}
            rotation={[0, -0.018, 0]}
          >
            <group name="Apple" rotation={[-Math.PI, 0.154, -Math.PI]}>
              <mesh
                name="Cube020"
                geometry={nodes.Cube020.geometry}
                material={materials.DarkRed}
              />
              <mesh
                name="Cube020_1"
                geometry={nodes.Cube020_1.geometry}
                material={materials.DarkBrown}
              />
              <mesh
                name="Cube020_2"
                geometry={nodes.Cube020_2.geometry}
                material={materials.DarkGreen}
              />
            </group>
            <group name="BurgerLarge" scale={0}>
              <mesh
                name="Plane005"
                geometry={nodes.Plane005.geometry}
                material={materials.LightGreen}
              />
              <mesh
                name="Plane005_1"
                geometry={nodes.Plane005_1.geometry}
                material={materials.Yellow}
              />
              <mesh
                name="Plane005_2"
                geometry={nodes.Plane005_2.geometry}
                material={materials.Brown}
              />
              <mesh
                name="Plane005_3"
                geometry={nodes.Plane005_3.geometry}
                material={materials.Red}
              />
              <mesh
                name="Plane005_4"
                geometry={nodes.Plane005_4.geometry}
                material={materials.LightYellow}
              />
              <mesh
                name="Plane005_5"
                geometry={nodes.Plane005_5.geometry}
                material={materials.White}
              />
            </group>
            <group name="ChickenLeg" scale={0}>
              <mesh
                name="Cube048"
                geometry={nodes.Cube048.geometry}
                material={materials["DarkBrown.001"]}
              />
              <mesh
                name="Cube048_1"
                geometry={nodes.Cube048_1.geometry}
                material={materials.Beige}
              />
            </group>
            <group name="CookingPot2_Soup" position={[0, -0.23, 0]} scale={0}>
              <mesh
                name="Cylinder016"
                geometry={nodes.Cylinder016.geometry}
                material={materials.Grey}
              />
              <mesh
                name="Cylinder016_1"
                geometry={nodes.Cylinder016_1.geometry}
                material={materials["Brown.001"]}
              />
            </group>
            <group name="Cupcake" position={[0, -0.177, 0]} scale={0}>
              <mesh
                name="Cylinder026"
                geometry={nodes.Cylinder026.geometry}
                material={materials["LightYellow.001"]}
              />
              <mesh
                name="Cylinder026_1"
                geometry={nodes.Cylinder026_1.geometry}
                material={materials.Pink}
              />
              <mesh
                name="Cylinder026_2"
                geometry={nodes.Cylinder026_2.geometry}
                material={materials["DarkBrown.002"]}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/allWithAnim_2.glb");
