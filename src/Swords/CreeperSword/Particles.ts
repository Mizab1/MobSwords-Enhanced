import { MCFunction, MCFunctionInstance, particle, rel } from "sandstone";

export const particles: MCFunctionInstance = MCFunction(
  "swords/creeper_sword/particles",
  () => {
    particle(
      // @ts-ignore
      "minecraft:dust",
      [0, 1, 0],
      1,
      rel(0, 0, 0),
      [0.3, 0.1, 0.3],
      0.1,
      10
    );
  }
);
