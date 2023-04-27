import { taskArray } from "./AddingTasks.js";
let submit = document.querySelector(".submit__Btn");

export function removeTask() {
  let removeBtn = document.querySelectorAll(".delete");
  removeBtn.forEach((elem) => {
    if (!elem.classList.contains("remove-listener-added")) {
      elem.addEventListener("click", addEvent);
      elem.classList.add("remove-listener-added");
    }
    function addEvent() {
      let index = elem.id;
      console.log(index);
      taskArray.splice(index, 1);
      console.log(taskArray);
      elem.parentNode.remove();
      localStorage.setItem("tasks", JSON.stringify(taskArray));
    }
  });
}

export function displayBtn() {
  let checkbox = document.querySelectorAll(".checkbox");
  checkbox.forEach((element) => {
    element.addEventListener("change", () => {
      if (element.checked) {
        element.nextSibling.classList.add("buttonOn");
        element.nextSibling.classList.remove("buttonOff");
      } else {
        element.nextSibling.classList.remove("buttonOn");
        element.nextSibling.classList.add("buttonOff");
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
