let main = document.querySelector(".main");
let task = document.querySelector(".task");
let add_btn = document.querySelector(".add_btn");
let new_task_Element = document.querySelector(".new_task");
let filter = document.querySelector(".filter");

add_btn.addEventListener("click", () => {
  let input_task = task.value;

  if (input_task.length > 100) {
    input_task = input_task.slice(0, 100) + "...";
  }

  let new_task = document.createElement("div");

  new_task.classList.add("new_task");
  new_task.classList.add("pending");
  new_task.innerHTML = `<input type="checkbox" class="checkbox" /><p class="new_task_text">${input_task}</p><button class="delete_btn">&#x1f5d1;</button>`;
  main.appendChild(new_task);

  task.value = "";
});

main.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete_btn")) {

    let getTask = e.target.closest(".new_task");
    getTask.remove();

  }

  if (e.target.classList.contains("checkbox")) {
    if (e.target.checked) {

      let getText = e.target.nextElementSibling;
      getText.style.textDecoration = "line-through";

      e.target.closest(".new_task").classList.remove("pending");
      e.target.closest(".new_task").classList.add("completed");

    } else {

      let getText = e.target.nextElementSibling;
      getText.style.textDecoration = "none";

      e.target.closest(".new_task").classList.remove("completed");
      e.target.closest(".new_task").classList.add("pending");

    }
  }
});

filter.addEventListener("click", (e) => {
    let getCompleteTask = main.querySelectorAll(".completed");
    let getPendingTask = main.querySelectorAll(".pending");

  if (e.target.classList.contains("complete_btn")) {

    getCompleteTask.forEach((task) => task.style.display = "flex");
    getPendingTask.forEach((task) => task.style.display = "none");

  } else if (e.target.classList.contains("pending_btn")) {

    getPendingTask.forEach((task) => task.style.display = "flex");
    getCompleteTask.forEach((task) => task.style.display = "none");

  } else {

    getPendingTask.forEach((task) => task.style.display = "flex");
    getCompleteTask.forEach((task) => task.style.display = "flex");
    
  }
});
