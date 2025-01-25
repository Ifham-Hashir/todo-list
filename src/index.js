import { projects } from "./projects";
import { createProject } from "./projects";
import { removeTodo } from "./todo";
import { addTodo } from "./todo";
import { renderProjects } from "./dom";
import "./styles.css";

const project = createProject("Default");
projects.push(project);

const todo1 = addTodo("read book", "harry potter", "22-01-2025", "low");
const todo2 = addTodo("watch movie", "harry potter", "22-01-2025", "low");
project.todos.push(todo1);
project.todos.push(todo2);

const project2 = createProject("Messi");
projects.push(project2);

const todo3 = addTodo("read book", "harry potter", "22-01-2025", "low");
const todo4 = addTodo("watch movie", "harry potter", "22-01-2025", "low");
project2.todos.push(todo3);
project2.todos.push(todo4);


console.log(projects);
renderProjects();

const projectDialog = document.getElementById("projectDialog");
const projectForm = document.getElementById("projectForm");
const projectNameInput = document.getElementById("projectName");
const addProjectBtn = document.querySelector(".add-project-btn");
const cancelBtn = document.getElementById("cancelBtn");

addProjectBtn.addEventListener("click", () => {
    projectDialog.showModal();  // Show the dialog box
});

cancelBtn.addEventListener("click", () => {
    projectDialog.close();  // Close the dialog box
});

function addProject(name) {
  const newProject = createProject(name);
  projects.push(newProject);
  const ul = document.querySelector(".project-list");
  ul.remove();
  renderProjects();
  deleteProjectBtn = document.querySelectorAll(".delete-project-btn");

}

projectForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const projectName = projectNameInput.value.trim();
  if (projectName) {
      addProject(projectName);
      projectDialog.close();  // Close the dialog
      projectNameInput.value = "";  // Clear input field
  }
  console.log(projects);
});




