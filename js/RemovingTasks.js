import { taskArray } from "./AddingTasks.js";
let submit = document.querySelector(".submit__button");

export function removeTask() {
  let removeBtn = document.querySelectorAll(".tasks__delete");
  removeBtn.forEach((elem) => {
    if (!elem.classList.contains("remove-listener-added")) {
      elem.addEventListener("click", addEvent);
      elem.classList.add("remove-listener-added");
    }
    function addEvent() {
      let index = elem.id;
      taskArray.splice(index, 1);
      elem.parentNode.remove();
      localStorage.setItem("tasks", JSON.stringify(taskArray));
    }
  });
}

export function displayBtn() {
  let checkbox = document.querySelectorAll(".tasks__checkbox");
  checkbox.forEach((element) => {
    element.addEventListener("change", () => {
      if (element.checked) {
        element.parentNode.lastChild.classList.add("buttonOn");
        element.parentNode.lastChild.classList.remove("buttonOff");
      } else {
        element.parentNode.lastChild.classList.remove("buttonOn");
        element.parentNode.lastChild.classList.add("buttonOff");
      }
    });
  });
}

submit.addEventListener("click", () => {
  displayBtn();
  removeTask();
});
window.addEventListener("load", () => {
  displayBtn();
  removeTask();
});
