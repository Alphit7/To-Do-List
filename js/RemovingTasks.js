let input = document.querySelector("#taskEntry");
export function removeBtn() {
  input.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
      let removeBtn = document.querySelectorAll(".delete");
      removeBtn.forEach((elem) => {
        elem.addEventListener("click", () => {
          elem.parentNode.remove();
        });
      });
    }
  });
}
i = 0;
export function displayBtn() {
  input.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
      let checkbox = document.querySelectorAll(".Checkbox");
      checkbox.forEach((element) => {
        let sibling = element.nextSibling;
        element.addEventListener("change", () => {
          if (element.checked) {
          }
        });
      });
    }
  });
}
