const coverUrl = "./assets/img/cover/";
let currentTrack = 0; // Commencer avec la première diapositive
const initSlider = () => {
    // Créez une première image d'arrière-plan fixe
    const coverSlider = document.createElement("img");
  
    coverSlider.id = "coverSlider";
    sliderHTML.append(coverSlider);

    // Créez une deuxième image superposée destinée à l'effet de transition
    const image0 = document.createElement("img");
   
    image0.id = "image0";
    sliderHTML.append(image0);
}

const nextSlider = () => {
    document.querySelector("#coverSlider").src = coverUrl + catalogue[currentTrack].cover;
    document.querySelector("#image0").classList.add("transSlider", "slideRight");
    setTimeout(() => {
        document.querySelector("#image0").src = coverUrl + catalogue[currentTrack].cover;
        document.querySelector("#image0").classList.remove("transSlider", "slideRight");
    }, 500);
}

const prevSlider = () => {
    document.querySelector("#coverSlider").src = coverUrl + catalogue[currentTrack].cover;
    document.querySelector("#image0").classList.add("transSlider", "slideLeft");
    setTimeout(() => {
        document.querySelector("#image0").src = coverUrl + catalogue[currentTrack].cover;
        document.querySelector("#image0").classList.remove("transSlider", "slideLeft");
    }, 500);
}

const slider = (status = "init") => {
    switch (status) {
        case "init":
            initSlider();
            break;
        case "next":
            nextSlider();
            break;
        case "prev":
            prevSlider();
            break;
        default:
            break;
    }
};

export { slider };
