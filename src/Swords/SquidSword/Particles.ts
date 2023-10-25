import { MCFunction, MCFunctionInstance, particle, rel } from "sandstone";

export const particles: MCFunctionInstance = MCFunction(
  "swords/squid_sword/particles",
  () => {
    particle("minecraft:dolphin", rel(0, 0.1, 0), [0.3, 0.1, 0.3], 0.1, 30);
  }
);
