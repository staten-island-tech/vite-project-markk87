import "../css/style.css";
import { Cars } from "./menu";

const DOMSelectors = {
  gallery: document.querySelector(".gallery"),
  catalog: document.querySelector(".all"),
  average: document.querySelector(".average"),
  expensive: document.querySelector(".expensive"),
  cheap: document.querySelector(".cheap"),
};




// const deleteCard = function () {
//   Cars.forEach((el) => el.remove());
// }

// let buttons = document.querySelectorAll("#buttons");

// buttons.forEach((element) => element.addEventListener("click", function(){
//   let filter = btn.textContent;
//   Cars.filter((car) => car.classList.includes(filter)).forEach((c) => makeCard);
  
// }))

function populate(Cars){
  Cars.forEach((el) => parent.insertAdjacentHTML(
    "beforeend",
    `<div class='card-cool'>
    <h2 id="name" class="name">${el.brand}</h2>
    <img id="${el.brand}" src="${el.img} class="image">
    <h3 id="price" class="name">${el.price}</h3>
    </div>`
  ))
}

function filters() {
  let buttons = document.querySelectorAll("#buttons")
  buttons.forEach((btn) => btn.addEventListener("click", function(){
    let category = btn.textContent.toLowerCase()
    let newArr = items.filter((el)=> el.price.includes(poorPeopleCars))
    document.querySelector(".parent").innerHTML = ""
    populate(newArr)
  }))
}


function clearInputs() {
  DOMSelectors.gallery.innerHTML = '';
}

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

const poorPeopleCars = Cars.filter((el) => el.price < 23000);
const normalPeopleCars = Cars.filter((el) => el.price > 23000 && el.price < 27000);
const richPeopleCars = Cars.filter((el) => el.price > 35000);
const allCars = Cars;

function makeCard(carArray) {
  return carArray.map((car) => {
    const card = document.createElement('div');
    card.className = 'card-cool';

    const heading = document.createElement('h2');
    heading.className = 'card-desc';
    heading.textContent = `${car.brand} ${car.model} : $${car.price}`;

    const img = document.createElement('img');
    img.className = 'img';
    img.src = car.img;

    card.appendChild(heading);
    card.appendChild(img);

    return card;
  });
}

function appendCards(cards) {
  cards.forEach((card) => {
    DOMSelectors.gallery.appendChild(card);
  });
}

DOMSelectors.cheap.addEventListener('click', function (e) {
  e.preventDefault();
  clearInputs();
  const cards = makeCard(poorPeopleCars);
  appendCards(cards);
});

DOMSelectors.average.addEventListener('click', function (e) {
  e.preventDefault();
  clearInputs();
  const cards = makeCard(normalPeopleCars);
  appendCards(cards);
});

DOMSelectors.expensive.addEventListener('click', function (e) {
  e.preventDefault();
  clearInputs();
  const cards = makeCard(richPeopleCars);
  appendCards(cards);
});

DOMSelectors.catalog.addEventListener('click', function (e) {
  e.preventDefault();
  clearInputs();
  const cards = makeCard(allCars);
  appendCards(cards);
});
