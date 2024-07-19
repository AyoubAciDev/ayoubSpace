/* script to handel header vevnts */
/* this code to redesign the header when the media query matches*/
function updateHeaderContent(){
  /* creating a loop statement to iterate through the class names array*/ 
    let updatedElement = document.getElementsByClassName("contact-links")[i];
    /* checking if the current screen size matches the media query screen size specified in the condition*/
    if (window.matchMedia("(max-width: 1024px)").matches) {
      updatedElement.innerHTML = `<i class="fa-brands ${iconsOrder[i]}"></i>`;
      console.log(i);
    } else {
      updatedElement.innerHTML = `<i class="fa-brands ${iconsOrder[i]}></i> LinkedIn`;
    }
}
/* inload check */
updateHeaderContent();
/*adding an event litener in case the media query matches the window screen size*/
window.addEventListener("resize", updateHeaderContent);