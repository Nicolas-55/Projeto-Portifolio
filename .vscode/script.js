function toggleMode() {
  const html = document.documentElement

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
}

/* html.classList.toggle("light") */

/* pegou o HTML
 Trocou a Classe
 Pegar a tag IMG
 SUBSTITUIR A TMG EM LIGHT
 MANTER EM MODO NORMAL ( ORIGINAL )


*/
const img = document.querySelector("#profile img")
if (html.classList.contains("light")) {
  img.setAttribute("src", "./assets/avatar.png")
} else {
  img.setAttribute(
    "src",
    "./assets/WhatsApp Image 2026-02-12 at 10.38.18 - Copia.png",
  )
}
