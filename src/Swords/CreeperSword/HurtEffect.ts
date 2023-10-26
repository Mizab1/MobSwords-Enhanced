import {
  MCFunctionInstance,
  MCFunction,
  execute,
  Selector,
  effect,
  particle,
  rel,
  summon,
  NBT,
} from "sandstone";
import { isHoldingThis } from "./Predicates";
import { self } from "../../Tick";

export const CreeperHurtEffect: MCFunctionInstance = MCFunction(
  "swords/creeper_sword/hurt_effect",
  () => {
    execute.if
      .entity(Selector("@a", { distance: [1, 4], predicate: isHoldingThis }))
      .run(() => {
        summon("minecraft:creeper", rel(0, 0, 0), {
          CustomName: '{"text":"Explosion","italic":false}',
          Fuse: 0,
          ignited: NBT.byte(1),
          ExplosionRadius: NBT.byte(1),
        });
        particle("minecraft:explosion", rel(0, 1, 0), [0.5, 0.5, 0.5], 0.1, 25);
      });
  }
);
