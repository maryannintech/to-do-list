export function initList() {
  let folderClicked = null;
  const allTasksProj = document.querySelector(".proj-tasks");
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

  function makeUL(folder) {
    const mainTaskDIV = document.querySelector(".main-list");
    const folderUL = document.createElement("ul");
    folderUL.className = `${folder}-ul`;
    mainTaskDIV.appendChild(folderUL);
  }

  function makeULVisible(folder) {
    const folderUL = document.querySelector(`.${folder}-ul`);
    if (folderUL) {
      folderUL.classList.remove("hide");
    }
  }

  window.onload = function () {
    displayList();
  };
}
