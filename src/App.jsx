import { Canvas } from "@react-three/fiber";
import SvgMorphAnimation from "./pages/SvgMorphAnimation";
import { Blender } from "../public/models/Blender";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";

const App = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Canvas>
        <directionalLight position={[5, 5, 5]} intensity={3} />
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={100} />
        <Blender />
      </Canvas>
    </div>
  );
};

export default App;
