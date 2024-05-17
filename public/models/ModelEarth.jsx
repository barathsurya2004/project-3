import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";
import { ScrollTrigger } from "gsap/all";
import { CameraHelper } from "three";
gsap.registerPlugin(ScrollTrigger);
export function Earth(props) {
  const earth = useRef();
  const [rotate, setRotate] = useState(true);

  useFrame((state, delta) => {
    if (rotate) {
      earth.current.rotation.y += delta;
    }
  });
  useGSAP(() => {
    gsap.to(
      earth.current.scale,

      {
        x: 1.8,
        y: 1.8,
        z: 1.8,
        duration: 0.001,
        scrollTrigger: {
          trigger: ".text-change2",
          start: "top 50%",
          // end: "top 45%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.to(earth.current.position, {
      scrollTrigger: {
        trigger: ".world-move-zoom",
        start: "top 80%",
        end: "top top",
        onEnter: ({ progress, direction, isActive }) => setRotate(false),

        onLeaveBack: ({ progress, direction, isActive }) => setRotate(true),
      },
    });
    gsap.to(
      earth.current.position,

      {
        z: 3.75,
        y: 0.19,
        x: 0,
        scrollTrigger: {
          trigger: ".world-move-zoom",
          start: "top bottom",
          end: "top 60%",
          scrub: 1,
        },
        ease: "expo.out",
      }
    );
    gsap.to(earth.current.rotation, {
      y: (-Math.PI * 66.8) / 180 + Math.PI * 2,
      scrollTrigger: {
        trigger: ".world-move-zoom",
        start: "top 75%",
        end: "top top",
        scrub: 1,
      },
    });
    gsap.fromTo(
      earth.current.position,
      {
        z: 3.75,
        y: 0.19,
      },
      {
        y: -0.51,
        z: 3.925,
        scrollTrigger: {
          markers: true,
          trigger: ".world-zoom1",
          start: "top 50%",
          end: "top top",
          scrub: 1,
        },
        immediateRender: false,
      }
    );
    gsap.to(earth.current.rotation, {
      x: (-Math.PI * 40) / 180,

      scrollTrigger: {
        trigger: ".world-zoom1",
        start: "top 50%",
        end: "top top",
        scrub: 1,
      },
    });
    gsap.fromTo(
      earth.current.scale,
      {
        x: 1.8,
        y: 1.8,
        z: 1.8,
      },
      {
        x: 2,
        y: 2,
        z: 2,
        scrollTrigger: {
          trigger: ".world-move-zoom",
          start: "top bottom",
          end: "top 50%",
          scrub: 1,
        },
        immediateRender: false,
      }
    );
  });
  const { nodes, materials } = useGLTF("/models/newEarth.glb");
  return (
    <group ref={earth} {...props} dispose={null} position={[0.95, 0, 0]}>
      <mesh
        geometry={nodes.map_new.geometry}
        material={materials["Material"]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={2}
      />
      <mesh
        geometry={nodes.Icosphere.geometry}
        material={materials["Matte Metallic Paint"]}
        scale={0.506}
      />
      {/* <CameraHelper /> */}
    </group>
  );
}

useGLTF.preload("/earth.glb");
