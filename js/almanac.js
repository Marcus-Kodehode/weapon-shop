import { getPotionIngredient } from "./compare.js";
import { ingredients } from "./ingredients.js";
import {
  almanacButton,
  almanacContent,
  baseIngredientImageUrl,
  compendiumButton,
  compendiumContent,
} from "./main.js";
import { potions } from "./potions.js";

export function createAlmanac() {
  almanacButton.addEventListener("click", () => {
    almanacContent.classList.toggle("show");
    almanacButton.classList.toggle("open");
    compendiumContent.classList.remove("show");
    compendiumButton.classList.remove("open");

    compendiumButton.textContent = "Open Compendium";
    if (almanacButton.classList.contains("open")) {
      almanacButton.textContent = "Close Almanac";
    } else {
      almanacButton.textContent = "Open Almanac";
    }
  });
  Object.keys(potions).forEach((potion) => {
    almanacContent.insertAdjacentHTML(
      "beforeend",
      `
       <div class="almanac-potion ${potion}">
          <div class="almanac-potion-inner">
            
            <div class="almanac-potion-front">
            <div class="almanac-potion-background"></div>
              <p>${potions[potion].name}</p>
              <img class="almanac-potion-image" src="${potions[potion].image}" alt="${potions[potion].name}" />
              <div class="almanac-ingredients">
                ${Object.keys(ingredients).map((ingredient) => {
        return `
                    <div class="almanac-ingredient">
                      <p>${getPotionIngredient(potion, ingredient)}</p>
                      <img class="almanac-ingredient-image" src="${baseIngredientImageUrl(
          ingredients[ingredient].ingredientName
        )}" alt="${ingredients[ingredient].ingredientName}" />
                    </div>
                    `;
      }).join("")}
              </div>
            </div>
            
        
            <div class="almanac-potion-backface">
                  <p id="${potion}-made" class="made">V</p>
                  <img class="" src="${potions[potion].image}" alt="${potions[potion].name}" />
            </div>
          </div>
        </div>
        `
    );
  });
}
