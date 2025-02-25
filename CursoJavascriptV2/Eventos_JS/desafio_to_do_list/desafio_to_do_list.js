(function name() {
  "use strict";

  const todoAddForm = document.getElementById("todo-add");
  const inputItem = document.getElementById("item-input");
  const ul = document.getElementById("todo-list");

  let arrTasks = [
    {
      nome: "Task 1",
      currentData: Date.now(),
      completed: false,
    },
  ];

  function createLi(obj) {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const button = document.createElement("button");
    const iconCheck = document.createElement("i");
    const editButton = document.createElement("i");

    const editContainer = document.createElement("div");
    const editInput = document.createElement("input");
    const editButtonConfirm = document.createElement("button");
    const cancelButton = document.createElement("button");

    const deleteButton = document.createElement("i");

    li.className = "todo-item";
    p.className = "task-name";
    p.textContent = obj.nome;
    button.className = "button-check";
    iconCheck.className = "fas fa-check displayNone";
    editButton.className = "fas fa-edit";

    editContainer.className = "editContainer";
    editInput.className = "editInput";
    editInput.setAttribute("type", "text");
    editButtonConfirm.className = "editButton";
    editButtonConfirm.textContent = "Edit";
    cancelButton.className = "cancelButton";
    cancelButton.textContent = "Cancel";

    deleteButton.className = "fas fa-trash-alt";

    li.appendChild(button);
    button.appendChild(iconCheck);
    li.appendChild(p);
    li.appendChild(editButton);
    li.appendChild(editContainer);

    editContainer.appendChild(editInput);
    editContainer.appendChild(editButtonConfirm);
    editContainer.appendChild(cancelButton);

    li.appendChild(deleteButton);

    return li;
  }

  function renderTasks() {
    ul.innerHTML = "";
    arrTasks.forEach((taskObj) => {
      ul.appendChild(createLi(taskObj));
    });
  }

  function addTask(task) {
    arrTasks.push({
      nome: task,
      currentData: Date.now(),
      completed: false,
    });
  }

  todoAddForm.addEventListener("submit", function (e) {
    e.preventDefault();
    addTask(inputItem.value);

    renderTasks();
    inputItem.value = "";
    inputItem.focus();
  });
  renderTasks();
})();
