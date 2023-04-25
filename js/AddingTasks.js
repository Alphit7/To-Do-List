let entry = document.querySelector("#taskEntry");
let taskList = document.querySelector("ul");

export function addTask(){
entry.addEventListener("keyup", Validate);
function Validate(e){
    if(entry.value === ""){
        return false;
    }
    if(e.keyCode === 13){
        let task = document.createElement("li");
        taskList.appendChild(task);
        task.textContent = entry.value;
        let check = document.createElement("input");
        task.appendChild(check);
        check.setAttribute("type","checkbox");
    }
}
}