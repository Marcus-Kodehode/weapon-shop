// compendium.js
import { getMonsterIngredient } from "./compare.js";
import { ingredients } from "./ingredients.js";
import {
  compendiumButton,
  compendiumContent,
  almanacContent,
  almanacButton,
} from "./main.js";
import { monsters } from "./monsters.js";
import { baseIngredientImageUrl } from "./constants.js";

export function createCompendium() {
  compendiumButton.addEventListener("click", () => {
    compendiumContent.classList.toggle("show");
    compendiumButton.classList.toggle("open");

    almanacContent.classList.remove("show");
    almanacButton.classList.remove("open");
    almanacButton.textContent = "Open Almanac";
    if (compendiumButton.classList.contains("open")) {
      compendiumButton.textContent = "Close Compendium";
    } else {
      compendiumButton.textContent = "Open Compendium";
    }
  });
  Object.keys(monsters).forEach((monster) => {
    compendiumContent.insertAdjacentHTML(
      "beforeend",
      `
       <div class="compendium-monster ${monster}">
          <div class="compendium-monster-inner">
            
            <div class="compendium-monster-front">
              <div class="compendium-monster-background"></div>
              <p class="compendium-monster-name">${monsters[monster].name}</p>
              <img class="compendium-monster-image" src="${monsters[monster].image}" alt="${monsters[monster].name}" />
              <p class="compendium-monster-drops">Loot:</p>
              <div class="compendium-ingredients">
                ${Object.keys(ingredients)
                  .map((ingredient) => {
                    return `
                    <div class="compendium-ingredient">
                      <p>${getMonsterIngredient(monster, ingredient)}</p>
                      <img class="compendium-ingredient-image" src="${baseIngredientImageUrl(
                        ingredients[ingredient].ingredientName
                      )}" alt="${ingredients[ingredient].ingredientName}" />
                    </div>
                    `;
                  })
                  .join("")}
              </div>
            </div>
        
            <div class="compendium-monster-backface">
              <p id="${monster}-made" class="made">V</p>
              <img src="${monsters[monster].image}" alt="${monsters[monster].name}" />
            </div>
          </div>
        </div>
        `
    );
  });
}
