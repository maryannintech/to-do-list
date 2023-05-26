export function initProject() {
  let folderClicked = null;
  const allListsTask = document.querySelector(".list-tasks");
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
    displayProj();
  };
}
