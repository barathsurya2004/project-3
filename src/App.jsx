import { Canvas } from "@react-three/fiber";
import FaceReact from "./pages/FaceReact";
import bg from "./assets/background.png";
import { FaceModel } from "../public/models1/Face";
import { OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
const App = () => {
  return (
    <>
      <img
        src={bg}
        alt=""
        style={{
          position: "absolute",
          zIndex: 0,
          width: "100vw",
          height: "100vh",
        }}
      />
      <FaceReact />
      <div
        className="face-model"
        style={{
          width: "100%",
          height: "100vh",
          position: "fixed",
          top: 0,
          zIndex: 2,
          left: 0,
        }}
      >
        <Canvas>
          <ambientLight intensity={1} />
          <directionalLight intensity={3} position={[10, 10, 10]} />
          <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={50} />
          {/* <PerspectiveCamera makeDefault position={[0, 0, 10]} zoom={0.4} /> */}
          <FaceModel />
        </Canvas>
      </div>
    </>
  );
};

export default App;
