import { MCFunction, MCFunctionInstance, particle, rel } from "sandstone";

export const particles: MCFunctionInstance = MCFunction(
  "swords/blaze_sword/particles",
  () => {
    particle("minecraft:flame", rel(0, 0, 0), [0.3, 0.1, 0.3], 0.02, 5);
  }
);

export const flyingParticles: MCFunctionInstance = MCFunction(
  "swords/blaze_sword/flying_particles",
  () => {
    particle("minecraft:smoke", rel(0, 0, 0), [0.2, 0, 0.2], 0, 20);
  }
);
