import { useRef, useState } from "react";
import "./Comp.css";
const Comp = () => {
  const [sliderPercent, setSliderPercent] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef();
  return (
    <div
      className="container"
      onMouseMove={(e) => {
        if (!isDragging) return;
        const rect = sliderRef.current.getBoundingClientRect();
        console.log(rect);
        const x = e.clientX - 7.5;
        const w = window.innerWidth;
        const percent = (x / w) * 100;
        if (percent > 5 || percent < 95) {
          setSliderPercent(percent);
        }
      }}
    >
      <div className="pandi">
        <h1>pandiii</h1>
        <h2>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          eum facilis, obcaecati vero neque accusamus tempora recusandae,
          laboriosam iure id quaerat veniam autem corporis accusantium
          reprehenderit officia est voluptas expedita?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Exercitationem, expedita. Repudiandae
          vitae aliquid reiciendis dolore? Incidunt, ex? Atque temporibus nemo
          quaerat, recusandae facilis illo veritatis eveniet magni facere
          corporis doloremque. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Sint officia totam unde quis quam qui possimus ad
          fuga rem ut omnis reprehenderit, ab beatae enim sapiente illo ea,
          consectetur at. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Veniam, maxime numquam? A incidunt quasi accusantium consectetur
          deserunt ipsam aliquid obcaecati cum rerum tempora, necessitatibus nam
          eius nemo alias hic id. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Suscipit voluptatem voluptates, repudiandae aliquam
          sint perferendis! Eligendi, eos consectetur nobis fuga enim ab aliquam
          sequi facilis temporibus iusto aperiam molestias exercitationem! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Corrupti ea dolores
          veniam consequuntur itaque quos delectus maxime, perspiciatis quae
          molestiae non incidunt quod labore saepe error cum odit veritatis.
          Error. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Nostrum iusto, quidem eius soluta eligendi culpa. Quam sapiente, esse,
          harum error, beatae vel modi saepe autem excepturi dicta aliquam
          magnam quae! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Fugit, ipsa deleniti sequi fugiat tempora quidem quas veritatis.
          Eligendi beatae illum placeat, quos incidunt nemo? Veritatis non et
          repellendus error qui. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Eligendi, iure dolor quod qui nisi facilis quo, odio
          rerum dolores ratione sint placeat adipisci doloribus a nemo modi
          incidunt, ipsa nam! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Quo, eius ducimus est repellat natus sed repudiandae
          officiis alias fuga quas nostrum consectetur labore amet dicta
          inventore corrupti, necessitatibus voluptates enim. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quia recusandae ipsum voluptas
          veniam ullam eum qui consequuntur iusto ad quisquam magnam pariatur
          porro labore praesentium magni beatae optio, temporibus maiores?
        </h2>
      </div>
      <div
        className="slider"
        style={{
          clipPath: `inset(0px 0px 0px ${sliderPercent}%)`,
        }}
        onMouseUp={() => {
          setIsDragging(false);
        }}
      >
        <div className="chetti">
          <h1>chettiiii</h1>
          <h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            eum facilis, obcaecati Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Suscipit molestias, blanditiis ad sint sed quo
            expedita cumque pariatur accusantium, tempora minus! Enim ipsam
            sapiente facere eaque suscipit officiis labore perspiciatis? vero
            neque accusamus tempora recusandae, laboriosam iure id quaerat
            veniam autem corporis accusantium reprehenderit officia est voluptas
            expedita?Lorem ipsum d Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. At veniam amet quae corporis corrupti cumque? Vel
            odio quisquam iste cupiditate accusantium obcaecati ullam. Porro,
            cum quaerat doloremque voluptas minima ipsum. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Pariatur voluptatum laborum harum
            eos ipsum quod, minus fugit sunt itaque nesciunt nisi nobis
            consectetur excepturi similique eius qui ipsam. Voluptatum, quas.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aspernatur, sunt tempore. Hic iusto consectetur nemo odit at illo
            sit aliquam! Ea, et vel. Iure itaque impedit iusto provident ipsa
            soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nihil fugit ea natus facere aperiam aliquam perferendis maxime
            consequuntur similique suscipit mollitia quibusdam, ullam fugiat
            porro est, voluptatum doloremque obcaecati a! olor sit amet
            consectetur adipisicing elit. Exercitationem, expedita. Repudiandae
            vitae aliquid reiciendis dolore? Incidunt, ex? Atque temporibus nemo
            quaerat, recusandae facilis illo veritatis eveniet magni facere
            corporis doloremque. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Sint officia totam unde quis quam qui possimus ad
            fuga rem ut omnis reprehenderit, ab beatae enim sapiente illo ea,
            consectetur at. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Veniam, maxime numquam? A incidunt quasi accusantium
            consectetur deserunt ipsam aliquid obcaecati cum rerum tempora,
            necessitatibus nam eius nemo alias hic id.
          </h2>
        </div>
        <div
          className="control"
          style={{
            left: `${sliderPercent}%`,
          }}
          onMouseDown={() => {
            setIsDragging(true);
          }}
          ref={sliderRef}
        >
          <div className="but" />
        </div>
      </div>
    </div>
  );
};

export default Comp;
