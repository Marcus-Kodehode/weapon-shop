import { potions } from "./potions.js";

// Load in all dynamic images so they are included in the build:
export const potionImagesToPreload = () => {
  for (const potion in potions) {
    const img = new Image();
    img.src = potions[potion].image;
    console.log(potions[potion].image);
    document.body.appendChild(img);
    img.style.display = "none";
  }
};

export const ingredientImagesToPreload = () => {};
