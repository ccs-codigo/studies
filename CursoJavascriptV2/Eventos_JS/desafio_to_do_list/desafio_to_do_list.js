function addNewLi() {
  "use strict";

  const todoList = document.getElementById("todo-list");
  const todoItem = document.querySelector(".todo-item");

  const cloneLi = todoItem.cloneNode(true);

  todoList.appendChild(cloneLi);
}

function openBox() {
  const editElement = document.querySelector(".editContainer");

  editElement.style.display =
    editElement.style.display === "none" || editElement.style.display === ""
      ? "flex"
      : "none";
}

function toggleCheckBox() {
  const buttonCheck = document.querySelector(".button-check i");
  buttonCheck.classList.toggle("displayNone");
}
