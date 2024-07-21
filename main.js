/* I will add an event listener where if the navbar-trigger is clicked */
/* we will add new html elements*/
let clickableElement = document.querySelector(".navbar-trigger");
let navBarLinks = document.querySelector(".drop-menu");
/* let's create a variable that will tell us if the div is clicked*/
isClickedBefore = false;
function isClicked(){
  /* let's get the element that will be clickable*/
  /* check if the div is clicked*/
  if (isClickedBefore == true){
    clickableElement.innerHTML = `<span></span> <span></span>`;
    navBarLinks.innerHTML = ``;
    isClickedBefore = false;
  }
  else{ 
    clickableElement.innerHTML = `<span class = "rotate span1"></span> <span class = "rotate span2"></span>`;
    /*adding the navbarlinks when the the div is clicked*/
    navBarLinks.innerHTML = `<a class="menu-item" href="index.html">Home</a><a class="menu-item" href="blogs.html">Blogs</a>`;
    isClickedBefore = true;
  }


}

/* adding an event listener*/
clickableElement.addEventListener("click", isClicked);