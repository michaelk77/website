var currentTheme = "dark";
document.addEventListener("DOMContentLoaded", function() {
  if (localStorage.getItem("theme") === "black") {
    document.body.transition= "";
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "#fff";
    button.style.backgroundColor = "#fff";
    button.style.color = "#333";
    currentTheme = "light";
    var currentTheme = "white";
    document.body.transition= "background-color 300ms;";
  }
  else{
  var currentTheme = "dark";
  }
});

const profile = document.getElementById("text_button_prof");
profile.addEventListener("click", function() {

  window.location.href = "/profile";
  })

const market = document.getElementById("text_button_products");
market.addEventListener("click", function() {
  window.location.href = "/market";
  })