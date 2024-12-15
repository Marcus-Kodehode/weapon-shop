
export const baseMonsterImageUrl = (monster) => {
    return `./public/images/monsters/${monster}-monster.webp`;
  };
  
  
  export function getMonster(monster) {
    return monsters[monster];
  }
  
  export function checkMonsterIngredientDrops(potion) {
    return Object.entries(monsters[potion])
      .filter(([key]) => key !== "image" && key !== "name")
      .map(([, value]) => value);
  }
  
  export const monsters = {
    lootGoblin: {
      herbs: 5,
      berries: 5,
      water: 5,
      mushrooms: 5,
      flowers: 5,
      crystals: 5,
      image: baseMonsterImageUrl("loot-goblin"),
      name: "Loot Goblin",
    },
    berryWolf: {
      herbs: 1,
      berries: 5,
      water: 0,
      mushrooms: 0,
      flowers: 2,
      crystals: 1,
      image: baseMonsterImageUrl("berry-wolf"),
      name: "Berry Wolf",
    },
    mushroomWolf: {
      herbs: 2,
      berries: 1,
      water: 0,
      mushrooms: 5,
      flowers: 0,
      crystals: 1,
      image: baseMonsterImageUrl("mushroom-wolf"),
      name: "Mushroom Wolf",
    },
    treant: {
      herbs: 5,
      berries: 2,
      water: 2,
      mushrooms: 1,
      flowers: 2,
      crystals: 3,
      image: baseMonsterImageUrl("treant"),
      name: "Treant",
    },
    waterElemental: {
      herbs: 0,
      berries: 0,
      water: 10,
      mushrooms: 0,
      flowers: 0,
      crystals: 3,
      image: baseMonsterImageUrl("water-elemental"),
      name: "Water Elemental",
    },
    nullWarden: {
      herbs: 0,
      berries: 0,
      water: 0,
      mushrooms: 0,
      flowers: 0,
      crystals: 15,
      image: baseMonsterImageUrl("null-warden"),
      name: "Null Warden",
    },

  };
  