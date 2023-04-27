let entry = document.querySelector("#taskEntry");
let submit = document.querySelector(".submit__Btn");
let taskList = document.querySelector("ul");
let i = 0;

export let taskArray = [];

//Fonction pour afficher les tâches stockées dans le localStorage

export function displayTasks() {
  let storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    taskArray = JSON.parse(storedTasks);
    for (let j = 0; j < taskArray.length; j++) {
      let div = document.createElement("div");
      div.setAttribute("class", "tasks__container");
      div.setAttribute("id", "task_" + j);
      taskList.prepend(div);

      let task = document.createElement("li");
      div.prepend(task);
      task.textContent = taskArray[j];

      let edit = document.createElement("button");
      edit.setAttribute("class", "edit");
      edit.setAttribute("id", j);
      edit.textContent = "Edit";
      div.appendChild(edit);

      let check = document.createElement("input");
      div.appendChild(check);
      check.setAttribute("type", "checkbox");
      check.setAttribute("id", "checkbox" + j);
      check.setAttribute("class", "checkbox");

      let deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.setAttribute("id", j);
      deleteBtn.setAttribute("class", "buttonOff");
      deleteBtn.setAttribute("class", "delete");
      div.appendChild(deleteBtn);
      i += 1;
    }
  }
}

//Fonction pour ajouter une tâche

export function addTask() {
  if (entry.value === "") {
    return false;
  }
  taskArray.push(entry.value);
  localStorage.setItem("tasks", JSON.stringify(taskArray));
  let div = document.createElement("div");
  div.setAttribute("class", "tasks__container");
  taskList.prepend(div);

  let task = document.createElement("li");
  div.prepend(task);
  task.textContent = taskArray[i];

  let edit = document.createElement("button");
  edit.setAttribute("class", "edit");
  edit.setAttribute("id", i);
  edit.textContent = "Edit";
  div.appendChild(edit);

  let check = document.createElement("input");
  div.appendChild(check);
  check.setAttribute("type", "checkbox");
  check.setAttribute("id", i);
  check.setAttribute("class", "checkbox");

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.setAttribute("id", i);
  deleteBtn.setAttribute("class", "buttonOff");
  deleteBtn.setAttribute("class", "delete");

  div.appendChild(deleteBtn);
  entry.value = "";
  i += 1;
  taskList.innerHTML = "";
  displayTasks();
}
// Fonction pour ajouter un événement de clic au bouton de soumission
submit.addEventListener("click", addTask);
