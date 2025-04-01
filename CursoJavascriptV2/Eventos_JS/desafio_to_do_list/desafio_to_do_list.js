(function name() {
  "use strict";

  const todoAddForm = document.getElementById("todo-add");
  const inputItem = document.getElementById("item-input");
  const ul = document.getElementById("todo-list");
  const lis = ul.getElementsByTagName("li");

  let arrTasks = [
    {
      nome: "Task 1",
      currentData: Date.now(),
      completed: false,
    },
    {
      nome: "Task 2",
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
    const deleteButton = document.createElement("i");

    const editContainer = document.createElement("div");
    const editInput = document.createElement("input");
    const editButtonConfirm = document.createElement("button");
    const cancelButton = document.createElement("button");

    li.className = "todo-item";
    p.className = "task-name";
    p.textContent = obj.nome;
    button.className = "button-check";
    iconCheck.className = "fas fa-check displayNone";
    editButton.className = "fas fa-edit";

    editContainer.className = "editContainer";
    editInput.className = "editInput";
    editButtonConfirm.className = "editButton";
    editButtonConfirm.textContent = "Edit";
    cancelButton.className = "cancelButton";
    cancelButton.textContent = "Cancel";
    deleteButton.className = "fas fa-trash-alt";

    editInput.setAttribute("type", "text");
    button.setAttribute("data-action", "button");
    editButton.setAttribute("data-action", "editButton");
    deleteButton.setAttribute("data-action", "deleteButton");
    editContainer.setAttribute("data-action", "editContainer");
    cancelButton.setAttribute("data-action", "cancelButton");
    editButtonConfirm.setAttribute("data-action", "editButtonConfirm");

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

  function clickedUL(e) {
    const dataAction = e.target.getAttribute("data-action");

    if (!dataAction) return;

    let currentLi = e.target;

    while (currentLi.nodeName !== "LI") {
      currentLi = currentLi.parentElement;
    }
    console.log(currentLi);

    const currentLiIndex = [...lis].indexOf(currentLi);
    console.log(currentLiIndex);

    const actions = {
      editButton: function () {
        const editContainer = currentLi.querySelector(".editContainer");

        [...ul.querySelectorAll(".editContainer")].forEach((container) => {
          container.removeAttribute("style");
        });

        editContainer.style.display = "flex";
      },
      deleteButton: function () {
        arrTasks.splice(currentLiIndex, 1);
        console.log(arrTasks);

        renderTasks();
        // currentLi.remove();
        // currentLi.parentElement.removeChild(currentLi);
      },
      cancelButton: function () {
        const editContainer = currentLi.querySelector(".editContainer");
        editContainer.style.display = "none";
      },
    };

    if (actions[dataAction]) {
      actions[dataAction]();
    }
  }

  todoAddForm.addEventListener("submit", function (e) {
    e.preventDefault();
    addTask(inputItem.value);

    renderTasks();
    inputItem.value = "";
    inputItem.focus();
  });

  ul.addEventListener("click", clickedUL);
  renderTasks();
})();
