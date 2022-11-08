
var llavero = document.getElementById("llavero");
var luna = document.getElementById("luna");
var mate = document.getElementById("mate");

var Modal = document.getElementById("Modal");

// var span = document.getElementsById("closeModal")[0];

// When the user clicks on the button, open the modal
llavero.onclick = function() {
  Modal.style.display = "block";
  var tipo = document.getElementById("tipo")
  tipo.setAttribute("value","Llavero")
}

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }



// span.onclick = function() {
//   ventanaEmergente.style.display = "none";
// }


// window.onclick = function(event) {
//   if (event.target == ventanaEmergente) {
//     ventanaEmergente.style.display = "none";
//   }
// }
