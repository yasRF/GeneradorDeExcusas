/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
// Obtengo la referencia al boton del html
var button = document.getElementById("btn");
// Tras obtener la rerefencia del boton, añado un escuchador al evento click,
// entonces cada vez que se haga click se va a llamar a esta funcion
button.addEventListener("click", function() {
  // Define arrays
  const who = ["Mi gato", "Mi primo ", "Mi abuela", "Mi perro"];
  const what = ["comió ", "estrelló el coche", "compró", "se pegó"];
  const where = ["en la cocina", "en el pueblo", "en Cuenca", "en Madrid"];

  // Define la sentencia
  let sentence =
    who[rand(who.length)] +
    " " +
    what[rand(what.length)] +
    " " +
    where[rand(where.length)];

  let excuseSpan = document.querySelector("#excuse");

  excuseSpan.innerHTML = sentence;
});

function rand(length) {
  let number = Math.floor(Math.random() * length);
  return number;
}
