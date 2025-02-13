// Function that can be called to get the weapon image url
export const baseWeaponImageUrl = (weapon) => {
  return `./public/images/weapons/${weapon}.png`;
};

// Function that can be called to get the weapon object
export function getWeapon(weapon) {
  return weapons[weapon];
}

// Function that can be called to check the materials for a weapon:
export function checkWeaponMaterials(weapon) {
  return Object.entries(weapons[weapon])
    .filter(([key]) => key !== "image" && key !== "name")
    .map(([key, value]) => ({ material: key, amount: value }));
}

// All weapons, created as objects (for easier reference)
export const weapons = {
  ironSword: {
    ironOre: 2,
    wood: 1,
    leatherStraps: 1,
    steel: 1,
    water: 0,
    crystals: 0,
    image: baseWeaponImageUrl("iron-sword"),
    name: "Iron Sword",
  },
  battleAxe: {
    ironOre: 3,
    wood: 2,
    leatherStraps: 1,
    steel: 2,
    water: 0,
    crystals: 2,
    image: baseWeaponImageUrl("battle-axe"),
    name: "Battle Axe",
  },
  magicStaff: {
    ironOre: 0,
    wood: 3,
    leatherStraps: 0,
    steel: 0,
    water: 2,
    crystals: 3,
    image: baseWeaponImageUrl("magic-staff"),
    name: "Magic Staff",
  },
  dagger: {
    ironOre: 1,
    wood: 0,
    leatherStraps: 1,
    steel: 2,
    water: 0,
    crystals: 1,
    image: baseWeaponImageUrl("dagger"),
    name: "Dagger",
  },
  warhammer: {
    ironOre: 4,
    wood: 2,
    leatherStraps: 1,
    steel: 3,
    water: 0,
    crystals: 2,
    image: baseWeaponImageUrl("warhammer"),
    name: "Warhammer",
  },
  longsword: {
    ironOre: 3,
    wood: 1,
    leatherStraps: 1,
    steel: 3,
    water: 0,
    crystals: 2,
    image: baseWeaponImageUrl("longsword"),
    name: "Longsword",
  },
  shield: {
    ironOre: 2,
    wood: 2,
    leatherStraps: 2,
    steel: 1,
    water: 0,
    crystals: 1,
    image: baseWeaponImageUrl("shield"),
    name: "Shield",
  },
  crossbow: {
    ironOre: 1,
    wood: 4,
    leatherStraps: 2,
    steel: 1,
    water: 0,
    crystals: 1,
    image: baseWeaponImageUrl("crossbow"),
    name: "Crossbow",
  }
};

