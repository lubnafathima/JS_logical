let message = document.querySelector(".message");
let input = document.querySelector(".input");
let btn = document.querySelector(".btn");

function update() {
    message.textContent = input.value.length;
}

btn.addEventListener("click", update);