/* script to handel header vevnts */
/* this code to redesign the header when the media query matches*/
/* so using the window object we can konw the current screen size and using it's builtin function matchMedia we can compare the current screen size with the media screen size if so then I want u to update the innerhtml content of i tag to suit the design requerments*/
function updateHeaderContent(){ 
  let i = 0;
  let iconClasses = {0: "fa-linkedin", 1: "fa-discord", 2: "fa-fithub"};
  while (i < 3){
    let updatedElement = document.getElementsByClassName("contact-links")[i];
    /* checking if the current screen size matches the media query screen size specified in the condition*/
    if (window.matchMedia("(max-width: 1024px)").matches) {
      updatedElement.innerHTML = `<i class="fa-brands ${iconClasses[i]} "></i>`;
      console.log(i);
    } else {
      updatedElement.innerHTML = `<i class="fa-brands ${iconClasses[i]} "></i> ${iconClasses[i]} `;
    }

  }
}
/* inload check */
updateHeaderContent();
/*adding an event litener in case the media query matches the window screen size*/
window.addEventListener("resize", updateHeaderContent);