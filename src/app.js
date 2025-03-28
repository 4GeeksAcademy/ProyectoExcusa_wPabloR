import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function giveMeAnExcuse(){
  let who = ["Mi perro", "Mi colega", "El fontanero", "Ronaldo"];
  let action = ["está fumando", "ha roto", "no quiere", "no ha llegado"];
  let what = ["libros", "el tren", "la hamburguesa", "la televisión"];
  let when = ["antes de comer", "al salir del trabajo", "después de la siesta", "al amanecer"];

  let quienes = who[Math.floor(Math.random() * who.length)];
  let accion = action[Math.floor(Math.random() * action.length)];
  let que = what[Math.floor(Math.random() * what.length)];
  let cuando = when[Math.floor(Math.random() * when.length)]
  
  let excusa = quienes + " " + accion + " " + que + " " + cuando

  document.querySelector("#texto").innerHTML = excusa

  
  }
  giveMeAnExcuse()
};
