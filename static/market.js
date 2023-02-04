function animateSquares() {
   console.log(document.cookie.indexOf("anim_redirect=True"))
  // Perform the animation

  const squares = document.querySelectorAll('.square');

  squares.forEach(square => {
    square.style.transition = "all 2s ease-out";
    square.style.transform = "scale(0.2) translateY(300%)";
    square.style.opacity = "0";
  });

}

const squares = document.querySelectorAll(".square_product");
squares.forEach((square)=>{
    square.addEventListener("mouseover", function() {
      square.style.transform = "scale(1.2)";
    });

    square.addEventListener("mouseout", function() {
      square.style.transform = "scale(1)";
      })
});




const button = document.getElementById("theme-switch-button");
let currentTheme = "dark";


button.addEventListener("click", function() {
  if (currentTheme === "light") {
    button.style.backgroundColor = "#333";
    button.style.color = "#fff";
    currentTheme = "dark";
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#333";
  } else {
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "#fff";
    button.style.backgroundColor = "#fff";
    button.style.color = "#333";
    currentTheme = "light";
  }
});
