let message = document.querySelector(".message");
let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let tip = document.querySelector(".tip");

let selectedTip;
tip.addEventListener("click", (e) => {
    selectedTip = e.target.value;
    message.innerText = "You selected " + selectedTip + "% tip";
});

btn.addEventListener("click", () => {
    let bill = Number(input.value);
    let tips = bill * selectedTip/100;
    let totalAmout = bill + tips;
    if(!selectedTip) {
        message.innerText = "Whops, select a tip & try again!";
    } else {
        message.innerText = totalAmout;
    }
    input.value = "";
    selectedTip = "";
});