import { MCFunction, MCFunctionInstance, give } from "sandstone";
import { self } from "../../Tick";
import { i } from "../../Utils/Functions";

const Give: MCFunctionInstance = MCFunction("swords/shulker_sword/give", () => {
  give(
    self,
    i("minecraft:diamond_sword", {
      display: {
        Name: '{"text":"Shulker Sword","color":"#ABD8FF","italic":false}',
        Lore: [
          '{"text":"Levitation Attack+", "color":"blue"}',
          '{"text":"Resistance+", "color":"blue"}',
        ],
      },
      CustomModelData: 110004,
    })
  );
});
