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

const listForm = document.querySelector(".list-form");
const listName = document.querySelector("#list-name");
const listSubmit = document.querySelector(".list-add");
const listCancel = document.querySelector(".list-cancel");
listCancel.addEventListener("click", () => {
  listForm.classList.add("hide");
  addListBtn.classList.remove("hide");
});
const listUL = document.querySelector(".list-ul");
const addListBtn = document.querySelector(".addlist");
addListBtn.addEventListener("click", () => {
  listForm.classList.remove("hide");
  addListBtn.classList.add("hide");
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
let projList = [];
if (localStorage.getItem("projList")) {
  projList = JSON.parse(localStorage.getItem("projList"));
}

function submitProj(event) {
    const projName = document.querySelector("#proj-name");
    event.preventDefault();
    const proj = projName.value.trim();
    addNewProj(proj);
}

function addNewProj(proj) {
  projList.push(proj);
  displayProj();
  saveProj();
}

function displayProj() {
    const projUL = document.querySelector(".proj-ul");
    for (const proj of projList) {
      const projItems = document.createElement("li");
      projItems.textContent = proj;
      projUL.appendChild(projItems);
    }
  }

function saveProj() {
  localStorage.setItem("projList", JSON.stringify(projList));
}
