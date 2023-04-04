const box = document.getElementById("box");
const display = document.getElementById("display");

document.addEventListener("keydown", function (e) {
  display.style.color = "red";
  display.innerText = e.key + "is keyDown";
});

document.addEventListener("keyup", () => {
  display.style.color = "green";
  display.innerText = e.key + "is keyUp";
});

