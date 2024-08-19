let message = document.querySelector(".message");
let input = document.querySelector(".input");
let btn = document.querySelector(".btn");

let number = Math.floor(Math.random() * 10 + 1);

btn.addEventListener("click", () => {
  let guess = input.value;
  
  if (guess === "" || isNaN(guess)) {
    message.textContent = "Enter a valid number";
  } else {
    if (guess > number) {
      message.textContent = guess + " is too high!";
    } else if (guess < number) {
      message.textContent = guess + " is too low!";
    } else {
      message.textContent = guess + " is the correct number!";
      number = Math.floor(Math.random() * 10);
    }
  }
  input.value = "";
});
