/* i defined the global variables
*/
const navbar = document.getElementById("navbar__list")
const sections = Array.from(document.querySelectorAll("section"))
/*global variables end*/
/* creating the nav bar and beginning the 1st function*/
function createnavbar() {
  for (sec of sections) {
    item = document.createElement("li");
    item.innerHTML =`<li><a href="#${sec.id}" data-nav="${sec.id}" class= "menu__link">${sec.dataset.nav}</a></li>`
    navbar.appendChild(item)
    
  }
  
}
createnavbar();
/*adding active class to the sections*/
window.onscroll = function () {
  document.querySelectorAll("section").forEach(function (onfire) {
    if (
      onfire.getBoundingClientRect().top>=-400 &&
      onfire.getBoundingClientRect().top<=150

    ) {onfire.classList.add("your-active-class")
      
    }
    else{
      onfire.classList.remove("your-active-class")
    }
    
  })
  
}
/*scrolling to the specific section*/
navbar.addEventListener("click", (thesec)=> {
thesec.preventDefault()
  document
  .getElementById(`${thesec.target.dataset.nav}`)
  .scrollIntoView({behavior: "smooth"})
  

}
)

