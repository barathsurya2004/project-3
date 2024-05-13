/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 heart1.glb 
Author: omarelone (https://sketchfab.com/omarelone)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/pumping-heart-model-6f815b9822dc479eae0a17b8dcab9c75
Title: PUMPING HEART MODEL
*/

import { useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/heart1.glb");
  const { actions } = useAnimations(animations, group);
  const [hover, setHover] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  useFrame((state, delta) => {
    if (!hover) {
      // console.log(group.current.rotation);
      if (group.current.rotation.x > 0) {
        group.current.rotation.x -= delta / 5;
      }
      if (group.current.rotation.x < 0) {
        group.current.rotation.x += delta / 5;
      }
      if (group.current.rotation.y > 0) {
        group.current.rotation.y -= delta / 5;
      }
      if (group.current.rotation.y < 0) {
        group.current.rotation.y += delta / 5;
      }
    } else {
      if (group.current.rotation.y < mouseX / 10) {
        group.current.rotation.y += delta / 5;
      }
      if (group.current.rotation.y > mouseX / 10) {
        group.current.rotation.y -= delta / 5;
      }
      if (group.current.rotation.x > -mouseY / 10) {
        group.current.rotation.x -= delta / 5;
      }
      if (group.current.rotation.x < -mouseY / 10) {
        group.current.rotation.x += delta / 5;
      }
    }
  });
  useGSAP(() => {
    console.log(group.current.rotation);
    gsap.from(group.current.scale, {
      x: 0,
      y: 0,
      duration: 1,
      delay: 1,
    });
  });
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      onPointerMove={(e) => {
        setMouseX(e.pointer.x);
        setMouseY(e.pointer.y);
      }}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            scale={0.07}
            name="f6bcb81c5d674405b84df409a29b9a55fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="BASE_HEART"
                  position={[0, -30, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <group name="Object_5">
                    <mesh
                      name="BASE_HEART_Material_#41_0"
                      geometry={nodes["BASE_HEART_Material_#41_0"].geometry}
                    >
                      <meshStandardMaterial color={"#867de8"} />
                    </mesh>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/heart1.glb");
