import { weapons } from "./weapons.js";

// Load in all dynamic images so they are included in the build:
export const weaponImagesToPreload = () => {
  for (const weapon in weapons) {
    const img = new Image();
    img.src = weapons[weapon].image;
    console.log("Preloading image:", img.src);
    document.body.appendChild(img);
    img.style.display = "none";
  }
};