const input = document.querySelector("input");
const display = document.querySelector("h1");
const button = document.querySelector("button");

input.addEventListener("keypress", function call(e) {
    display.innerText = "Please pressed your apponion", e.key;
})

button.addEventListener("click", function button() {
// button.style.fontSize = "25px";
display.innerText = input.value
})