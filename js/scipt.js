import { addTask, validate } from "./AddingTasks.js";
import { removeBtn, displayBtn } from "./RemovingTasks.js";
import { editEntry } from "./UpdateTasks.js";

validate();
addTask();
editEntry();
removeBtn();
displayBtn();
