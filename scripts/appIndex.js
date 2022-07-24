/* evento del Aside */
let btnMostrarAside = document.querySelector(".logo-aside");
let btnOcultarAside = document.querySelector(".ocultar-aside");
let aside = document.querySelector(".aside-oculto");

btnMostrarAside.addEventListener("click", mostrarAside);
btnOcultarAside.addEventListener("click", ocultarAside);

function mostrarAside() {
  aside.classList.replace("aside-oculto", "aside-mostrar");
}

function ocultarAside() {
  aside.classList.replace("aside-mostrar", "aside-oculto");
}
