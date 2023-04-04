const decreament = document.getElementById("decreament");
const increament = document.getElementById("increament");
const display = document.querySelector("#span");
const reset = document.querySelector("#reset");

decreament.addEventListener("click", function () {
  const value = Number(display.innerText);
  if (value > 0) {
    display.innerText = value - 1;
  } else {
    alert("Negtive value is not allowed");
  }
});

increament.addEventListener("click", function () {
  const value = Number(display.innerText);
  if (value >= 20) {
    alert("20+ value is not allowed");
  } else {
    display.innerText = value + 1;
  }
});

reset.addEventListener("click", function () {
  display.innerText = "";
});
