// main.js
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

// Load in all dynamic images so they are included in the build:
document.addEventListener("DOMContentLoaded", () => {
  weaponImagesToPreload();
});

// Get all the DOM elements needed:
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

export const made = document.getElementById("made");

export const weaponSuccessSound = new Audio("./public/sounds/weapon-success.mp3");
export const weaponFailSound = new Audio("./public/sounds/weapon-failed.mp3");

// Initially set the image to an empty weapon:
weaponResultImage.src = baseWeaponImageUrl("empty");

createAlmanac();
createCompendium();

// Loop through the ingredients and add them to the DOM as HTML:
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

// Add an event listener to the "Forge" button to check if the current ingredients match a weapon
forge.addEventListener("click", () => {
  weaponResultText.textContent = "Forge a weapon:";
  weaponResultImage.src = baseWeaponImageUrl("empty");

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
      weaponResultImage.src = baseWeaponImageUrl("empty");
    }

    document.getElementById(`${matchingWeaponName}-made`).style.display = "block";
  } else {
    console.log("No matching weapon found.");
    weaponFailSound.play();
  }

  resetIngredients();
});

// Add an event listener to the "Reset" button to reset the ingredients and UI
reset.addEventListener("click", () => {
  resetIngredients();
  weaponResultText.textContent = "Forge a weapon:";
  weaponResultImage.src = baseWeaponImageUrl("empty");
});

