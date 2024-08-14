let calculator = document.querySelector(".calculator");

calculator.addEventListener("click", (e) => {
  const { target } = e;
  if (!target.matches("button")) return;

  const key = target.dataset.key;
  const display = document.querySelector(".display");

  switch (key ) {
    case "reset":
      display.textContent = "";
      break;
    case "del":
      display.textContent = display.textContent.slice(0, -1);
      break;
    case "calculate":
      try {
        display.textContent = eval(display.textContent);
      } catch {
        display.textContent = "Error";
      }
  }
});