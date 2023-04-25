let entry = document.getElementById("taskEntry");

export function editEntry(){
    entry.addEventListener('keyup', update)
    function update(e){
        if(e.keyCode === 13){
            let edit = document.querySelectorAll(".edit");
    edit.forEach(elem =>{
        elem.addEventListener('click', () =>{
            let editImput = document.createElement("input");
            editImput.setAttribute("type","text");
            elem.parentNode.appendChild(editImput);
            elem.disabled=true;
            editImput.addEventListener('keyup', modify);
            function modify(event){
                let parent = editImput.parentNode;
                if(event.keyCode === 13){
                    parent.firstChild.textContent = editImput.value;
                    editImput.remove();
                    elem.disabled=false;
                }
            }
        })
    })
    }
}
}
