import { Predicate, PredicateInstance } from "sandstone";

export const isHoldingThis: PredicateInstance = Predicate(
  "is_holding_horse_sword",
  {
    condition: "minecraft:entity_properties",
    entity: "this",
    predicate: {
      equipment: {
        mainhand: {
          //@ts-ignore
          item: "diamond_sword",
          nbt: "{CustomModelData:110001}",
        },
      },
    },
  }
);
