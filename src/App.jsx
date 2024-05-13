import Hero from "./pages/Hero";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Heart from "./components/Heart";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { HeartModel } from "../public/models/Heart";
import { Model } from "../public/models/Heart1";
gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <>
      <div className="heart-canvas">
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
