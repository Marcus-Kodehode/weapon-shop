import  getWeaponMaterials  from "./compare.js";
import { ingredients } from "./ingredients.js";
import { almanacButton, almanacContent, compendiumButton, compendiumContent } from "./main.js";
import { weapons } from "./weapons.js";

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

  Object.keys(weapons).forEach((weapon) => {
    almanacContent.insertAdjacentHTML(
      "beforeend",
      `
       <div class="almanac-weapon ${weapon}">
          <div class="almanac-weapon-inner">
            <div class="almanac-weapon-front">
              <div class="almanac-weapon-background"></div>
              <p>${weapons[weapon].name}</p>
              <img class="almanac-weapon-image" src="${weapons[weapon].image}" alt="${weapons[weapon].name}" />
              <div class="almanac-materials">
                ${getWeaponMaterials(weapon)
                  .map((mat) => `
                    <div class="almanac-material">
                      <p>${mat.material}: ${mat.amount}</p>
                    </div>
                  `)
                  .join("")}
              </div>
            </div>
          </div>
        </div>
        `
    );
  });
}

