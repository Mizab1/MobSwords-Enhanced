import { MCFunction, MCFunctionInstance, particle, rel } from "sandstone";

export const particles: MCFunctionInstance = MCFunction(
  "swords/enderman_sword/particles",
  () => {
    particle("minecraft:portal", rel(0, 0, 0), [0.3, 0.1, 0.3], 0.1, 2);
  }
);
