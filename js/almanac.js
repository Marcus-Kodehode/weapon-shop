import { monsters } from "./monsters.js";

// Vi henter almanacContent direkte fra DOM her
const almanacContent = document.getElementById("almanac-content");

export function createAlmanac() {
  // Tøm innholdet først (om nødvendig)
  almanacContent.innerHTML = "";
  
  // For hvert monster, lag en boks med informasjon og bilde
  Object.keys(monsters).forEach((monsterKey) => {
    const monster = monsters[monsterKey];
    // Her forutsetter vi at monster-objektene har properties "name" og "image"
    // og eventuelt flere egenskaper som beskriver ingredienser eller stats.
    almanacContent.insertAdjacentHTML(
      "beforeend",
      `
      <div class="almanac-monster">
        <h2>${monster.name}</h2>
        <img src="${monster.image}" alt="${monster.name}" />
        <div class="monster-info">
          ${Object.keys(monster)
            .filter((key) => key !== "name" && key !== "image")
            .map((key) => `<p>${key}: ${monster[key]}</p>`)
            .join("")}
        </div>
      </div>
      `
    );
  });
}

  



