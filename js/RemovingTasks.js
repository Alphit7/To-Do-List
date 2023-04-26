import { taskArray } from "./AddingTasks.js";
let submit = document.querySelector(".submit__Btn");
let x = 0;
export function removeBtn() {
  submit.addEventListener("click", () => {
    x += 1;
    let removeBtn = document.querySelectorAll(".delete");
    removeBtn.forEach((elem) => {
      elem.addEventListener("click", () => {
        elem.parentNode.remove();
        const text = elem.previousSibling.textContent;
        const index = taskArray.indexOf(text);
        if (index !== -1) {
          taskArray.splice(index, 1);
          localStorage.setItem("tasks", JSON.stringify(taskArray));
        }
      });
    });
  });
}
export function displayBtn() {
  submit.addEventListener("click", () => {
    let checkbox = document.querySelectorAll(".Checkbox");
    checkbox.forEach((element) => {
      let sibling = element.nextSibling;
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
  });
}
