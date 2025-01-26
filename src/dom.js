import {projects} from "./projects"

//populating the projects section
const projectSection = document.querySelector(".project-section");
const todoSection = document.querySelector(".todo-section");
const todoHead = document.querySelector(".todo-head");

export function renderProjects() {
  const projectList = document.createElement("ul");
  projectSection.appendChild(projectList);
  projectList.classList.add("project-list");

  for(let i = 0; i < projects.length; i++){
    const projectDiv = document.createElement("div");
    projectList.appendChild(projectDiv);
    projectDiv.classList.add("project-div");

    const project = document.createElement("li");
    projectDiv.appendChild(project);
    project.textContent = projects[i].name;
    project.classList.add("project-name");

    let projectNameList = document.querySelectorAll(".project-name");
    projectNameList[i].addEventListener("click", (e) => {
      todoHead.textContent = "";
      todoHead.textContent = projects[i].name;
    });


    const delProjectBtn = document.createElement("button");
    projectDiv.appendChild(delProjectBtn);
    delProjectBtn.textContent = "X";
    delProjectBtn.classList.add("delete-project-btn");
    delProjectBtn.setAttribute("data-index", i);

    let delBtnList = document.querySelectorAll(".delete-project-btn");
    delBtnList[i].addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      projects.splice(index, 1);
      const ul = document.querySelector(".project-list");
      ul.remove();
      renderProjects();
    });
  }
}


export function renderTodos() {
  for(let i = 0; i < projects.length; i++){
    const todoList = document.createElement("ul");
    for(let j = 0; j < projects[i].todos.length; j++){

    }
    
  }
}