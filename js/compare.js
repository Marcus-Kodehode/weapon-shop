import { checkAllIngredientsAmount } from "./ingredients.js";
import { monsters } from "./monsters.js";
import { getWeapon, weapons } from "./weapons.js";

// Function that returns the required materials for a weapon
export default function getWeaponMaterials(weapon) {
  return Object.entries(weapons[weapon])
    .filter(([key]) => key !== "image" && key !== "name")
    .map(([key, value]) => ({ material: key, amount: value }));
}

// Function to check if the current ingredients match a weapon recipe
export function checkIfIngredientsMatchWeapon(weaponName) {
  const currentIngredients = checkAllIngredientsAmount().toString();
  const weaponMaterials = getWeaponMaterials(weaponName)
    .map(({ amount }) => amount)
    .toString();
  
  return currentIngredients === weaponMaterials ? getWeapon(weaponName) : false;
}

// Function that returns a specific ingredient dropped by a monster
export function getMonsterIngredient(monster, ingredient) {
  return monsters[monster][ingredient];
}

// Ensure exports are included
// export { getWeaponMaterials, checkIfIngredientsMatchWeapon, getMonsterIngredient };



