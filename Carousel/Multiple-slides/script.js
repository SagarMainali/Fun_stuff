let slide = document.getElementsByClassName("image");
let rightBtn = document.getElementById("right");
let leftBtn = document.getElementById("left");
let indexAt = 0;
let i;

displaySlide(indexAt); // this is executed when the page first loads

function displaySlide(n) { // this is executed only when the controls are triggered

     for (i = 0; i < slide.length; i++) {
          slide[i].style.display = "none";
     }

     rightBtn.style.display = "block";
     leftBtn.style.display = "block";

     for (i = n; i < (3 + n); i++) {
          if (i == 0) {
               leftBtn.style.display = "none"; // hiding the prev-button
          }

          else if (i == 4) {
               rightBtn.style.display = "none"; // hiding the next-button
          }

          else if (i > 4) {
               break; // preventing error prompt
          }

          slide[i].style.display = "block"; // this shouldn't be in the else because it won't execute if any of the above conditions are met
     }
}

function slideChange(n) {
     displaySlide(indexAt += n); // 1 -.> 2 -->3
}