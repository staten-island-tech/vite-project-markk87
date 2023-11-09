
const cold = document.getElementById("#cooler");

document.querySelector(".wbut").addEventListener("click", function event() {
  if (document.body.classList.contains("cool")) {

      document.body.classList.add("warm");
      document.body.classList.remove("cool");
      if (cold.innerHTML == "Night") {
        cold.innerHTML = "Morning";
      }
      else {
        cold.innerHTML = "Night";
      }
    //   if (document.getElementById("#cooler").value="Night") {
    //     cold.value="Morning";
    //   }
  } else {
      document.body.classList.add("cool");
      document.body.classList.remove("warm");
      cold.value="Night";
  }
  
  
})
