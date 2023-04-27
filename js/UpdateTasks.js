import { taskArray } from "./js/AddingTasks.js";

let entry = document.getElementById("taskEntry");
let submit = document.querySelector(".submit__Btn");

export function editEntry() {
  let edit = document.querySelectorAll(".edit");
  edit.forEach((elem) => {
    if (!elem.classList.contains("edit-listener-added")) {
      elem.addEventListener("click", addEvent);
      elem.classList.add("edit-listener-added");
    }
    function addEvent() {
      let editImput = document.createElement("input");
      editImput.setAttribute("type", "text");
      elem.parentNode.appendChild(editImput);
      elem.disabled = true;
      editImput.addEventListener("keyup", modify);
      function modify(event) {
        let parent = editImput.parentNode;
        if (event.keyCode === 13) {
          let index = elem.id;
          taskArray[index] = editImput.value;
          localStorage.setItem("tasks", JSON.stringify(taskArray));
          parent.firstChild.textContent = editImput.value;
          editImput.remove();
          elem.disabled = false;
        }
      }
    }
  });
}

submit.addEventListener("click", editEntry);
window.addEventListener("load", editEntry);
