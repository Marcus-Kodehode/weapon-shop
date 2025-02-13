import { ingredients } from "./ingredients.js";
import { monsters } from "./monsters.js";
import { getWeapon, weapons } from "./weapons.js";

// Returnerer de nødvendige materialene for et våpen som en array med objekter { material, amount }
export function getWeaponMaterials(weapon) {
  return Object.entries(weapons[weapon])
    .filter(([key]) => key !== "image" && key !== "name")
    .map(([key, value]) => ({ material: key, amount: value }));
}

// Sjekker om de nåværende ingrediensene matcher en våpenoppskrift
export function checkIfIngredientsMatchWeapon(weaponName) {
  const weaponMaterials = getWeaponMaterials(weaponName);
  console.log(`Checking ${weaponName} with requirements:`, weaponMaterials);

  const isMatch = weaponMaterials.every(({ material, amount }) => {
    if (!ingredients[material]) {
      console.error(`Ingredient "${material}" does not exist in ingredients.`);
      return false;
    }
    const currentAmount = ingredients[material].amount;
    console.log(`For ${material}: requires ${amount}, current amount is ${currentAmount}`);
    return currentAmount >= amount;
  });

  console.log(`Is ${weaponName} a match?`, isMatch);
  return isMatch ? getWeapon(weaponName) : false;
}

// Returnerer et spesifikt ingredienskrav fra et monster
export function getMonsterIngredient(monster, ingredient) {
  return monsters[monster][ingredient];
}









