import logic from "./logic.js";
logic();
import { projects } from "./logic.js";
export default function() {
  const sideBar = document.querySelector(".sidebar");
  const projectList = document.createElement("ul");
  projectList.classList.add("project-list");
  for(let i = 0; i < projects.length; i++){
    let listItem = document.createElement("li");
    let link = document.createElement("a");
    link.textContent = `# ${projects[i].projectName.toLowerCase()}`;
    link.href = "#";
    projectList.appendChild(listItem);
    listItem.appendChild(link);
  }
  sideBar.appendChild(projectList);
}