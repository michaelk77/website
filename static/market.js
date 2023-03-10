currentTheme = "black";

document.addEventListener("DOMContentLoaded", function() {
  if (localStorage.getItem("theme") === "black") {
    document.body.transition= "";
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "#fff";
    button.style.backgroundColor = "#fff";
    button.style.color = "#333";
    currentTheme = "light";
    document.body.transition= "background-color 300ms;";
  }
  else{
  currentTheme = "black";
  }
});


const squares = document.querySelectorAll(".square_product");
squares.forEach((square)=>{
    square.addEventListener("mouseover", function() {
    if (square.offsetHeight <= 20 * parseFloat(getComputedStyle(document.documentElement).fontSize)){
      square.style.transform = "scale(1.15)";}
    });

    square.addEventListener("mouseout", function() {
      square.style.transform = "scale(1)";
      });
});


const buttons = document.querySelectorAll("button");
buttons.forEach((button)=>{
button.addEventListener("mouseover", function() {
button.style.transform = "scale(1.1)";
});

button.addEventListener("mouseout", function() {
button.style.transform = "scale(1)";
})
});


squares.forEach(square => {
square.addEventListener("click", function() {
  const item = this.dataset.item;
  const rectImg = document.getElementById(`img${this.id}`);
  const textBlock = document.getElementById(`text${this.id}`);
  square.style.transform = "scale(1)"
  square.style.width = "44vh";
  square.style.height = "60vh";
  textBlock.style.display = "flex";
  rectImg.style.height= "30vh";
  var positionInfo = textBlock.getBoundingClientRect();
  var height = positionInfo.height;
  const vh = window.innerHeight / 100;
  var height2 = height+34 * vh;
  square.style.height= height2;


});



document.addEventListener("click", function(event) {

  if (!square.contains(event.target)) {
    const rectImg = document.getElementById(`img${square.id}`);
    const textBlock = document.getElementById(`text${square.id}`);
    square.style.width = "22vh";
    square.style.height = "22vh";
    textBlock.style.display = "none";
    rectImg.style.height= "76%";


}});
});

const profile = document.getElementById("text_button_prof");

profile.addEventListener("click", function() {

  window.location.href = "/profile";
  })

const cart = document.getElementById("text_button_cart");

cart.addEventListener("click", function() {

  window.location.href = "/cart";
  })





const button = document.getElementById("theme-switch-button");


button.addEventListener("click", function() {
  if (currentTheme === "light") {
    button.style.backgroundColor = "#333";
    button.style.color = "#fff";
    currentTheme = "black";
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#333";
    localStorage.setItem("theme", "white");
  } else {
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "#fff";
    button.style.backgroundColor = "#fff";
    button.style.color = "#333";
    currentTheme = "light";
    localStorage.setItem("theme", "black");
  }
});


