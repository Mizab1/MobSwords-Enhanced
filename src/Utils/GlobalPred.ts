import { Predicate, PredicateInstance } from "sandstone";

export const isSneaking: PredicateInstance = Predicate("is_sneaking", {
  condition: "minecraft:entity_properties",
  entity: "this",
  predicate: {
    flags: {
      is_sneaking: true,
    },
  },
});
