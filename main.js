/* I will add an event listener where if the navbar-trigger is clicked */
/* we will add new html elements*/
let clickableElement = document.querySelector(".navbar-trigger");
function isClicked(){
  /* let's get the element that will be clickable*/
  /* check if the div is clicked*/
  clickableElement.innerHTML = `<span class = "rotate span1"></span> <span class = "rotate span2"></span>`;

}

/* adding an event listener*/
clickableElement.addEventListener("click", isClicked);