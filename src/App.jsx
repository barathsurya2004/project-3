import { Canvas } from "@react-three/fiber";
import { AnimTest } from "../public/models/AnimTest";
import Face from "./pages/Face";
import Hero from "./pages/Hero";

const App = () => {
  return (
    <Canvas>
      <AnimTest />
    </Canvas>
  );
};

export default App;
