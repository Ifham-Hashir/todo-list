import { projects } from "./projects";
import { createProject } from "./projects";
import { addTodo } from "./todo";
import { renderProjects } from "./dom";
import { renderTodos } from "./dom";
import { deleteProject } from "./projects";
import { addGlobalEventListener } from "./dom";
import { removeAllChild } from "./dom";
import { viewTodo } from "./dom";
import "./styles.css";

const project = createProject("Default");
projects.push(project);

const todo1 = addTodo("Study Arabic", "Read Dream Arabic Textbook", "7-02-2025", "high");
const todo2 = addTodo("Todo-List", "Add the add todo functionality", "22-02-2025", "low");
project.todos.push(todo1);
project.todos.push(todo2);

const project2 = createProject("Messi");
projects.push(project2);

const todo3 = addTodo("read book", "harry potter", "22-01-2025", "mid");
const todo4 = addTodo("watch movie", "harry potter", "22-01-2025", "low");
project2.todos.push(todo3);
project2.todos.push(todo4);
console.log(projects);


const projectDialog = document.getElementById("projectDialog");
const projectForm = document.getElementById("projectForm");
const projectNameInput = document.getElementById("projectName");
const addProjectBtn = document.querySelector(".add-project-btn");
const cancelBtn = document.getElementById("cancelBtn");
const projectList = document.querySelector(".project-list");
const todoHead = document.querySelector(".todo-head");
const todoList = document.querySelector(".todo-list");
const modal = document.querySelector(".view-todo-modal");


addProjectBtn.addEventListener("click", () => {
    projectDialog.showModal();  // Show the dialog box
});

cancelBtn.addEventListener("click", () => {
    projectDialog.close();  // Close the dialog box
});

function addProject(name) {
  const newProject = createProject(name);
  projects.push(newProject);
  removeAllChild(projectList);
  renderProjects();
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

renderProjects();

addGlobalEventListener("click", ".delete-project-btn", e => {
  const index = e.target.parentNode.dataset.index;
  deleteProject(index);
  removeAllChild(projectList);
  removeAllChild(todoList);
  if(document.querySelector(".add-todo-btn")){
    document.querySelector(".add-todo-btn").remove();
  }
  todoHead.textContent = "";
  renderProjects();
}, projectList);

addGlobalEventListener("click", ".project-name", e => {
  const index = e.target.parentNode.dataset.index;
  removeAllChild(todoList);
  todoHead.textContent = projects[index].name;
  renderTodos(index);
}, projectList);


addGlobalEventListener("click", ".delete-todo-btn", e => {
  const todoIndex = e.target.parentNode.parentNode.dataset.index;
  const projectIndex = e.target.parentNode.parentNode.dataset.projectindex;
  projects[projectIndex].todos.splice(todoIndex, 1);
  removeAllChild(todoList);
  renderTodos(projectIndex);
}, todoList);

addGlobalEventListener("change", ".check-box", e => {
  const todoIndex = e.target.parentNode.dataset.index;
  const projectIndex = e.target.parentNode.dataset.projectindex;
  if(e.target.checked){
    projects[projectIndex].todos[todoIndex].completed = true;
  }else{
    projects[projectIndex].todos[todoIndex].completed = false;
  }
  removeAllChild(todoList);
  renderTodos(projectIndex);
}, todoList);

addGlobalEventListener("click", ".view-todo-btn", e => {
  const todoIndex = e.target.parentNode.parentNode.dataset.index;
  const projectIndex = e.target.parentNode.parentNode.dataset.projectindex;
  removeAllChild(modal);
  viewTodo(projectIndex, todoIndex);
  modal.showModal();
}, todoList);

modal.addEventListener("click", e => {
  const dialogDimensions = modal.getBoundingClientRect()
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    modal.close()
  }
})