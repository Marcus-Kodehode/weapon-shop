import { createAlmanac } from "./almanac.js";
import { checkIfIngredientsMatchWeapon } from "./compare.js";
import { createCompendium } from "./compendium.js";
import { weaponImagesToPreload } from "./imagesLoad.js";
import {
  decreaseAmount,
  increaseAmount,
  ingredients,
  resetIngredients,
} from "./ingredients.js";
import { baseWeaponImageUrl, getWeapon, weapons } from "./weapons.js";

// Last inn dynamiske bilder slik at de inkluderes i builden:
document.addEventListener("DOMContentLoaded", () => {
  weaponImagesToPreload();
});

// Hent nødvendige DOM-elementer:
export const ingredientArea = document.getElementById("ingredients");
export const forge = document.getElementById("forge");
export const reset = document.getElementById("reset");
export const weaponResultText = document.getElementById("weaponResultText");
export const weaponResultImage = document.getElementById("weaponResultImage");

export const almanac = document.getElementById("almanac");
export const almanacButton = document.getElementById("almanac-button");
export const almanacContent = document.getElementById("almanac-content");

export const compendium = document.getElementById("compendium");
export const compendiumButton = document.getElementById("compendium-button");
export const compendiumContent = document.getElementById("compendium-content");

// Eventuelt element for å indikere at et våpen er "laget" – dette opprettes kanskje ikke for våpen:
export const made = document.getElementById("made");

// Lydfiler for suksess og feil:
export const weaponSuccessSound = new Audio("./public/sounds/weapon-success.mp3");
export const weaponFailSound = new Audio("./public/sounds/weapon-failed.mp3");

// Sett initialt fallback-bilde (bruk "default"; sørg for at default.png finnes)
weaponResultImage.src = baseWeaponImageUrl("default");

createAlmanac();
createCompendium();

// Legg ingrediensene til i DOM-en:
Object.keys(ingredients).forEach((ingredient) => {
  ingredientArea.insertAdjacentHTML(
    "beforeend",
    `
  <div class="ingredient-wrapper" id="${ingredients[ingredient].ingredientName}-ingredient">
    <p>${ingredients[ingredient].ingredientName}</p>
    <div class="ingredients-buttons">
      <button class="add-button" id="${ingredients[ingredient].id}-add">+</button>
      <button class="subtract-button" id="${ingredients[ingredient].id}-subtract">-</button>
      <p id="${ingredients[ingredient].id}-amount" class="ingredient-amount">${ingredients[ingredient].amount}</p>
    </div>
  </div>
  `
  );

  const ingredientElement = document.getElementById(
    `${ingredients[ingredient].ingredientName}-ingredient`
  );
  
  ingredientElement.style.backgroundImage = `url("./public/images/ingredients/${ingredients[ingredient].ingredientName}.png")`;

  document.getElementById(`${ingredients[ingredient].id}-add`).addEventListener("click", () => {
    increaseAmount(ingredient);
    document.getElementById(`${ingredients[ingredient].id}-amount`).textContent = ingredients[ingredient].amount;
  });

  document.getElementById(`${ingredients[ingredient].id}-subtract`).addEventListener("click", () => {
    decreaseAmount(ingredient);
    document.getElementById(`${ingredients[ingredient].id}-amount`).textContent = ingredients[ingredient].amount;
  });
});

// Lytt til "Forge"-knappen for å sjekke om ingrediensene matcher et våpen
forge.addEventListener("click", () => {
  weaponResultText.textContent = "Forge a weapon:";
  // Sett fallback-bilde først:
  weaponResultImage.src = baseWeaponImageUrl("default");

  let matchingWeapon = null;
  let matchingWeaponName = null;

  console.log("Checking ingredients match...");

  for (const weaponName in weapons) {
    console.log("Checking weapon match for:", weaponName);
    console.log("Function returns:", checkIfIngredientsMatchWeapon(weaponName));

    if (checkIfIngredientsMatchWeapon(weaponName)) {
      matchingWeapon = weapons[weaponName];
      matchingWeaponName = weaponName;
      break;
    }
  }

  if (matchingWeapon) {
    weaponSuccessSound.play();
    weaponResultText.textContent = getWeapon(matchingWeaponName).name;
    
    if (getWeapon(matchingWeaponName).image) {
      weaponResultImage.src = getWeapon(matchingWeaponName).image;
    } else {
      console.error("No image found for:", matchingWeaponName);
      weaponResultImage.src = baseWeaponImageUrl("default");
    }
    
    // Sjekk om elementet finnes før vi prøver å endre det:
    const madeElement = document.getElementById(`${matchingWeaponName}-made`);
    if (madeElement) {
      madeElement.style.display = "block";
    } else {
      console.warn(`Element with id "${matchingWeaponName}-made" not found.`);
    }
  } else {
    console.log("No matching weapon found.");
    weaponFailSound.play();
  }

  resetIngredients();
});

// Lytt til "Reset"-knappen for å tilbakestille ingredienser og UI:
reset.addEventListener("click", () => {
  resetIngredients();
  weaponResultText.textContent = "Forge a weapon:";
  weaponResultImage.src = baseWeaponImageUrl("default");
});



