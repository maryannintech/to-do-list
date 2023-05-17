import _ from "lodash";
import "./style.css";

const projForm = document.querySelector(".proj-form");
const projName = document.querySelector("#proj-name");
const projSubmit = document.querySelector(".proj-add");
const projCancel = document.querySelector(".proj-cancel");

const listForm = document.querySelector(".list-form");
const listName = document.querySelector("#list-name");
const listSubmit = document.querySelector(".list-add");
const listCancel = document.querySelector(".list-cancel");


function addProject (name) {
    name = projName.value;
}