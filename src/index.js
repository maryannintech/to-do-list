import "./style.css";

const projForm = document.querySelector(".proj-form");
projForm.addEventListener("submit", submitProj);
const projCancel = document.querySelector(".proj-cancel");
projCancel.addEventListener("click", () => {
  projForm.classList.add("hide");
  addProjBtn.classList.remove("hide");
});
const addProjBtn = document.querySelector(".addproj");
addProjBtn.addEventListener("click", () => {
  projForm.classList.remove("hide");
  addProjBtn.classList.add("hide");
});

const taskForm = document.querySelector(".task-form");
const addTaskBtn = document.querySelector(".addtask");
addTaskBtn.addEventListener("click", () => {
  taskForm.classList.remove("hide");
  addTaskBtn.classList.add("hide");
});
const taskCancel = document.querySelector(".task-cancel");
taskCancel.addEventListener("click", () => {
  taskForm.classList.add("hide");
  addTaskBtn.classList.remove("hide");
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

window.onload = function () {
  displayProj();
  displayList();
};
