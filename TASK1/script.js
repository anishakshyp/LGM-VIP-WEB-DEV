let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let taskInput = document.getElementById("taskInput");

addToDoButton.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-style");
  paragraph.innerText = taskInput.value;
  toDoContainer.appendChild(paragraph);
  taskInput.value = "";
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
    paragraph.style.color = "green";
  });
  paragraph.addEventListener("dblclick", function () {
    toDoContainer.removeChild(paragraph);
  });
});
