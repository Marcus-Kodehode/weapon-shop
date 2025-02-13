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

// Hvis du har et element for å vise at et våpen er "laget" – hvis ikke, ignorer:
export const made = document.getElementById("made");

// Lydfiler (bruk absolutte URL-er slik at GitHub Pages finner dem)
export const weaponSuccessSound = new Audio("https://marcus-kodehode.github.io/weapon-shop/public/sounds/weapon-success.mp3");
export const weaponFailSound = new Audio("https://marcus-kodehode.github.io/weapon-shop/public/sounds/weapon-failed.mp3");

// Sett initialt fallback-bilde (bruk "default"; sørg for at default.png ligger på riktig sted)
weaponResultImage.src = baseWeaponImageUrl("default");

// Opprett innhold for Almanac og Compendium
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
  
  // Her bruker vi absolutte URL-er (du kan også bruke relative hvis base-pathen er riktig)
  ingredientElement.style.backgroundImage = `url("https://marcus-kodehode.github.io/weapon-shop/public/images/ingredients/${ingredients[ingredient].ingredientName}.png")`;

  document.getElementById(`${ingredients[ingredient].id}-add`).addEventListener("click", () => {
    increaseAmount(ingredient);
    document.getElementById(`${ingredients[ingredient].id}-amount`).textContent = ingredients[ingredient].amount;
  });

  document.getElementById(`${ingredients[ingredient].id}-subtract`).addEventListener("click", () => {
    decreaseAmount(ingredient);
    document.getElementById(`${ingredients[ingredient].id}-amount`).textContent = ingredients[ingredient].amount;
  });
});

// Event listener for å toggle visning av Almanac (ligner Compendium-logikken)
almanacButton.addEventListener("click", () => {
  almanacContent.classList.toggle("show");
  almanacButton.classList.toggle("open");

  // Lukk Compendium dersom det er åpent:
  compendiumContent.classList.remove("show");
  compendiumButton.classList.remove("open");
  compendiumButton.textContent = "Open Compendium";

  if (almanacButton.classList.contains("open")) {
    almanacButton.textContent = "Close Almanac";
  } else {
    almanacButton.textContent = "Open Almanac";
  }
});

// Event listener for å toggle visning av Compendium (hvis ønskelig)
compendiumButton.addEventListener("click", () => {
  compendiumContent.classList.toggle("show");
  compendiumButton.classList.toggle("open");

  // Lukk Almanac dersom det er åpent:
  almanacContent.classList.remove("show");
  almanacButton.classList.remove("open");
  almanacButton.textContent = "Open Almanac";

  if (compendiumButton.classList.contains("open")) {
    compendiumButton.textContent = "Close Compendium";
  } else {
    compendiumButton.textContent = "Open Compendium";
  }
});

// Forge-knapp: sjekk om ingrediensene matcher et våpen
forge.addEventListener("click", () => {
  weaponResultText.textContent = "Forge a weapon:";
  // Sett fallback-bilde først:
  weaponResultImage.src = baseWeaponImageUrl("default");

  const matchingWeapons = [];
  for (const weaponName in weapons) {
    console.log("Checking weapon match for:", weaponName);
    if (checkIfIngredientsMatchWeapon(weaponName)) {
      matchingWeapons.push(weaponName);
    }
  }

  if (matchingWeapons.length === 0) {
    console.log("No matching weapon found.");
    weaponFailSound.play();
  } else {
    // Hvis flere våpen matcher, kan du utvide denne logikken til å la brukeren velge.
    const chosenWeaponName = matchingWeapons[0];
    const chosenWeapon = weapons[chosenWeaponName];
    weaponSuccessSound.play();
    weaponResultText.textContent = getWeapon(chosenWeaponName).name;
    
    if (chosenWeapon.image) {
      weaponResultImage.src = chosenWeapon.image;
    } else {
      console.error("No image found for:", chosenWeaponName);
      weaponResultImage.src = baseWeaponImageUrl("default");
    }
    
    // Dersom du har et element som skal vise at våpenet er laget:
    const madeElement = document.getElementById(`${chosenWeaponName}-made`);
    if (madeElement) {
      madeElement.style.display = "block";
    } else {
      console.warn(`Element with id "${chosenWeaponName}-made" not found.`);
    }
  }

  resetIngredients();
});

// Reset-knapp: tilbakestill ingredienser og UI
reset.addEventListener("click", () => {
  resetIngredients();
  weaponResultText.textContent = "Forge a weapon:";
  weaponResultImage.src = baseWeaponImageUrl("default");
});





