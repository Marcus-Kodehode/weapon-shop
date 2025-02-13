import { getMonsterIngredient } from "./compare.js";
import { almanacContent } from "./main.js";
import { monsters } from "./monsters.js";

export function createAlmanac() {
  // Eksempel: legg til informasjon for hvert monster i almanacContent
  Object.keys(monsters).forEach((monster) => {
    almanacContent.insertAdjacentHTML(
      "beforeend",
      `
      <div class="almanac-monster">
        <h2>${monsters[monster].name}</h2>
        <p>Ingredient info: ${getMonsterIngredient(monster, "ironOre")}</p>
      </div>
      `
    );
  });
}
  



