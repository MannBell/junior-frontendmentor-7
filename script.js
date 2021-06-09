const hamIcon = document.getElementById("hamIcon");
const hamIconImg = document.getElementById("hamIconImg");
const header = document.getElementById("header");
const backdrop = document.getElementsByClassName("backdrop")[0];

hamIcon.addEventListener("click", () => {
  if (header.classList.toString().includes("open")) {
    hamIconImg.setAttribute("src", "./images/icon-hamburger.svg");
    header.classList.toggle("open");
    backdrop.classList.toggle("open");
  } else {
    hamIconImg.setAttribute("src", "./images/icon-close.svg");
    header.classList.toggle("open");
    backdrop.classList.toggle("open");
  }
})

/* TO CHANGE THE IMAGES DEPENDING ON WINDOW SIZE - START */
const changeImgFor = (minWidth, targetImg, e) => {
  
  if ( e.target.innerWidth >= minWidth) {
    targetImg.setAttribute("src", "./images/image-intro-desktop.jpg");
    /* To remove the class in case of resizing*/
    if (header.classList.toString().includes("open")) {
      hamIconImg.setAttribute("src", "./images/icon-hamburger.svg");
      header.classList.toggle("open");
      backdrop.classList.toggle("open");
    }
    
  } else {
    targetImg.setAttribute("src", "./images/image-intro-mobile.jpg");
  }
} 

const targetImg = document.getElementById("introImg");
window.addEventListener("resize", (e) => changeImgFor(55*16, targetImg, e))
/* TO CHANGE THE IMAGES DEPENDING ON WINDOW SIZE - END */