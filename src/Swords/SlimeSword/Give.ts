import { MCFunction, MCFunctionInstance, NBT, give } from "sandstone";
import { self } from "../../Tick";
import { i } from "../../Utils/Functions";

const Give: MCFunctionInstance = MCFunction("swords/slime_sword/give", () => {
  give(
    self,
    i("minecraft:diamond_sword", {
      display: {
        Name: '{"text":"Slime Sword","color":"#ABD8FF","italic":false}',
        Lore: [
          '{"text":"Jump+", "color":"blue"}',
          '{"text":"Slowness attack", "color":"blue"}',
        ],
      },
      CustomModelData: 110006,
    })
  );
});
