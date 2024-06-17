/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 face1.glb 
*/

import React, { useContext, useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";

export function Face(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/face1.glb");
  const { actions, names } = useAnimations(animations, group);
  const [blink, setBlink] = useState(true);

  const meshRef1 = useRef();
  const meshRef = useRef();
  const eyebrowRefl = useRef();
  const eyebrowRefr = useRef();
  const [alpha, setAlpha] = useState(0);
  const [beta, setBeta] = useState(0);
  const [gamma, setGamma] = useState(0);
  useEffect(() => {
    window.addEventListener("deviceorientation", (e) => {
      const { alpha, beta, gamma } = e;
      if (alpha < 90 && alpha > -90) {
        setAlpha(alpha - 180);
      }
      setBeta(beta - 90);
      if (gamma < 90 && gamma > -90) {
        setGamma(gamma);
      }
      console.log(alpha);
    });
  }, []);
  useEffect(() => {
    const blinkTimeline = gsap.timeline({
      repeat: -1,
      repeatDelay: 4,
      paused: true,
    });
    blinkTimeline
      .to(meshRef.current.scale, { y: 0.1, x: 0.72, duration: 0.1 })

      .to(meshRef1.current.scale, { y: 0.1, x: 0.72, duration: 0.1 }, "<")
      .to(meshRef.current.scale, { y: 1.311, x: 0.786, duration: 0.1 }, "+=0.1")
      .to(meshRef1.current.scale, { y: 1.311, x: 0.786, duration: 0.1 }, "<");

    if (blink) {
      blinkTimeline.play();
    } else {
      blinkTimeline.pause();
    }
    meshRef.current.material.roughness = 1;
    return () => {
      blinkTimeline.kill();
    };
  }, [blink]);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      rotation={[(Math.PI * beta) / 180, (Math.PI * gamma) / 180, 0]}
      position={[0, -10, 0]}
    >
      <mesh scale={9} position={[0, 10, 5]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="white" transparent opacity={0} />
      </mesh>
      <group name="Scene">
        <group name="Node_0" scale={0.01}>
          <group name="Scene_1">
            <group name="eye_l" position={[-269.44, 992.362, 998.549]}>
              <group
                name="Group001"
                position={[-2.883, -98.597, 7.921]}
                rotation={[0, -Math.PI / 9, 0]}
              >
                <mesh
                  name="Cube_5001"
                  geometry={nodes.Cube_5001.geometry}
                  material={materials["Material.007"]}
                  position={[0.836, 0, -3.873]}
                />
              </group>
              <mesh
                name="Torus"
                geometry={nodes.Torus.geometry}
                material={materials.hair}
                position={[-29.038, 204.55, -6.466]}
                rotation={[0.032, -0.355, -0.424]}
                ref={eyebrowRefl}
              />
            </group>
            <group
              name="eye_r"
              position={[204.903, 992.362, 998.549]}
              rotation={[-Math.PI, 0, 0]}
              scale={-1}
            >
              <group
                name="Group"
                position={[-2.883, -98.597, 7.921]}
                rotation={[0, -Math.PI / 9, 0]}
              >
                <mesh
                  name="Cube_5"
                  geometry={nodes.Cube_5.geometry}
                  material={materials["Material.005"]}
                  position={[0.836, 0, -3.873]}
                />
              </group>
              <mesh
                name="brow_r"
                geometry={nodes.brow_r.geometry}
                material={materials.hair}
                position={[-29.038, 204.55, -6.466]}
                rotation={[0.032, -0.355, -0.424]}
                ref={eyebrowRefr}
              />
            </group>
            <group name="hair" position={[-17.638, 1070.655, -75.818]}>
              <group
                name="Clone_0"
                position={[-110.352, 184.824, 65.451]}
                rotation={[3.109, -0.036, Math.PI]}
              >
                <mesh
                  name="Sphere_2"
                  geometry={nodes.Sphere_2.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_1"
                position={[-267.125, 387.595, 388.74]}
                rotation={[-0.399, 0, 0]}
                scale={[1, 1, 0.879]}
              >
                <mesh
                  name="Sphere_6"
                  geometry={nodes.Sphere_6.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_10"
                position={[27.699, -647.653, 327.227]}
                rotation={[-Math.PI / 2, 1.392, -0.001]}
                scale={0.898}
              >
                <mesh
                  name="Sphere_9011"
                  geometry={nodes.Sphere_9011.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_11"
                position={[286.714, -524.727, 370.748]}
                rotation={[-Math.PI / 2, 1.392, 0]}
                scale={1.376}
              >
                <mesh
                  name="Sphere_9010"
                  geometry={nodes.Sphere_9010.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_12"
                position={[173.287, -613.043, 451.026]}
                rotation={[-Math.PI / 2, 1.392, 0]}
                scale={1.158}
              >
                <mesh
                  name="Sphere_9020"
                  geometry={nodes.Sphere_9020.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_13"
                position={[349.253, 487.93, 633.182]}
                rotation={[-1.023, 0, 0]}
                scale={0.842}
              >
                <mesh
                  name="Sphere_10001"
                  geometry={nodes.Sphere_10001.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_14"
                position={[229.523, 369.747, 268.63]}
                rotation={[-1.023, 0, 0]}
                scale={0.94}
              >
                <mesh
                  name="Sphere_10"
                  geometry={nodes.Sphere_10.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_2"
                position={[-13.125, 454.077, 384.767]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1.649}
              >
                <mesh
                  name="Sphere_8"
                  geometry={nodes.Sphere_8.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_2001"
                position={[40.87, 254.246, 223.683]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1.649}
              >
                <mesh
                  name="Sphere_7"
                  geometry={nodes.Sphere_7.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_2002"
                position={[-335.027, 422.737, 841.692]}
                rotation={[-0.399, 0.002, 0]}
                scale={[1.649, 1.649, 1.449]}
              >
                <mesh
                  name="Sphere_6001"
                  geometry={nodes.Sphere_6001.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_2003"
                position={[411.806, 78.454, 566.04]}
                rotation={[-1.636, 1.195, 0.061]}
                scale={1.649}
              >
                <mesh
                  name="Sphere_5"
                  geometry={nodes.Sphere_5.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_2004"
                position={[-252.585, 244.451, 299.328]}
                rotation={[-Math.PI / 2, 1.277, 0]}
                scale={1.649}
              >
                <mesh
                  name="Sphere_4"
                  geometry={nodes.Sphere_4.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_2005"
                position={[408.565, -155.062, 420.791]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1.649}
              >
                <mesh
                  name="Sphere_3"
                  geometry={nodes.Sphere_3.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_2006"
                position={[-240.674, 447.448, 740.795]}
                rotation={[3.109, -0.036, -Math.PI]}
                scale={1.649}
              >
                <mesh
                  name="Sphere_2001"
                  geometry={nodes.Sphere_2001.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_4"
                position={[486.293, 146.789, 744.977]}
                rotation={[-1.023, 0, 0]}
                scale={0.65}
              >
                <mesh
                  name="Sphere_12"
                  geometry={nodes.Sphere_12.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_4001"
                position={[156.459, 411.466, 968.913]}
                rotation={[-1.023, 0, 0]}
                scale={0.65}
              >
                <mesh
                  name="Sphere_10002"
                  geometry={nodes.Sphere_10002.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_4002"
                position={[-527.196, 78.624, 670.472]}
                rotation={[3.109, -0.036, Math.PI]}
                scale={0.967}
              >
                <mesh
                  name="Sphere_2002"
                  geometry={nodes.Sphere_2002.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_5"
                position={[269.038, -139.8, 192.484]}
                rotation={[-1.023, 0, 0]}
                scale={1.493}
              >
                <mesh
                  name="Sphere_12001"
                  geometry={nodes.Sphere_12001.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_5001"
                position={[-26.625, 479.889, 903.44]}
                rotation={[-1.023, 0, 0]}
                scale={1.493}
              >
                <mesh
                  name="Sphere_10003"
                  geometry={nodes.Sphere_10003.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_5002"
                position={[151.952, -477.729, 294.073]}
                rotation={[-Math.PI / 2, 1.392, 0.11]}
                scale={1.493}
              >
                <mesh
                  name="Sphere_9021"
                  geometry={nodes.Sphere_9021.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_5003"
                position={[-360.74, 339.687, 544.28]}
                rotation={[-1.71, 0.156, -0.011]}
                scale={1.493}
              >
                <mesh
                  name="Sphere_8001"
                  geometry={nodes.Sphere_8001.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_5004"
                position={[246.568, 426.068, 813.525]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1.493}
              >
                <mesh
                  name="Sphere_7001"
                  geometry={nodes.Sphere_7001.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_5005"
                position={[-58.11, 544.465, 721.986]}
                rotation={[-0.399, 0, 0]}
                scale={[1.493, 1.493, 1.312]}
              >
                <mesh
                  name="Sphere_6002"
                  geometry={nodes.Sphere_6002.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_5006"
                position={[375.831, -347.184, 336.117]}
                rotation={[-1.636, 1.195, 0.061]}
                scale={1.493}
              >
                <mesh
                  name="Sphere_5001"
                  geometry={nodes.Sphere_5001.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_5007"
                position={[266.275, 124.339, 265.278]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1.493}
              >
                <mesh
                  name="Sphere_3001"
                  geometry={nodes.Sphere_3001.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_5008"
                position={[-464.533, 99.536, 489.793]}
                rotation={[3.109, -0.036, Math.PI]}
                scale={1.493}
              >
                <mesh
                  name="Sphere_2003"
                  geometry={nodes.Sphere_2003.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_6"
                position={[416.556, 301.909, 718.068]}
                rotation={[-1.917, 0, 0]}
                scale={1.338}
              >
                <mesh
                  name="Sphere_12002"
                  geometry={nodes.Sphere_12002.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_6001"
                position={[21.408, -180.213, 65.604]}
                rotation={[-Math.PI / 2, 1.392, 0]}
                scale={1.338}
              >
                <mesh
                  name="Sphere_9022"
                  geometry={nodes.Sphere_9022.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_6002"
                position={[336.291, 350.333, 471.963]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1.679}
              >
                <mesh
                  name="Sphere_8002"
                  geometry={nodes.Sphere_8002.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_6003"
                position={[-111.862, 541.659, 558.872]}
                rotation={[-1.636, 1.195, 0.061]}
                scale={1.338}
              >
                <mesh
                  name="Sphere_5002"
                  geometry={nodes.Sphere_5002.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_6004"
                position={[182.91, 518.88, 598.083]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1.338}
              >
                <mesh
                  name="Sphere_3002"
                  geometry={nodes.Sphere_3002.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_6005"
                position={[-454.372, 261.668, 765.979]}
                rotation={[2.509, 0.282, 2.986]}
                scale={1.338}
              >
                <mesh
                  name="Sphere_2004"
                  geometry={nodes.Sphere_2004.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_7"
                position={[-118.143, -622.9, 388.509]}
                rotation={[-Math.PI / 2, 1.392, 0]}
              >
                <mesh
                  name="Sphere_9016"
                  geometry={nodes.Sphere_9016.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_7001"
                position={[-432.584, -230.495, 481.075]}
                rotation={[-Math.PI / 2, 1.392, 0]}
                scale={1.649}
              >
                <mesh
                  name="Sphere_9017"
                  geometry={nodes.Sphere_9017.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_7002"
                position={[-493.054, 56.023, 788.678]}
                rotation={[-Math.PI / 2, 1.392, 0]}
                scale={0.65}
              >
                <mesh
                  name="Sphere_9018"
                  geometry={nodes.Sphere_9018.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_7003"
                position={[-409.375, -396.635, 426.606]}
                rotation={[-Math.PI / 2, 1.392, 0]}
                scale={1.493}
              >
                <mesh
                  name="Sphere_9019"
                  geometry={nodes.Sphere_9019.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_9"
                position={[114.237, 28.915, 43.535]}
                rotation={[-Math.PI / 2, 1.392, 0]}
                scale={1.325}
              >
                <mesh
                  name="Sphere_9"
                  geometry={nodes.Sphere_9.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_9001"
                position={[178.987, -255.543, 86.353]}
                rotation={[-Math.PI / 2, 1.392, 0]}
              >
                <mesh
                  name="Sphere_9001"
                  geometry={nodes.Sphere_9001.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_9002"
                position={[-73.678, -441.835, 209.099]}
                rotation={[-Math.PI / 2, 1.392, 0]}
                scale={1.744}
              >
                <mesh
                  name="Sphere_9002"
                  geometry={nodes.Sphere_9002.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_9003"
                position={[-279.866, -551.281, 355.177]}
                rotation={[-Math.PI / 2, 1.392, 0]}
                scale={1.103}
              >
                <mesh
                  name="Sphere_9003"
                  geometry={nodes.Sphere_9003.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_9004"
                position={[466.118, -310.365, 546.574]}
                rotation={[-0.031, 0.172, -1.39]}
                scale={0.65}
              >
                <mesh
                  name="Sphere_9004"
                  geometry={nodes.Sphere_9004.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_9005"
                position={[-264.38, -382.826, 235.598]}
                rotation={[-Math.PI / 2, 1.392, 0]}
                scale={1.493}
              >
                <mesh
                  name="Sphere_9005"
                  geometry={nodes.Sphere_9005.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_9006"
                position={[-331.485, 71.369, 158.807]}
                rotation={[-2.147, 1.417, 0.539]}
              >
                <mesh
                  name="Sphere_9007"
                  geometry={nodes.Sphere_9007.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_9007"
                position={[217.589, -389.125, 168.684]}
                rotation={[-Math.PI / 2, 1.392, 0]}
              >
                <mesh
                  name="Sphere_9008"
                  geometry={nodes.Sphere_9008.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_9008"
                position={[-393.717, -48.668, 311.903]}
                rotation={[-Math.PI / 2, 1.392, 0]}
                scale={1.649}
              >
                <mesh
                  name="Sphere_9009"
                  geometry={nodes.Sphere_9009.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_9009"
                position={[-286.535, -605.715, 474.048]}
                rotation={[-Math.PI / 2, 1.392, 0]}
                scale={0.898}
              >
                <mesh
                  name="Sphere_9012"
                  geometry={nodes.Sphere_9012.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_9010"
                position={[-422.52, 465.293, 719.743]}
                rotation={[-Math.PI / 2, 1.392, 0]}
                scale={0.65}
              >
                <mesh
                  name="Sphere_9013"
                  geometry={nodes.Sphere_9013.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Clone_9011"
                position={[-217.909, -159.001, 154.863]}
                rotation={[-Math.PI / 2, 1.392, 0]}
                scale={1.493}
              >
                <mesh
                  name="Sphere_9014"
                  geometry={nodes.Sphere_9014.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Sphere_9_Instance_3"
                position={[-128.9, 26.958, 49.361]}
                rotation={[-Math.PI / 2, 1.392, 0]}
                scale={1.216}
              >
                <mesh
                  name="Sphere_9006"
                  geometry={nodes.Sphere_9006.geometry}
                  material={materials.hair}
                />
              </group>
              <group
                name="Sphere_9_Instance_3001"
                position={[-496.57, -68.943, 538.309]}
                rotation={[-Math.PI / 2, 1.392, 0]}
              >
                <mesh
                  name="Sphere_9015"
                  geometry={nodes.Sphere_9015.geometry}
                  material={materials.hair}
                />
              </group>
            </group>
            <group name="skin" position={[-35.363, 852.806, 547.936]}>
              <mesh
                name="ear_l"
                geometry={nodes.ear_l.geometry}
                material={materials["Material.011"]}
                position={[-519.267, 16.694, 91.703]}
                rotation={[-Math.PI, 0, 0]}
                scale={[-1, -1.133, -1]}
              />
              <mesh
                name="ear_r"
                geometry={nodes.ear_r.geometry}
                material={materials["Material.011"]}
                position={[519.268, 16.694, 96.241]}
                scale={[1, 1.133, 1]}
              />
              <mesh
                name="face"
                geometry={nodes.face.geometry}
                material={materials["Material.011"]}
                position={[8.782, 38.142, 59.633]}
              />
              <mesh
                name="nose"
                geometry={nodes.nose.geometry}
                material={materials["Material.011"]}
                position={[3.058, -131.173, 534.965]}
              />
            </group>
            <mesh
              name="mouth"
              geometry={nodes.mouth.geometry}
              material={materials["Material.002"]}
              morphTargetDictionary={nodes.mouth.morphTargetDictionary}
              morphTargetInfluences={nodes.mouth.morphTargetInfluences}
              position={[-34.42, 515.238, 1055.764]}
              rotation={[0.14, 0, 0]}
            />
          </group>
        </group>
        <group name="Node_0001" scale={0.003}>
          <group name="Scene_1001" />
        </group>
        <group
          name="Node_0002"
          position={[-2.985, 11.969, 9.921]}
          scale={0.003}
        >
          <group name="Scene_1002" />
        </group>
        <mesh
          name="Sphere001"
          geometry={nodes.Sphere001.geometry}
          material={materials.eyes}
          morphTargetDictionary={nodes.Sphere001.morphTargetDictionary}
          morphTargetInfluences={nodes.Sphere001.morphTargetInfluences}
          position={[-2.724, 9.577, 11.142]}
          rotation={[0, 1.309, 0]}
          scale={[0.786, 1.311, 1.311]}
          ref={meshRef1}
        />
        <mesh
          name="Sphere002"
          geometry={nodes.Sphere002.geometry}
          material={materials.eyes}
          morphTargetDictionary={nodes.Sphere002.morphTargetDictionary}
          morphTargetInfluences={nodes.Sphere002.morphTargetInfluences}
          position={[2.104, 9.577, 11.142]}
          rotation={[-Math.PI, 1.309, -Math.PI]}
          scale={[0.786, 1.311, 1.311]}
          ref={meshRef}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/face1.glb");
