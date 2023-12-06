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



// const poorPeopleCars = Cars.filter((el) => el.price < 23000);
// const normalPeopleCars = Cars.filter((el) => el.price > 23000 && el.price < 27000);
// const richPeopleCars = Cars.filter((el) => el.price > 35000);
// const allCars = Cars;

// function makeCard(carArray) {
//   return carArray.map((car) => {
//     const card = document.createElement('div');
//     card.className = 'card-cool';

//     const heading = document.createElement('h2');
//     heading.className = 'card-desc';
//     heading.textContent = `${car.brand} ${car.model}`;

//     const img = document.createElement('img');
//     img.className = 'img';
//     img.src = car.img;

//     card.appendChild(heading);
//     card.appendChild(img);

//     return card;
//   });
// }

// function appendCards(cards) {
//   cards.forEach((card) => {
//     DOMSelectors.gallery.appendChild(card);
//   });
// }

// DOMSelectors.cheap.addEventListener('click', function (e) {
//   e.preventDefault();
//   clearInputs();
//   const cards = makeCard(poorPeopleCars);
//   appendCards(cards);
// });

// DOMSelectors.average.addEventListener('click', function (e) {
//   e.preventDefault();
//   clearInputs();
//   const cards = makeCard(normalPeopleCars);
//   appendCards(cards);
// });

// DOMSelectors.expensive.addEventListener('click', function (e) {
//   e.preventDefault();
//   clearInputs();
//   const cards = makeCard(richPeopleCars);
//   appendCards(cards);
// });

// DOMSelectors.catalog.addEventListener('click', function (e) {
//   e.preventDefault();
//   clearInputs();
//   const cards = makeCard(allCars);
//   appendCards(cards);
// });