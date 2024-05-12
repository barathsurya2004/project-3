import Hero from "./pages/Hero";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Heart from "./components/Heart";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const App = () => {
  useGSAP(() => {
    gsap.from(".heart-container", {
      scale: 0,
      opacity: 0,
      duration: 1,
      delay: 1,
    });
    gsap.to(".heart-container", {
      rotationY: 1000,
      duration: 5,
      scrollTrigger: {
        trigger: ".text-change1",
        start: "top bottom",
        toggleActions: "play none reverse  none",
      },
    });
  });
  return (
    <>
      <div className="animation-canvas">
        {/* <Canvas><Heart /></Canvas> */}
        <div className="heart-container">
          <Heart />
        </div>
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
