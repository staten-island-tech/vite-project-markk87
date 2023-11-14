import "../css/style.css";
import { Cars } from "./menu";

var myButton = document.getElementsByTagName("button");

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
  if (myButton && myButton.classList.contains("cool-secondary")) {
    myButton.classList.add("warm-secondary");
    myButton.classList.remove("cool-secondary");
  } else if (myButton) {
    myButton.classList.add("cool-secondary");
    myButton.classList.remove("warm-secondary");
  }
});

console.log("Brand:", Cars[0].brand);
console.log("Model:", Cars[0].model);
console.log("Year:", Cars[0].year);
console.log("Color:", Cars[0].color);
console.log("Price:", Cars[0].price);
console.log("Features:", Cars[0].features.join(", "));
