// app logic

export function initToDoList() {
  let folderClicked = null;

  // proj
  const projForm = document.querySelector(".proj-form");
  projForm.addEventListener("submit", submitProj);
  const projCancel = document.querySelector(".proj-cancel");
  projCancel.addEventListener("click", () => {
    projForm.classList.add("hide");
    addProjBtn.classList.remove("hide");
    projForm.reset();
  });
  const addProjBtn = document.querySelector(".addproj");
  addProjBtn.addEventListener("click", () => {
    projForm.classList.remove("hide");
    addProjBtn.classList.add("hide");
  });

  const allTasksProj = document.querySelector(".proj-tasks");
  const allTaskProjBtn = document.querySelector(".task-proj");
  allTaskProjBtn.addEventListener("click", () => {
    allTasksProj.classList.remove("hide");
    taskCategory.textContent = "Things to do: Project";
    allListsTask.classList.add("hide");
    allTaskUL.classList.add("hide");
    hideAllTaskUL();
    allTasksProj.classList.remove("hide");
  });

  let projList = [];
  if (localStorage.getItem("projList")) {
    projList = JSON.parse(localStorage.getItem("projList"));
  }

  function submitProj(event) {
    event.preventDefault();
    const projName = document.querySelector("#proj-name");
    const proj = projName.value.trim();
    addNewProj(proj);

    projForm.classList.add("hide");
    addProjBtn.classList.remove("hide");
    projForm.reset();
  }

  function addNewProj(proj) {
    projList.push(proj);
    displayProj();
    saveProj();
  }

  function displayProj() {
    const projUL = document.querySelector(".projects-ul");
    projUL.innerHTML = "";
    for (const proj of projList) {
      const projItems = document.createElement("button");
      projItems.className = "projlist-btn";
      const folderName = proj.replace(/\s+/g, "");
      projItems.addEventListener("click", () => {
        taskCategory.textContent = `Things to do: ${proj}`;
        folderClicked = folderName;
        allListsTask.classList.add("hide");
        allTaskUL.classList.add("hide");
        allTasksProj.classList.add("hide");
        console.log(folderClicked);
        hideAllTaskUL();
        makeULVisible(folderName);
      });
      const folderIcon = document.createElement("i");
      folderIcon.className = "bx bxs-folder";
      const iconDIV = document.createElement("div");
      iconDIV.className = "icons";
      const deleteBtn = document.createElement("i");
      deleteBtn.className = "bx bx-trash-alt";
      deleteBtn.addEventListener("click", () => {
        eraseProj(proj);
      });
      iconDIV.appendChild(deleteBtn);
      projItems.appendChild(folderIcon);
      projItems.appendChild(document.createTextNode(proj));
      projItems.appendChild(iconDIV);
      projUL.appendChild(projItems);
      makeUL(folderName);
    }
  }

  function eraseProj(taskIndex) {
    projList.splice(taskIndex, 1);
    saveProj();
    location.reload();
  }

  function saveProj() {
    localStorage.setItem("projList", JSON.stringify(projList));
  }

  // lists
  const listForm = document.querySelector(".list-form");
  listForm.addEventListener("submit", submitList);
  const listCancel = document.querySelector(".list-cancel");
  listCancel.addEventListener("click", () => {
    listForm.classList.add("hide");
    addListBtn.classList.remove("hide");
  });

  const addListBtn = document.querySelector(".addlist");
  addListBtn.addEventListener("click", () => {
    listForm.classList.remove("hide");
    addListBtn.classList.add("hide");
    listForm.reset();
  });
  const allListTaskBtn = document.querySelector(".task-list");
  const allListsTask = document.querySelector(".list-tasks");
  allListTaskBtn.addEventListener("click", () => {
    allListsTask.classList.remove("hide");
    taskCategory.textContent = "Things to do: List";
    allTasksProj.classList.add("hide");
    allTaskUL.classList.add("hide");
    hideAllTaskUL();
    allListsTask.classList.remove("hide");
  });

  let listItems = [];
  if (localStorage.getItem("listItems")) {
    listItems = JSON.parse(localStorage.getItem("listItems"));
  }

  function submitList(event) {
    event.preventDefault();
    const listName = document.querySelector("#list-name");
    const list = listName.value.trim();
    addNewList(list);

    listForm.classList.add("hide");
    addListBtn.classList.remove("hide");
    listForm.reset();
  }

  function addNewList(list) {
    listItems.push(list);
    displayList();
    saveList();
  }

  function displayList() {
    const listUL = document.querySelector(".lists-ul");
    listUL.innerHTML = "";
    for (const item of listItems) {
      const listName = document.createElement("button");
      listName.className = "projlist-btn";
      const folderName = item.replace(/\s+/g, "");
      listName.addEventListener("click", () => {
        taskCategory.textContent = `Things to do: ${item}`;
        folderClicked = folderName;
        allListsTask.classList.add("hide");
        allTaskUL.classList.add("hide");
        allTasksProj.classList.add("hide");
        console.log(folderClicked);
        hideAllTaskUL();
        makeULVisible(folderName);
      });
      const folderIcon = document.createElement("i");
      folderIcon.className = "bx bxs-folder";
      const iconDIV = document.createElement("div");
      iconDIV.className = "icons";
      const deleteBtn = document.createElement("i");
      deleteBtn.className = "bx bx-trash-alt";
      deleteBtn.addEventListener("click", () => {
        eraseList(item);
      });
      iconDIV.appendChild(deleteBtn);
      listName.appendChild(folderIcon);
      listName.appendChild(document.createTextNode(item));
      listName.appendChild(iconDIV);
      listUL.appendChild(listName);
      makeUL(folderName);
    }
  }

  function eraseList(taskIndex) {
    listItems.splice(taskIndex, 1);
    saveList();
    location.reload();
  }

  function saveList() {
    localStorage.setItem("listItems", JSON.stringify(listItems));
  }

  // tasks

  const taskCategory = document.querySelector(".task-h2");
  const taskForm = document.querySelector(".task-form");
  taskForm.addEventListener("submit", submitTask);
  const addTaskBtn = document.querySelector(".addtask");
  addTaskBtn.addEventListener("click", () => {
    taskForm.classList.remove("hide");
    addTaskBtn.classList.add("hide");
  });
  const taskCancel = document.querySelector(".task-cancel");
  taskCancel.addEventListener("click", () => {
    taskForm.classList.add("hide");
    addTaskBtn.classList.remove("hide");
    taskForm.reset();
  });
  const viewAllTaskBtn = document.querySelector(".all-task-btn");
  viewAllTaskBtn.addEventListener("click", () => {
    allTaskUL.classList.remove("hide");
    allListsTask.classList.add("hide");
    allTasksProj.classList.add("hide");
    taskCategory.textContent = "Things to do: All";
    hideAllTaskUL();
    allTaskUL.classList.remove("hide");
  });
  const allTaskUL = document.querySelector(".all-tasks");

  let taskItems = [];
  if (localStorage.getItem("taskItems")) {
    taskItems = JSON.parse(localStorage.getItem("taskItems"));
  }

  function submitTask(event) {
    event.preventDefault();
    const taskName = document.querySelector("#task-title");
    const taskDetails = document.querySelector("#details");
    const taskDueDate = document.querySelector("#dueDate");
    const prioQuestion = document.querySelector("#priority");
    const categoryTask = document.querySelector("#type");
    const task = {
      name: taskName.value,
      dueDate: taskDueDate.value,
      details: taskDetails.value,
      priority: prioQuestion.checked,
      category: categoryTask.value,
    };
    addNewTask(task);

    taskForm.classList.add("hide");
    addTaskBtn.classList.remove("hide");
    taskForm.reset();
    location.reload();
  }

  function addNewTask(task) {
    taskItems.push({ ...task, folder: folderClicked });
    displayTask();
    saveTask();
  }

  function displayTask() {
    allListsTask.innerHTML = "";
    allTasksProj.innerHTML = "";
    allTaskUL.innerHTML = "";
    for (const task of taskItems) {
      const taskName = document.createElement("li");
      taskName.className = "task-content";

      const taskElements = document.createElement("div");
      taskElements.className = "task";

      // task name
      const nameTask = document.createElement("div");
      nameTask.className = "name";
      const taskIcon = document.createElement("i");
      taskIcon.className = "bx bx-circle";
      taskIcon.addEventListener("click", () => {
        taskFinish(nameTask, taskIcon);
      });
      nameTask.appendChild(taskIcon);
      nameTask.appendChild(document.createTextNode(task.name));

      // task duedate
      const taskRightContent = document.createElement("div");
      taskRightContent.className = "right";
      const deleteTask = document.createElement("i");
      deleteTask.className = "bx bxs-trash";
      deleteTask.addEventListener("click", () => {
        let indexOfTask = taskItems.indexOf(task);
        eraseTask(parseInt(indexOfTask));
      });
      const editTask = document.createElement("i");
      editTask.className = "bx bx-edit-alt";
      editTask.addEventListener("click", () => {
        editTaskName(nameTask, task);
        editTaskDate(taskRightContent, task);
        editTaskDetails(detailsContent, task);
        alert("you can only edit one input at a time");
      });
      taskRightContent.appendChild(document.createTextNode(task.dueDate));
      taskRightContent.append(deleteTask, editTask);

      taskElements.append(nameTask, taskRightContent);

      // task details
      const taskDetail = document.createElement("div");
      taskDetail.className = "detail-content";

      const detailsContent = document.createElement("p");
      detailsContent.className = "task-details";
      const arrowDetailIcon = document.createElement("i");
      arrowDetailIcon.className = "bx bxs-right-arrow";
      detailsContent.appendChild(arrowDetailIcon);
      detailsContent.appendChild(document.createTextNode(task.details));

      taskDetail.appendChild(detailsContent);

      // check if task is priority
      if (task.priority) {
        taskName.classList.add("prio");
      } else {
      }

      taskName.append(taskElements, taskDetail);

      // check what category the task is
      if (task.category === "proj") {
        const taskNameForProj = taskName.cloneNode(true);
        const taskProjCopy = taskName.cloneNode(true);
        addTaskToFolder(taskProjCopy, task.folder);
        allTasksProj.appendChild(taskNameForProj);
        const taskNameForProjDeleteBtn =
          taskNameForProj.querySelectorAll(".bx.bxs-trash");
        const taskProjCopyDeleteBtn =
          taskProjCopy.querySelectorAll(".bx.bxs-trash");
        addEventListenerDeleteBtnClone(taskNameForProjDeleteBtn, task);
        addEventListenerDeleteBtnClone(taskProjCopyDeleteBtn, task);

        const taskNameForProjEditBtn =
          taskNameForProj.querySelectorAll(".bx.bx-edit-alt");
        const taskProjCopyEditBtn =
          taskProjCopy.querySelectorAll(".bx.bx-edit-alt");

        const taskNameForProjEditName = taskNameForProj.querySelector(".name");
        const taskProjCopyEditName = taskProjCopy.querySelector(".name");

        const taskNameForProjEditDate = taskNameForProj.querySelector(".right");
        const taskProjCopyEditDate = taskProjCopy.querySelector(".right");

        const taskNameForProjEditDetail =
          taskNameForProj.querySelector(".detail-content");
        const taskProjCopyEditDetail =
          taskProjCopy.querySelector(".detail-content");

        addEventListenerEditBtnClone(
          taskNameForProjEditBtn,
          taskNameForProjEditName,
          task,
          "name"
        );
        addEventListenerEditBtnClone(
          taskNameForProjEditBtn,
          taskNameForProjEditDate,
          task,
          "date"
        );
        addEventListenerEditBtnClone(
          taskNameForProjEditBtn,
          taskNameForProjEditDetail,
          task,
          "detail"
        );

        addEventListenerEditBtnClone(
          taskProjCopyEditBtn,
          taskProjCopyEditName,
          task,
          "name"
        );
        addEventListenerEditBtnClone(
          taskProjCopyEditBtn,
          taskProjCopyEditDate,
          task,
          "date"
        );
        addEventListenerEditBtnClone(
          taskProjCopyEditBtn,
          taskProjCopyEditDetail,
          task,
          "detail"
        );
      } else if (task.category === "list") {
        const taskNameForList = taskName.cloneNode(true);
        const taskListCopy = taskName.cloneNode(true);
        addTaskToFolder(taskListCopy, task.folder);
        allListsTask.appendChild(taskNameForList);

        const taskNameForListDeleteBtn =
          taskNameForList.querySelectorAll(".bx.bxs-trash");
        const taskListCopyDeleteBtn =
          taskListCopy.querySelectorAll(".bx.bxs-trash");
        addEventListenerDeleteBtnClone(taskNameForListDeleteBtn, task);
        addEventListenerDeleteBtnClone(taskListCopyDeleteBtn, task);

        const taskNameForListEditBtn =
          taskNameForList.querySelectorAll(".bx.bx-edit-alt");
        const taskListCopyEditBtn =
          taskListCopy.querySelectorAll(".bx.bx-edit-alt");

        const taskNameForListEditName = taskNameForList.querySelector(".name");
        const taskListCopyEditName = taskListCopy.querySelector(".name");

        const taskNameForListEditDate = taskNameForList.querySelector(".right");
        const taskListCopyEditDate = taskListCopy.querySelector(".right");

        const taskNameForListEditDetail =
          taskNameForList.querySelector(".detail-content");
        const taskListCopyEditDetail =
          taskListCopy.querySelector(".detail-content");

        addEventListenerEditBtnClone(
          taskNameForListEditBtn,
          taskNameForListEditName,
          task,
          "name"
        );
        addEventListenerEditBtnClone(
          taskNameForListEditBtn,
          taskNameForListEditDate,
          task,
          "date"
        );
        addEventListenerEditBtnClone(
          taskNameForListEditBtn,
          taskNameForListEditDetail,
          task,
          "detail"
        );

        addEventListenerEditBtnClone(
          taskListCopyEditBtn,
          taskListCopyEditName,
          task,
          "name"
        );
        addEventListenerEditBtnClone(
          taskListCopyEditBtn,
          taskListCopyEditDate,
          task,
          "date"
        );
        addEventListenerEditBtnClone(
          taskListCopyEditBtn,
          taskListCopyEditDetail,
          task,
          "detail"
        );
      }

      allTaskUL.appendChild(taskName);
    }
  }

  function editTaskName(nameElement, task) {
    // Create an input element for editing
    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = task.name;

    // Replace the name element with the input element
    nameElement.replaceWith(editInput);

    // Add a keydown event listener to the input element to capture the edited value
    editInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        const editedName = editInput.value;
        task.name = editedName;
        saveTask();
        displayTask();
      }
    });

    // Focus on the input element to enable editing immediately
    editInput.focus();
  }

  function editTaskDate(dateElement, task) {
    // Create an input element for editing
    const editDate = document.createElement("input");
    editDate.type = "date";
    editDate.value = task.dueDate;

    // Replace the name element with the input element
    dateElement.replaceWith(editDate);

    // Add a keydown event listener to the input element to capture the edited value
    editDate.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        const editedDate = editDate.value;
        task.dueDate = editedDate;
        saveTask();
        displayTask();
      }
    });
  }

  function editTaskDetails(detailElement, task) {
    // Create an input element for editing
    const editDetail = document.createElement("input");
    editDetail.type = "text";
    editDetail.value = task.details;

    // Replace the name element with the input element
    detailElement.replaceWith(editDetail);

    // Add a keydown event listener to the input element to capture the edited value
    editDetail.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        const editedDetail = editDetail.value;
        task.details = editedDetail;
        saveTask();
        displayTask();
      }
    });
  }

  function addEventListenerDeleteBtnClone(clone, task) {
    clone.forEach((button) => {
      button.addEventListener("click", () => {
        let indexOfTask = taskItems.indexOf(task);
        eraseTask(parseInt(indexOfTask));
      });
    });
  }

  function addEventListenerEditBtnClone(clone, element, task, type) {
    if (type === "name") {
      clone.forEach((button) => {
        button.addEventListener("click", () => {
          editTaskName(element, task);
          alert("you can only edit one input at a time");
        });
      });
    } else if (type === "date") {
      clone.forEach((button) => {
        button.addEventListener("click", () => {
          editTaskDate(element, task);
        });
      });
    } else if (type === "detail") {
      clone.forEach((button) => {
        button.addEventListener("click", () => {
          editTaskDetails(element, task);
        });
      });
    }
  }

  function eraseTask(taskIndex) {
    taskItems.splice(taskIndex, 1);
    saveTask();
    location.reload();
  }

  function makeUL(folder) {
    const mainTaskDIV = document.querySelector(".main-list");
    const folderUL = document.createElement("ul");
    folderUL.className = `${folder}-ul`;
    mainTaskDIV.appendChild(folderUL);
  }

  function addTaskToFolder(task, folder) {
    const folderTaskContainer = document.querySelector(`.${folder}-ul`);
    if (folderTaskContainer) {
      folderTaskContainer.appendChild(task);
    }
  }

  function hideAllTaskUL() {
    const allULs = document.querySelectorAll(".main-list ul");
    allULs.forEach((ul) => {
      ul.classList.add("hide");
    });
  }

  function makeULVisible(folder) {
    const folderUL = document.querySelector(`.${folder}-ul`);
    if (folderUL) {
      folderUL.classList.remove("hide");
    }
  }

  function taskFinish(taskname, icon) {
    icon.classList.toggle("bxs-circle");
    taskname.classList.toggle("done-task");
  }

  function saveTask() {
    localStorage.setItem("taskItems", JSON.stringify(taskItems));
  }

  window.onload = function () {
    displayProj();
    displayList();
    displayTask();
    hideAllTaskUL();
    allTaskUL.classList.remove("hide");
  };
}
