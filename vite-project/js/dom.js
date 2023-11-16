import "../css/style.css";
import { Cars } from "./menu";

var DOMSelectors = {
  gallery: document.querySelector(".gallery"),
  catalog: document.querySelector(".all"),
  luxury: document.querySelector(".luxury"),
  sport: document.querySelector(".sport"),
  cheap: document.querySelector(".cheap"),
  fast: document.querySelector(".fast")
};

document.querySelector(".wbut").addEventListener("click", function event() {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
    document.querySelector(".wbut").textContent = "Night";
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
    document.querySelector(".wbut").textContent = "Morning";
  };

});

const poorPeopleCars = Cars.filter((fart)=> fart.price < 23000)

DOMSelectors.sport.addEventListener('click',function(e){
  e.preventDefault();
  function fart(){
    poorPeopleCars.forEach((farts)=>{
      DOMSelectors.gallery.insertAdjacentHTML('beforeend',`<div class=card-cool><h2>${farts.brand}</h2></div>`)
    })
  }
  // if (document.body.classList.contains("warm")) {
  //   DOMSelectors.sport.classList.add("card-warm");
  //   DOMSelectors.sport.classList.remove("card-cool");
  // } else {
  //   DOMSelectors.sport.classList.remove("card-warm");
  //   DOMSelectors.sport.classList.add("card-cool");
  // }
  fart()
})

document.querySelector(".all").addEventListener("click", function makeCardsFr() {
  createCard();
})



console.log("Brand:", Cars[0].brand);
console.log("Model:", Cars[0].model);
console.log("Year:", Cars[0].year);
console.log("Color:", Cars[0].color);
console.log("Price:", Cars[0].price);
console.log("Features:", Cars[0].features.join(", "));









 // if (myButton && myButton.classList.contains("cool-secondary")) {
  //   myButton.classList.add("warm-secondary");
  //   myButton.classList.remove("cool-secondary");
  // } else if (myButton) {
  //   myButton.classList.add("cool-secondary");
  //   myButton.classList.remove("warm-secondary");
  // }