let indexAt = 0;
showSlide(indexAt); //this function is executed only once at the beginning

// function triggered upon button click
function slideChange(value) {
     showSlide(indexAt += value); //slideIndex = slideIndex + n, this is imp because the indexAt value must be updated everytime the user clicks the button
}

function showSlide(num) {
     let slide = document.getElementsByClassName("image");
     let i;
     for (i = 0; i < slide.length; i++) {
          slide[i].style.display = "none"; // hiding every images at first
     }
     if (num >= slide.length) {
          indexAt = 0; // resetting the value of indexAt once it goes beyond the size of the array
     }
     if (num < 0) {
          indexAt = slide.length - 1;
     }
     slide[indexAt].style.display = "block"; // displaying only required image
}