import Hero from "./pages/Hero";
import "./App.css";
import { Canvas } from "@react-three/fiber";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Model } from "../public/models/Heart1";
import { Clock } from "../public/models/Clock";
import { Loader, useProgress } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
gsap.registerPlugin(ScrollTrigger);
const App = () => {
  const progress = useProgress();
  useEffect(() => {
    console.log(progress);
  }, []);
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
      </div>
      {/* <Loader /> */}
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
