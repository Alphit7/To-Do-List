let entry = document.querySelector("#taskEntry");
let taskList = document.querySelector("ul");
let i = 0;
export function validate(e) {
  if (entry.value === "") {
    return false;
  }
  if (e.keyCode === 13) {
    let div = document.createElement("div");
    taskList.prepend(div);
    let task = document.createElement("li");
    div.prepend(task);
    task.textContent = entry.value;
    let edit = document.createElement("button");
    edit.setAttribute("class", "edit");
    edit.textContent = "Edit";
    div.appendChild(edit);
    let check = document.createElement("input");
    div.appendChild(check);
    check.setAttribute("type", "checkbox");
    check.setAttribute("id", "checkbox" + i);
    check.setAttribute("class", "Checkbox");
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.setAttribute("id", i);
    deleteBtn.setAttribute("class", "delete");
    div.appendChild(deleteBtn);
    entry.value = "";
    i += 1;
  }
}
export function addTask() {
  entry.addEventListener("keydown", validate);
}
