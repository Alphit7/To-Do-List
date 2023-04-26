import { taskArray } from "./AddingTasks.js";
let submit = document.querySelector(".submit__Btn");
let removeBtn = document.querySelectorAll(".delete");

export function removeTask() {
  let removeBtn = document.querySelectorAll(".delete");
  removeBtn.forEach((elem) => {
    elem.addEventListener("click", () => {
      elem.parentNode.remove();
    });
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
window.addEventListener("click", displayBtn);
submit.addEventListener("click", displayBtn);
window.addEventListener("click", removeTask);
submit.addEventListener("click", removeTask);
