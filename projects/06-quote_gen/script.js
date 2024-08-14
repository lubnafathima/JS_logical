let message = document.querySelector(".message");
let input = document.querySelector(".input");
let btn = document.querySelector(".btn");

btn.addEventListener("click", () => message.innerText = "Hello " + input.value + "!");