import "./style.css";

// toggle function - leave this in here
const modeToggle = document.querySelector(".toggle");
const headerTagline = document.querySelector(".tagline");
const bodyElement = document.querySelector("body");
const mainElement = document.querySelector("main");
modeToggle.addEventListener("click", () => {
  mainElement.classList.toggle("dark-mode");
  bodyElement.classList.toggle("dark-mode");
  headerTagline.classList.toggle("dark-mode");
});

// app logic

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
    projItems.appendChild(folderIcon);
    projItems.appendChild(document.createTextNode(proj));
    projUL.appendChild(projItems);
    makeUL(folderName);
  }
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
    listName.appendChild(folderIcon);
    listName.appendChild(document.createTextNode(item));
    listUL.appendChild(listName);
    makeUL(folderName);
  }
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
    taskIcon.className = "bx bx-task-x";
    nameTask.appendChild(taskIcon);
    nameTask.appendChild(document.createTextNode(task.name));

    // task duedate
    const taskRightContent = document.createElement("div");
    taskRightContent.className = "right";
    const deleteTask = document.createElement("i");
    deleteTask.className = "bx bxs-trash";
    const editTask = document.createElement("i");
    editTask.className = "bx bx-edit-alt";
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
      allTasksProj.appendChild(taskNameForProj);
      addTaskToFolder(taskNameForProj, task.folder);
    } else if (task.category === "list") {
      const taskNameForList = taskName.cloneNode(true);
      allListsTask.appendChild(taskNameForList);
      addTaskToFolder(taskNameForList, task.folder);
    }

    allTaskUL.appendChild(taskName);
  }
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

function saveTask() {
  localStorage.setItem("taskItems", JSON.stringify(taskItems));
}

window.onload = function () {
  displayProj();
  displayList();
  displayTask();
};
