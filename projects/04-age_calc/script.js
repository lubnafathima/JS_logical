let message = document.querySelector(".message");
let input = document.querySelector(".input");
let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    let date = new Date();
    let currentYear = date.getFullYear();
    let age = currentYear - input.value;
    if(age >= 0) {
        message.textContent = `You are ${age} years old`;
    } else {
        message.textContent = 'Enter a valid birth year!';
    }
});