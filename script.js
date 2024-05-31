let aboutLinks = document.getElementsByClassName("about-links");
let aboutContents = document.getElementsByClassName("about-contents");

function openSection(sectionName) {
  for (aboutLink of aboutLinks) {
    aboutLink.classList.remove('active-link');
  }
  for (aboutContent of aboutContents) {
    aboutContent.classList.remove('active-content');
  }
  event.currentTarget.classList.add('active-link');
  document.getElementById(sectionName).classList.add('active-content')
}

let sideMenu = document.getElementById("sidemenu");

function openmenu(){
  sideMenu.style.right = "0";
}

function closemenu(){
  sideMenu.style.right = "-210px";
}