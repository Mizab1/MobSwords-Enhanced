import { MCFunction, MCFunctionInstance, particle, rel } from "sandstone";

export const particles: MCFunctionInstance = MCFunction(
  "swords/slime_sword/particles",
  () => {
    particle(
      "minecraft:block",
      "minecraft:slime_block",
      rel(0, 0, 0),
      [0.3, 0.1, 0.3],
      0.1,
      2
    );
  }
);
