import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const SvgMorphAnimation = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const line = lineRef.current;
    const circle = circleRef.current;

    const onInitialMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      gsap.fromTo(
        line,
        { width: 0 },
        {
          width: Math.hypot(x - 100, y - 100),
          duration: 1,
          onUpdate: () => {
            const angle = Math.atan2(y - 100, x - 100) * (180 / Math.PI);
            gsap.set(line, { rotation: angle });
          },
        }
      );

      container.removeEventListener("mousemove", onInitialMove);
      container.addEventListener("mousemove", onMouseMove);
    };

    const onMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const length = Math.hypot(x - 100, y - 100);
      const angle = Math.atan2(y - 100, x - 100) * (180 / Math.PI);

      gsap.set(line, { width: length, rotation: angle });
    };

    container.addEventListener("mousemove", onInitialMove);

    return () => {
      container.removeEventListener("mousemove", onInitialMove);
      container.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        ref={circleRef}
        style={{
          width: "20px",
          height: "20px",
          backgroundColor: "orange",
          borderRadius: "50%",
          position: "absolute",
          left: "100px",
          top: "100px",
          transform: "translate(-50%, -50%)",
        }}
      ></div>
      <div
        ref={lineRef}
        style={{
          height: "5px",
          backgroundColor: "orange",
          position: "absolute",
          left: "100px",
          top: "100px",
          transformOrigin: "left center",
        }}
      ></div>
    </div>
  );
};

export default SvgMorphAnimation;
