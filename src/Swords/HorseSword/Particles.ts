import { MCFunction, MCFunctionInstance, particle, rel } from "sandstone";

export const particles: MCFunctionInstance = MCFunction(
  "swords/horse_sword/particles",
  () => {
    particle(
      // @ts-ignore
      "minecraft:dust",
      [0.753, 1.0, 0.169],
      2,
      rel(0, 0, 0),
      [0.3, 0.1, 0.3],
      0.1,
      10
    );
  }
);
