import {projects} from "./projects"

//populating the projects section
const projectList = document.querySelector(".project-list");
const todoSection = document.querySelector(".todo-section");
const todoHead = document.querySelector(".todo-head");

export function renderProjects() {

  for(let i = 0; i < projects.length; i++){
    const projectDiv = document.createElement("div");
    projectDiv.setAttribute("data-index", i);
    projectDiv.classList.add("project-div");

    const project = document.createElement("li");
    project.textContent = projects[i].name;
    project.classList.add("project-name");

    const delProjectBtn = document.createElement("button");
    delProjectBtn.textContent = "X";
    delProjectBtn.classList.add("delete-project-btn");

    projectDiv.appendChild(project);
    projectDiv.appendChild(delProjectBtn);
    projectList.appendChild(projectDiv);
  }

}

