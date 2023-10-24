import { particle, rel } from "sandstone";

const particles = () => {
  particle(
    // @ts-ignore
    "minecraft:dust",
    [0.753, 1.0, 0.169],
    2,
    rel(0, 0, 0),
    [1.5, 1.5, 1.5],
    0.1,
    250
  );
};
