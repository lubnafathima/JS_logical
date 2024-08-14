let container = document.querySelector(".container");
let btn = document.querySelector(".btn");

// const colorArray = [
//   "red",
//   "blue",
//   "green",
//   "yellow",
//   "purple",
//   "pink",
//   "orange",
//   "black",
// ];

// btn.addEventListener("click", () => {
//   let randomColor =
//     colorArray[Math.floor(Math.random() * colorArray.length - 1)];
//   container.style.backgroundColor = randomColor;
// });

const getRandomBgColor = () => {
  const hexChart = "0123456789ABCDEF";
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    // let color = ;
    hexCode += hexChart[Math.floor(Math.random() * 16)];
  }
  container.style.backgroundColor = hexCode;
};

btn.addEventListener("click", () => {
  getRandomBgColor();
});
