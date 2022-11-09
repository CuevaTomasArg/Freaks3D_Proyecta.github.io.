
var llavero = document.getElementById("llavero");
var luna = document.getElementById("luna");
var mate = document.getElementById("mate");

var Modal = document.getElementById("Modal");

var close = document.getElementById("close");
var cancelar = document.getElementById("cancelar");

llavero.onclick = function() {
  Modal.style.display = "block";
  Modal.classList.add("open")
  var tipo = document.getElementById("tipo")
  tipo.setAttribute("value","Llavero")
  
}

luna.onclick = function() {
  Modal.style.display = "block";
  Modal.classList.add("open")
  var tipo = document.getElementById("tipo")
  tipo.setAttribute("value","Luna")
  
}

mate.onclick = function() {
  Modal.style.display = "block";
  Modal.classList.add("open")
  var tipo = document.getElementById("tipo")
  tipo.setAttribute("value","Mate")
  
}


close.onclick = function() {
  Modal.style.display = "none";
  Modal.classList.remove("open")
}

cancelar.onclick = function() {
  Modal.style.display = "none";
  Modal.classList.remove("open")
}


window.onclick = function(event) {
  if (event.target == Modal) {
    Modal.style.display = "none";
    Modal.classList.remove("open")
  }
}



// span.onclick = function() {
//   ventanaEmergente.style.display = "none";
// }


// window.onclick = function(event) {
//   if (event.target == ventanaEmergente) {
//     ventanaEmergente.style.display = "none";
//   }
// }
