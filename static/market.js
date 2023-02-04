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




