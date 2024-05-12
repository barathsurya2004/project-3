import { useGSAP } from "@gsap/react";
import "./Hero.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  useGSAP(() => {
    const beyond = gsap.timeline({
      scrollTrigger: {
        markers: true,
        trigger: ".text-change1",
        start: "top bottom",

        scrub: 0.8,
      },
    });
    const culture = gsap.timeline({
      scrollTrigger: {
        markers: true,
        trigger: ".text-change2",
        start: "top bottom",

        scrub: 0.8,
      },
    });
    gsap.from(".start", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.05,
    });
    beyond.to(".move1", {
      y: "-100px",
      opacity: 0,
    });
    beyond.fromTo(
      ".move2",
      {
        y: "100vw",
      },
      {
        y: 0,
      }
    );
    culture.to(".move2", {
      x: "-100px",
      opacity: 0,
    });
    culture.fromTo(
      ".move3",
      {
        y: "100",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
      }
    );
  });

  return (
    <div className="hero">
      <div className="staying title">
        {"FOOD IS".split("").map((word) => {
          return word === " " ? (
            <span className="word start">&nbsp;</span>
          ) : (
            <span className="word start">{word}</span>
          );
        })}
      </div>
      <div className="move1 subtitle">
        {"LOVE".split("").map((word) => {
          return word === " " ? (
            <span className="word start ">&nbsp;</span>
          ) : (
            <span className="word start">{word}</span>
          );
        })}
      </div>
      <div className="move2 subtitle">
        <div>
          {"BEYOND".split("").map((word) => {
            return word === " " ? (
              <span className="word move2">&nbsp;</span>
            ) : (
              <span className="word move2">{word}</span>
            );
          })}
        </div>
        <div>
          {"TIME".split("").map((word) => {
            return word === " " ? (
              <span className="word move2">&nbsp;</span>
            ) : (
              <span className="word move2">{word}</span>
            );
          })}
        </div>
      </div>
      <div className="move3 subtitle">
        {"CULTURE".split("").map((word) => {
          return word === " " ? (
            <span className="word move3">&nbsp;</span>
          ) : (
            <span className="word move3">{word}</span>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
