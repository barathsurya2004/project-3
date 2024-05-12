import Tilt from "react-parallax-tilt";
import "./Heart.css";
const Heart = () => {
  return (
    <Tilt tiltReverse tiltMaxAngleX={5} tiltMaxAngleY={5}>
      <div className="heart"></div>
    </Tilt>
  );
};

export default Heart;
