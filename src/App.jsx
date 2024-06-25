import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Globe } from "../public/models/Globe";
import { Earth } from "../public/models/Earth";
import Hero from "./pages/Hero";

const App = () => {
  return (
    <>
      <div>
        <h1>React Three Fiber</h1>
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
          }}
        >
          <Canvas
            gl={{
              physicallyCorrectLights: true,
              powerPreference: "high-performance",
              antialias: true,
              // depth: true,
            }}
          >
            {/* <ambientLight intensity={2} /> */}
            <directionalLight intensity={2} position={[10, 10, 10]} />
            <PerspectiveCamera
              makeDefault={true}
              far={1000}
              near={0.001}
              fov={22.895}
              position={[0, 0, 2.212]}
            />
            <OrbitControls />
            <Earth />
          </Canvas>
        </div>
      </div>
    </>
  );
};

export default App;
