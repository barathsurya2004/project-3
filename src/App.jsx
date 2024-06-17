import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { Face } from "../public/models/Face1";
import { CameraControls, OrthographicCamera } from "@react-three/drei";

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
          <Canvas>
            <ambientLight />
            <directionalLight intensity={3} position={[10, 10, 10]} />
            <OrthographicCamera makeDefault position={[0, 0, 20]} zoom={10} />
            <CameraControls makeDefault />
            <Face />
          </Canvas>
        </div>
      </div>
    </>
  );
};

export default App;
