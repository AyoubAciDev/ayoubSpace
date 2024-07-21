/* I will add an event listener where if the navbar-trigger is clicked */
/* we will add new html elements*/
let clickableElement = document.querySelector(".navbar-trigger");
/* let's create a variable that will tell us if the div is clicked*/
isClickedBefore = false;
function isClicked(){
  /* let's get the element that will be clickable*/
  /* check if the div is clicked*/
  if (isClickedBefore == true){
    clickableElement.innerHTML = `<span></span> <span></span>`;
    isClickedBefore = false;
  }
  else{ 
    clickableElement.innerHTML = `<span class = "rotate span1"></span> <span class = "rotate span2"></span>`;
    isClickedBefore = true;
  }


}

/* adding an event listener*/
clickableElement.addEventListener("click", isClicked);