import {
  EffectComposer,
  Outline,
  Pixelation,
} from "@react-three/postprocessing";
import { Resizer, BlendFunction } from "postprocessing";
const Effect = () => {
  return (
    <EffectComposer enabled autoClear={false}>
      <Outline
        selection={null}
        blendFunction={BlendFunction.ALPHA}
        // patternTexture={null}
        edgeStrength={20}
        pulseSpeed={0}
        visibleEdgeColor={"#000000"}
        hiddenEdgeColor={"#000000"}
        // width={256}
        // height={256}
        blur={10}
        xRay={false}
      />
    </EffectComposer>
  );
};

export default Effect;
