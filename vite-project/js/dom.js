import "../css/style.css"
import { Cars } from "./menu";


document.querySelector(".wbut").addEventListener("click", function event() {
  if (document.body.classList.contains("cool")) {

      document.body.classList.add("warm");
      document.body.classList.remove("cool");
      document.querySelector(".wbut").textContent = "Night"
  } else {
      document.body.classList.add("cool");
      document.body.classList.remove("warm");
      document.querySelector(".wbut").textContent="Morning";
  }
  
  
})
