import {projects} from "./projects"


//populating the projects section
const projectSection = document.querySelector(".project-section");
export function renderProjects() {
  const projectList = document.createElement("ul");
  projectSection.appendChild(projectList);
  projectList.classList.add("project-list");
  for(let i = 0; i < projects.length; i++){
    
    const project = document.createElement("li");
    projectList.appendChild(project);
    project.textContent = projects[i].name;
    project.classList.add("project-name");

    const delProjectBtn = document.createElement("button");
    project.appendChild(delProjectBtn);
    delProjectBtn.textContent = "X";
    delProjectBtn.classList.add("delete-project");
  }
  
}