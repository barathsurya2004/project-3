import Hero from "./pages/Hero";
import "./App.css";
import { Canvas } from "@react-three/fiber";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Model } from "../public/models/Heart1";
import { Clock } from "../public/models/Clock";
import { Loader, useProgress } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ModelEarth } from "../public/models/ModelEarth";
gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <>
      <div className="webgl-canvas">
        <div className="heart-canvas canvas1">
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
            <Model />
          </Canvas>
        </div>
        <div className="clock-canvas canvas1">
          <Canvas>
            <ambientLight />
            <directionalLight
              rotation-y={Math.PI}
              angle={Math.PI / 4}
              intensity={5}
              position={[0, 0, -3]}
            />

            <Clock />
          </Canvas>
        </div>
        <div className="globe-canvas canvas2">
          {/* <Canvas>
            <axesHelper args={[5]} />
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
