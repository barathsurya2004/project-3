/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Clock.glb 
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useGSAP } from "@gsap/react";
import { CustomEase, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { TextureLoader } from "three";
gsap.registerPlugin(CustomEase);

gsap.registerPlugin(ScrollTrigger);
export function Clock(props) {
  const clockRef = useRef();
  const hourRef = useRef();
  const minRef = useRef();
  const secRef = useRef();
  const { nodes, materials, animations } = useGLTF("/models/Clock.glb");
  useFrame((state, delta) => {
    const d = new Date();
    // console.log(d.getHours());
    hourRef.current.rotation.y =
      -Math.PI * 0.5 +
      (2 * Math.PI * d.getHours()) / 12 +
      (2 * Math.PI * d.getMinutes()) / (60 * 60);
    minRef.current.rotation.y =
      -Math.PI * 0.5 - (2 * Math.PI * d.getMinutes()) / 60;
    secRef.current.rotation.y =
      -Math.PI * 0.1 + (2 * Math.PI * d.getSeconds()) / 60;
  });
  useGSAP(() => {
    console.log(clockRef.current.rotation);
    gsap.from(clockRef.current.rotation, {
      delay: 2,
      y: -10 * Math.PI - Math.PI * 0.5,
      scrollTrigger: {
        trigger: ".text-change1",
        toggleActions: "play none none reverse",
        start: "top 50%",
        end: "top top",
        scrub: 1.2,
      },
      ease: "expo.out",
    });
    gsap.fromTo(
      clockRef.current.scale,
      {
        x: 0,
        y: 0,
      },
      {
        x: 2.6,
        y: 2.6,
        duration: 0.001,
        scrollTrigger: {
          trigger: ".text-change1",
          start: "top 50%",

          toggleActions: "play none none reverse",
          immediateRender: false,
        },
      }
    );
    gsap.to(clockRef.current.rotation, {
      y: -10 * Math.PI,
      scrollTrigger: {
        trigger: ".text-change2",
        toggleActions: "play none none reverse",
        start: "top bottom",
        end: "top 80%",
        scrub: 1,
        // immediateRender: false,
      },
      ease: "expo.in",
    });
  });
  const wood = useLoader(TextureLoader, "/models/wood.jpg");
  return (
    <group ref={clockRef} {...props} dispose={null} scale={2.6}>
      <group name="Scene">
        <OrbitControls />
        <group
          name="Clock"
          rotation={[Math.PI / 2, 0, 0]}
          scale={[-1, -0.101, -1]}
        >
          <ambientLight intensity={0.1} />
          {/* <axesHelper args={[5]} /> */}
          <directionalLight position={[0, 5, 0]} intensity={2} />
          <directionalLight intensity={2} position={[0, -5, 0]} />
          <mesh
            name="clock001"
            geometry={nodes.clock001.geometry}
            castShadow
            receiveShadow
          >
            <meshStandardMaterial map={wood} />
          </mesh>

          <mesh
            name="clock001_1"
            geometry={nodes.clock001_1.geometry}
            material={materials[" B.001"]}
          />
          <mesh
            name="clock001_2"
            geometry={nodes.clock001_2.geometry}
            material={materials["063.001"]}
          />
          <mesh
            name="H"
            geometry={nodes.H.geometry}
            material={materials["ﺔﻣﺎﺧ.001"]}
            position={[0, -0.086, 0]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[-0.346, -0.053, -0.041]}
            ref={hourRef}
          />
          <mesh
            name="M"
            geometry={nodes.M.geometry}
            material={materials["ﺔﻣﺎﺧ.001"]}
            position={[0, 0.059, 0]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[-0.422, -0.053, -0.031]}
            ref={minRef}
          />
          <mesh
            name="Sec"
            geometry={nodes.Sec.geometry}
            material={materials["ﺔﻣﺎﺧ.001"]}
            position={[0, 0.148, 0]}
            rotation={[-Math.PI, -Math.PI * 0.1, -Math.PI]}
            scale={[-0.422, -0.053, -0.031]}
            ref={secRef}
          />
          <mesh
            name="22"
            geometry={nodes["22"].geometry}
            material={materials["ﺔﻣﺎﺧ.006"]}
            position={[0, -0.813, 0]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[-0.009, -0.293, -0.009]}
          />
          <mesh
            name="glass"
            geometry={nodes.glass.geometry}
            position={[0, -1.515, 0]}
            rotation={[Math.PI, 0, 0]}
          >
            <meshStandardMaterial transparent />
          </mesh>
          <mesh
            name="t"
            geometry={nodes.t.geometry}
            material={materials["ﺔﻣﺎﺧ.007"]}
            position={[0, -0.65, -0.915]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[0.238, 2.365, 0.238]}
          />
          <mesh
            name="t001"
            geometry={nodes.t001.geometry}
            material={materials["ﺔﻣﺎﺧ.007"]}
            position={[0, -0.65, 0.797]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[0.238, 2.365, 0.238]}
          />
          <mesh
            name="t002"
            geometry={nodes.t002.geometry}
            material={materials["ﺔﻣﺎﺧ.007"]}
            position={[0.804, -0.65, 0]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[0.238, 2.365, 0.238]}
          />
          <mesh
            name="t003"
            geometry={nodes.t003.geometry}
            material={materials["ﺔﻣﺎﺧ.007"]}
            position={[-0.836, -0.65, 0]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[0.238, 2.365, 0.238]}
          />
          <mesh
            name="t004"
            geometry={nodes.t004.geometry}
            material={materials["ﺔﻣﺎﺧ.007"]}
            position={[-0.722, -0.65, 0.418]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[0.238, 2.365, 0.238]}
          />
          <mesh
            name="t005"
            geometry={nodes.t005.geometry}
            material={materials["ﺔﻣﺎﺧ.007"]}
            position={[0, -0.65, -0.797]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[0.238, 2.365, 0.238]}
          />
          <mesh
            name="t006"
            geometry={nodes.t006.geometry}
            material={materials["ﺔﻣﺎﺧ.007"]}
            position={[-0.417, -0.65, 0.723]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[0.238, 2.365, 0.238]}
          />
          <mesh
            name="t007"
            geometry={nodes.t007.geometry}
            material={materials["ﺔﻣﺎﺧ.007"]}
            position={[-0.397, -0.65, -0.693]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[0.238, 2.365, 0.238]}
          />
          <mesh
            name="t008"
            geometry={nodes.t008.geometry}
            material={materials["ﺔﻣﺎﺧ.007"]}
            position={[-0.688, -0.65, -0.401]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[0.238, 2.365, 0.238]}
          />
          <mesh
            name="t009"
            geometry={nodes.t009.geometry}
            material={materials["ﺔﻣﺎﺧ.007"]}
            position={[0.396, -0.65, -0.693]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[0.238, 2.365, 0.238]}
          />
          <mesh
            name="t010"
            geometry={nodes.t010.geometry}
            material={materials["ﺔﻣﺎﺧ.007"]}
            position={[0.687, -0.65, -0.402]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[0.238, 2.365, 0.238]}
          />
          <mesh
            name="t011"
            geometry={nodes.t011.geometry}
            material={materials["ﺔﻣﺎﺧ.007"]}
            position={[0.669, -0.65, 0.381]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[0.238, 2.365, 0.238]}
          />
          <mesh
            name="t012"
            geometry={nodes.t012.geometry}
            material={materials["ﺔﻣﺎﺧ.007"]}
            position={[0.391, -0.65, 0.657]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[0.238, 2.365, 0.238]}
          />
          <mesh
            name="t024"
            geometry={nodes.t024.geometry}
            material={materials["ﺔﻣﺎﺧ.007"]}
            position={[0, -0.65, 0]}
            rotation={[-3.123, -0.209, -3.137]}
            scale={[0.073, 0.728, 0.073]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Clock.glb");
