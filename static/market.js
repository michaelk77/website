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
    if (square.offsetHeight <= 20 * parseFloat(getComputedStyle(document.documentElement).fontSize)){
      square.style.transform = "scale(1.15)";}
    });

    square.addEventListener("mouseout", function() {
      square.style.transform = "scale(1)";
      });
});


const buttonteme = document.querySelector("button");
buttonteme.addEventListener("mouseover", function() {
buttonteme.style.transform = "scale(1.1)";
});

buttonteme.addEventListener("mouseout", function() {
buttonteme.style.transform = "scale(1)";
})


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
