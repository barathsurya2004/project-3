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
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
export function HeartModel(props) {
  const heartref = useRef();
  const { nodes, materials, animations } = useGLTF("/models/heart2.glb");
  const { actions } = useAnimations(animations, heartref);
  const [hover, setHover] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [rev, setRev] = useState(false);
  useFrame((state, delta) => {
    if (!hover && !rev) {
      // console.log(heartref.current.rotation);
      if (heartref.current.rotation.x > 0) {
        heartref.current.rotation.x -= delta / 10;
      }
      if (heartref.current.rotation.x < 0) {
        heartref.current.rotation.x += delta / 10;
      }
      if (heartref.current.rotation.y > 0) {
        heartref.current.rotation.y -= delta / 10;
      }
      if (heartref.current.rotation.y < 0) {
        heartref.current.rotation.y += delta / 10;
      }
    } else if (hover && !rev) {
      if (heartref.current.rotation.y < mouseX / 10) {
        heartref.current.rotation.y += delta / 5;
      }
      if (heartref.current.rotation.y > mouseX / 10) {
        heartref.current.rotation.y -= delta / 5;
      }
      if (heartref.current.rotation.x > -mouseY / 10) {
        heartref.current.rotation.x -= delta / 5;
      }
      if (heartref.current.rotation.x < -mouseY / 10) {
        heartref.current.rotation.x += delta / 5;
      }
    }
  });
  useGSAP(() => {
    console.log(heartref.current.rotation);
    gsap.from(heartref.current.scale, {
      x: 0,
      y: 0,
      duration: 1,
      delay: 1,
    });
    gsap.fromTo(
      heartref.current.rotation,
      { y: 0 },
      {
        y: 10 * Math.PI + Math.PI * 0.5,
        scrollTrigger: {
          trigger: ".text-change1",
          onEnter: () => {
            setRev(true);
            console.log(rev);
          },
          onLeaveBack: () => {
            setRev(false);
            console.log(rev);
          },
          toggleActions: "play none none reverse",
          start: "top bottom",
          end: "top 50%",
          scrub: 1.2,
        },
        ease: "expo.in",
      }
    );
    gsap.fromTo(
      heartref.current.scale,
      { x: 1, y: 1 },
      {
        x: 0,
        y: 0,
        duration: 0.001,
        scrollTrigger: {
          markers: true,
          trigger: ".text-change1",
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
        immediateRender: false,
      }
    );
  });
  return (
    <group
      ref={heartref}
      {...props}
      dispose={null}
      onPointerMove={(e) => {
        setMouseX(e.pointer.x);
        setMouseY(e.pointer.y);
      }}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      position={[0, -0.35, 0]}
    >
      {/* <axesHelper args={[5]} /> */}
      <ambientLight intensity={0.5} />
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            scale={0.065}
            name="f6bcb81c5d674405b84df409a29b9a55fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="BASE_HEART"
                  position={[0, 0, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <group name="Object_5">
                    <mesh
                      name="BASE_HEART_Material_#41_0"
                      geometry={nodes["BASE_HEART_Material_#41_0"].geometry}
                    >
                      <meshStandardMaterial color={"#867de8"} />
                    </mesh>
                    <mesh
                      name="BASE_HEART_Material_#41_0001"
                      geometry={nodes["BASE_HEART_Material_#41_0001"].geometry}
                      scale={1.15}
                    >
                      <meshStandardMaterial transparent opacity={0} />
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
