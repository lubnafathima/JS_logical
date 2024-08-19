let message = document.querySelector(".message");
let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

btn.addEventListener("click", () => {
  let getHour = parseInt(hour.value);
  let getMinute = parseInt(minute.value);
  let getSecond = parseInt(second.value);

  btn.style.display = "none";

  message.textContent = getHour + " : " + getMinute + " : " + getSecond;
  message.style.fontSize = "2rem";
  message.style.fontWeight = 600;

  if (isNaN(getHour) || isNaN(getMinute) || isNaN(getSecond)) {
    message.textContent = "Set a valid time";
  } else {
    let timer = setInterval(() => {
      if (getSecond === 0) {
        if (getMinute === 0) {
          if (getHour === 0) {
            clearInterval(timer);
            message.textContent = "Time's Up!";
            btn.style.display = "block";
            hour.value = 0;
            minute.value = 0;
            second.value = 0;
          } else {
            getHour--;
            getMinute = 60;
          }
        } else {
          getMinute--;
          getSecond = 60;
        }
      } else {
        getSecond--;
        message.textContent = getHour + " : " + getMinute + " : " + getSecond;
      }
    }, 1000);
  }
});
