// Taget fra W3 schools https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

const knap = document.querySelector("#backtotop_knap"); // Erklærer konstant

window.addEventListener("scroll", scrollFunktion); // Når bruger scroller på siden går den til funktion størrelseFunktion

function scrollFunktion() {
  //Tjekker om man er scrollet 20px ned samt størrelsen på sitet
  if (window.innerWidth <= 500 && (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)) {
    // || betyder eller && og
    knap.style.display = "block"; // Hvis man har scrollet 20px ned fra toppen, så skal den vises
  } else {
    knap.style.display = "none"; //Hvis man ikke har scrollet 20px ned fra toppen, så skal den ikke vises
  }
}
