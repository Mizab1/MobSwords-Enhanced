import { MCFunction, MCFunctionInstance, particle, rel } from "sandstone";

export const particles: MCFunctionInstance = MCFunction(
  "swords/shulker_sword/particles",
  () => {
    particle("minecraft:end_rod", rel(0, 0, 0), [0.3, 0.1, 0.3], 0.03, 5);
  }
);
