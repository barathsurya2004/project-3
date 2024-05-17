import Hero from "./pages/Hero";
import "./App.css";
import { Canvas } from "@react-three/fiber";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { HeartModel } from "../public/models/Heart1";
import { Clock } from "../public/models/Clock";
import {
  Loader,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  useProgress,
} from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { Earth } from "../public/models/ModelEarth";
import { Perf } from "r3f-perf";
gsap.registerPlugin(ScrollTrigger);
const App = () => {
  const [zIndexHeart, setZIndexHeart] = useState(3);
  const [zIndexClock, setZIndexClock] = useState(0);
  const [zIndexGlobe, setZIndexGlobe] = useState(0);
  useGSAP(() => {
    gsap.to("heart-canvas", {
      scrollTrigger: {
        trigger: ".text-change1",
        start: "top 50%%",
        onEnter: () => setZIndexHeart(-1),
        onLeaveBack: () => setZIndexHeart(3),
      },
    });
    gsap.to(".clock-canvas", {
      scrollTrigger: {
        trigger: ".text-change1",
        start: "top 90%",
        onEnter: () => setZIndexClock(3),
        onLeaveBack: () => setZIndexClock(-1),
      },
    });
    gsap.to(".globe-canvas", {
      scrollTrigger: {
        trigger: ".text-change2",
        start: "top 50%",
        onEnter: () => setZIndexGlobe(3),
        onLeaveBack: () => setZIndexGlobe(-1),
      },
    });
  });
  return (
    <>
      <div className="webgl-canvas">
        <div
          className="heart-canvas canvas1"
          style={{
            zIndex: zIndexHeart,
          }}
        >
          <Canvas>
            <pointLight position={[0, 0, 3]} intensity={10} />
            <pointLight position={[0, 3, 3]} intensity={5} />
            <pointLight position={[0, -3, 3]} intensity={5} />
            <pointLight position={[3, 0, 3]} intensity={5} />
            <pointLight position={[3, 3, 3]} intensity={5} />
            <pointLight position={[3, -3, 3]} intensity={5} />
            <pointLight position={[-3, 0, 3]} intensity={5} />
            <pointLight position={[-3, 3, 3]} intensity={5} />
            <pointLight position={[-3, -3, 3]} intensity={5} />
            <HeartModel />
          </Canvas>
        </div>
        <div
          className="clock-canvas canvas1"
          style={{
            zIndex: zIndexClock,
          }}
        >
          <Canvas>
            <Clock />
          </Canvas>
        </div>{" "}
        *
        <div
          className="globe-canvas canvas2"
          style={{
            zIndex: zIndexGlobe,
          }}
        >
          <Canvas
            camera={{
              fov: 39.6,
              near: 0.001,
            }}
          >
            <Perf />
            <ambientLight intensity={0.5} />
            <directionalLight intensity={3} position={[0, 0, 10]} />
            <Earth scale={0} rotation-z={Math.PI * 0.5} />
          </Canvas>
        </div>
      </div>
      <Loader />
      <Hero />
      <div className="trigger love-out" />
      <div className="trigger love-out" />
      <div className="trigger text-change1" />
      <div className="trigger bt-out" />
      <div className="trigger bt-out" />

      <div className="trigger text-change2" />
      <div className="trigger culture-out" />
      <div className="trigger culture-out" />

      <div className="trigger world-move-zoom" />
      <div className="trigger world-zoom1" />
      <div className="trigger nav-to-tn" />
      <div className="trigger all-out" />
      <div className="trigger all-out" />
      <div className="trigger" />
    </>
  );
};

export default App;
