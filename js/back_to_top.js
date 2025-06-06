// Taget fra W3 schools https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

const knap = document.querySelector("#backtotop_knap"); // Konstanter

window.addEventListener("scroll", scrollFunction); // Når man scrolle  går den til funktionen scrollFunktion

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //Tjekker om man er scrollet 20px ned
    knap.style.display = "block"; // Hvis man har scrollet 20px ned fra toppen, så skal den vises
  } else {
    knap.style.display = "none"; //Hvis man ikke har scrollet 20px ned fra toppen, så skal den ikke vises
  }
}
