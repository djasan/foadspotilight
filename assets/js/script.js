import { catalogue } from "./modules/catalogue.js";
import { slider } from "./modules/slider.js";

//console.dir(catalogue);

const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");

globalThis.sliderHTML = document.querySelector("#slider");

// Initialise le slider
slider("init");