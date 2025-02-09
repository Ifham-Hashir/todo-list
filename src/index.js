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

const todo1 = addTodo(
  "Study Arabic",
  "Read Dream Arabic Textbook",
  "2025-02-07",
  "high",
);
const todo2 = addTodo("Read Book", "Harry Potter", "2025-02-08", "mid");
const todo3 = addTodo(
  "Todo-List",
  "Add the add todo functionality",
  "2025-02-09",
  "low",
);
project.todos.push(todo1);
project.todos.push(todo2);
project.todos.push(todo3);

loadFromLocalStorage();

const projectDialog = document.getElementById("projectDialog");
const projectForm = document.getElementById("projectForm");
const projectNameInput = document.getElementById("projectName");
const addProjectBtn = document.querySelector(".add-project-btn");
const cancelBtn = document.getElementById("cancelBtn");
const projectList = document.querySelector(".project-list");
const todoHead = document.querySelector(".todo-head");
const todoList = document.querySelector(".todo-list");
const todoDialog = document.querySelector(".todo-dialog");

addProjectBtn.addEventListener("click", () => {
  projectDialog.showModal(); // Show the dialog box
});

cancelBtn.addEventListener("click", () => {
  projectDialog.close(); // Close the dialog box
});

function addProject(name) {
  const newProject = createProject(name);
  projects.push(newProject);
  removeAllChild(projectList);
  saveToLocalStorage();
  renderProjects();
}

projectForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const projectName = projectNameInput.value.trim();
  if (projectName) {
    addProject(projectName);
    projectDialog.close(); // Close the dialog
    projectNameInput.value = ""; // Clear input field
  }
  console.log(projects);
});

addGlobalEventListener(
  "click",
  ".delete-project-btn",
  (e) => {
    const index = e.target.parentNode.dataset.index;
    deleteProject(index);
    removeAllChild(projectList);
    removeAllChild(todoList);
    if (document.querySelector(".add-todo-btn")) {
      document.querySelector(".add-todo-btn").remove();
    }
    todoHead.textContent = "";
    saveToLocalStorage();
    renderProjects();
  },
  projectList,
);

addGlobalEventListener(
  "click",
  ".project-name",
  (e) => {
    const index = e.target.parentNode.dataset.index;
    removeAllChild(todoList);
    todoHead.textContent = projects[index].name;
    renderTodos(index);
    const addTodoBtn = document.querySelector(".add-todo-btn");
    addTodoBtn.setAttribute("data-projectindex", index);
  },
  projectList,
);

addGlobalEventListener(
  "click",
  ".delete-todo-btn",
  (e) => {
    const todoIndex = e.target.parentNode.parentNode.dataset.index;
    const projectIndex = e.target.parentNode.parentNode.dataset.projectindex;
    projects[projectIndex].todos.splice(todoIndex, 1);
    removeAllChild(todoList);
    saveToLocalStorage();
    renderTodos(projectIndex);
  },
  todoList,
);

addGlobalEventListener(
  "change",
  ".check-box",
  (e) => {
    const todoIndex = e.target.parentNode.dataset.index;
    const projectIndex = e.target.parentNode.dataset.projectindex;
    if (e.target.checked) {
      projects[projectIndex].todos[todoIndex].completed = true;
    } else {
      projects[projectIndex].todos[todoIndex].completed = false;
    }
    removeAllChild(todoList);
    saveToLocalStorage();
    renderTodos(projectIndex);
  },
  todoList,
);

const todoForm = document.querySelector(".todo-form");
const todoTitle = document.querySelector("#title");
const todoDueDate = document.querySelector("#duedate");
const todoDescription = document.querySelector("#description");
const todoPriority = document.querySelector("#priority");

todoDialog.addEventListener("click", (e) => {
  const dialogDimensions = todoDialog.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    todoDialog.close();
  }
});

let isEditing = false; // Flag to check if we're editing
let editingProjectIndex = null;
let editingTodoIndex = null;

// Handle clicking "Edit Todo"
addGlobalEventListener("click", ".view-todo-btn", (e) => {
  const todoIndex = e.target.parentNode.parentNode.dataset.index;
  const projectIndex = e.target.parentNode.parentNode.dataset.projectindex;

  isEditing = true; // Mark as edit mode
  editingProjectIndex = projectIndex;
  editingTodoIndex = todoIndex;

  viewTodo(projectIndex, todoIndex);
  todoDialog.showModal();
});

// Handle clicking "Add Todo"
addGlobalEventListener("click", ".add-todo-btn", (e) => {
  const projectIndex = e.target.dataset.projectindex;

  isEditing = false; // Mark as add mode
  editingProjectIndex = projectIndex;
  editingTodoIndex = null;

  todoDialog.showModal();
});

// Attach submit event **only once**
todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (isEditing) {
    // Edit the existing todo
    projects[editingProjectIndex].todos[editingTodoIndex].title =
      todoTitle.value.trim();
    projects[editingProjectIndex].todos[editingTodoIndex].description =
      todoDescription.value.trim();
    projects[editingProjectIndex].todos[editingTodoIndex].dueDate =
      todoDueDate.value.trim();
    projects[editingProjectIndex].todos[editingTodoIndex].priority =
      todoPriority.value.trim();
    saveToLocalStorage();
  } else {
    // Add a new todo
    const todo = addTodo(
      todoTitle.value.trim(),
      todoDescription.value.trim(),
      todoDueDate.value.trim(),
      todoPriority.value.trim(),
    );
    projects[editingProjectIndex].todos.push(todo);
  }

  todoDialog.close();
  todoForm.reset();
  removeAllChild(todoList);
  saveToLocalStorage();
  renderTodos(editingProjectIndex);
});

import { format } from "date-fns";
const today = format(new Date(), "yyyy-MM-dd");
todoDueDate.setAttribute("min", today);

function saveToLocalStorage() {
  localStorage.setItem("projects", JSON.stringify(projects));
}

function loadFromLocalStorage() {
  const storedProjects = localStorage.getItem("projects");
  if (storedProjects) {
    const parsedProjects = JSON.parse(storedProjects);

    // Instead of reassigning projects, update its contents
    projects.length = 0; // Clear the existing array
    projects.push(...parsedProjects); // Push new data into the same array
  }
  renderProjects();
}
