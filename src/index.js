import "./style.css";

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

// app logic

// proj
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
    const folderIcon = document.createElement("i");
    folderIcon.className = "bx bxs-folder";
    projItems.appendChild(folderIcon);
    projItems.appendChild(document.createTextNode(proj));
    projUL.appendChild(projItems);
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
    const folderIcon = document.createElement("i");
    folderIcon.className = "bx bxs-folder";
    listName.appendChild(folderIcon);
    listName.appendChild(document.createTextNode(item));
    listUL.appendChild(listName);
  }
}

function saveList() {
  localStorage.setItem("listItems", JSON.stringify(listItems));
}

// tasks

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
  const task = {
    name: taskName.value,
    dueDate: taskDueDate.value,
    details: taskDetails.value,
    priority: prioQuestion.checked,
  };
  addNewTask(task);

  taskForm.classList.add("hide");
  addTaskBtn.classList.remove("hide");
  taskForm.reset();
}

function addNewTask(task) {
  taskItems.push(task);
  displayTask();
  saveTask();
}

function displayTask() {
  const taskUL = document.querySelector(".all-tasks-ul");
  taskUL.innerHTML = "";
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

    taskUL.appendChild(taskName);
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
