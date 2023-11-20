import "../css/style.css";
import { Cars } from "./menu";

const DOMSelectors = {
  gallery: document.querySelector(".gallery"),
  catalog: document.querySelector(".all"),
  average: document.querySelector(".average"),
  expensive: document.querySelector(".expensive"),
  cheap: document.querySelector(".cheap"),
};

function clearInputs(){
  DOMSelectors.gallery.innerHTML = ''
}

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

const poorPeopleCars = Cars.filter((el)=> el.price < 23000);
const normalPeopleCars = Cars.filter((el) => el.price > 23000 && el.price < 27000);
const richPeopleCars = Cars.filter((el) => el.price > 35000);
const allCars = Cars

DOMSelectors.cheap.addEventListener('click',function(e){
  e.preventDefault();
  clearInputs();
  function makeCard(){
    poorPeopleCars.forEach((farts)=>{
      DOMSelectors.gallery.insertAdjacentHTML('beforeend',`<div class=card-cool><h2 class=card-desc>${farts.brand} ${farts.model} </h2><img src=${farts.img} class=img></div>`)
    })
  }
  makeCard();
});

DOMSelectors.average.addEventListener('click',function(e){
  e.preventDefault();
  clearInputs();
  function makeCard(){
    normalPeopleCars.forEach((farts)=>{
      DOMSelectors.gallery.insertAdjacentHTML('beforeend',`<div class=card-cool><h2>${farts.brand} ${farts.model}</h2></div>`)
    })
  }
  makeCard();
});

DOMSelectors.expensive.addEventListener('click',function(e){
  e.preventDefault();
  clearInputs();
  function makeCard(){
    richPeopleCars.forEach((farts)=>{
      DOMSelectors.gallery.insertAdjacentHTML('beforeend',`<div class=card-cool><h2>${farts.brand} ${farts.model}</h2></div>`)
    })
  }
  makeCard();
});

DOMSelectors.catalog.addEventListener('click',function(e){
  e.preventDefault();
  clearInputs();
  function makeCard(){
    allCars.forEach((farts)=>{
      DOMSelectors.gallery.insertAdjacentHTML('beforeend',`<div class=card-cool><h2>${farts.brand} ${farts.model}</h2></div>`)
    })
  }
  makeCard();
});






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