import { Canvas } from "@react-three/fiber";
import { FaceProj } from "../../public/models/FaceProj";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";

const Face = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  return (
    <Canvas>
      <ambientLight />
      {/* <OrbitControls /> */}
      <directionalLight position={[10, 10, 10]} />
      <FaceProj />
    </Canvas>
  );
};

export default Face;
