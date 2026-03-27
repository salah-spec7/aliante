import { Composition } from "remotion";
import { BrandedLoop } from "./BrandedLoop";

export const RemotionRoot = () => (
  <Composition
    id="main"
    component={BrandedLoop}
    durationInFrames={300}
    fps={30}
    width={1920}
    height={1080}
  />
);
