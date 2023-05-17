import "./style.css";

const projForm = document.querySelector(".proj-form");
const projName = document.querySelector("#proj-name");
const projSubmit = document.querySelector(".proj-add");
const projCancel = document.querySelector(".proj-cancel");
projCancel.addEventListener("click", () => {
    projForm.classList.add("hide");
    addProjBtn.classList.remove("hide");
})
const projUL = document.querySelector(".proj-ul");
const addProjBtn = document.querySelector(".addproj");
addProjBtn.addEventListener("click", () => {
    projForm.classList.remove("hide");
    addProjBtn.classList.add("hide");
})

const listForm = document.querySelector(".list-form");
const listName = document.querySelector("#list-name");
const listSubmit = document.querySelector(".list-add");
const listCancel = document.querySelector(".list-cancel");
listCancel.addEventListener("click", () => {
    listForm.classList.add("hide");
    addListBtn.classList.remove("hide")
})
const listUL = document.querySelector(".list-ul");
const addListBtn = document.querySelector(".addlist");
addListBtn.addEventListener("click", () => {
    listForm.classList.remove("hide");
    addListBtn.classList.add("hide");
})
