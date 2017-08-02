var link = document.querySelector(".feedback-btn");
var popup = document.querySelector(".feedback");

var close = document.querySelector(".feedback-btn");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("feedback-show");

});


window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
  if (popup.classList.contains("feedback-show")) {
  popup.classList.remove("feedback-show");
  }
  }
});





