// Get the button and modal elements
var button = document.getElementById("popup-btn");
var modal = document.getElementById("popup-modal");

// Get the close button element
var closeBtn = modal.querySelector(".close");

// When the button is clicked, show the modal and hide the button
button.onclick = function () {
  modal.style.display = "block";
  button.style.display = "none";
};

// When the close button is clicked, hide the modal and show the button
closeBtn.onclick = function () {
  modal.style.display = "none";
  button.style.display = "block";
};

// When the user clicks anywhere outside of the modal, hide it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    button.style.display = "block";
  }
};
