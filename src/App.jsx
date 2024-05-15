import Hero from "./pages/Hero";
import "./App.css";
import { Canvas } from "@react-three/fiber";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { HeartModel } from "../public/models/Heart1";
import { Clock } from "../public/models/Clock";
import { Loader, OrbitControls, useProgress } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ModelEarth } from "../public/models/ModelEarth";
import { Perf } from "r3f-perf";
gsap.registerPlugin(ScrollTrigger);
const App = () => {
  const dirLight = useRef();
  return (
    <>
      <div className="webgl-canvas">
        {/* <div className="heart-canvas canvas1">
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
        </div> */}
        <div className="clock-canvas canvas1">
          <Canvas>
            <Clock />
          </Canvas>
        </div>
        <div className="globe-canvas canvas2">
          {/* <Canvas>
            <axesHelper args={[5]} />
            <Perf />
            <mesh>
              <directionalLight position={[0, 0, 10]} />
              <ModelEarth scale={4} />
            </mesh>
          </Canvas> */}
        </div>
      </div>
      <Loader />
      <Hero />
      <div className="trigger love-out" />
      <div className="trigger love-out" />
      <div className="trigger text-change1" />
      <div className="trigger love-out" />
      <div className="trigger love-out" />

      <div className="trigger text-change2" />
      <div className="trigger love-out" />
      <div className="trigger love-out" />

      <div className="trigger text-change3" />
    </>
  );
};

export default App;
