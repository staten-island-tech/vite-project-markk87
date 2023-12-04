import "../css/style.css";
import { Cars } from "./menu";

const DOMSelectors = {
  gallery: document.querySelector(".gallery"),
  catalog: document.querySelector(".all"),
  average: document.querySelector(".average"),
  expensive: document.querySelector(".expensive"),
  cheap: document.querySelector(".cheap"),
};

document.querySelector(".wbut").addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
    document.querySelector(".wbut").textContent = "Night";
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
    document.querySelector(".wbut").textContent = "Morning";
  }
});


function populate(parent, Cars){
  Cars.forEach((el) => parent.insertAdjacentHTML(
    "beforeend",
    `<div class='card-cool'>
    <h2 id="name" class="name">${el.brand} ${el.model}</h2>
    <img src="${el.img} class= "img">
    <h3 id="price" class="name">$${el.price}</h3>
    </div>`
  ))
}

function filterButtons() {
  const buttons = document.querySelectorAll(".buttons");

  buttons.forEach((btn) => 
    btn.addEventListener("click", function(){
      const category = btn.textContent.toLowerCase();
      const filteredCars = filterCars(category);

      clearInputs();
      populate(DOMSelectors.gallery, filteredCars);
    })
  );
}


filterButtons();
populate(DOMSelectors.gallery, Cars);




function clearInputs() {
  DOMSelectors.gallery.innerHTML = '';
}

function filterCars(category) {
  const filteredCars = Cars.filter((car)=> {
    if (category === "all") {
      return true;
    } else if (category === "cheap") {
      return car.price < 23000;
    } else if (category === "average") {
      return car.price >= 23000 && car.price < 35000;
    } else if (category === "expensive") {
      return car.price >= 35000;
    }
  });
  return filteredCars;
}

