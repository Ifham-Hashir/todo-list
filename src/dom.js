import { projects } from "./projects";

//populating the projects section
const projectList = document.querySelector(".project-list");
const todoSection = document.querySelector(".todo-section");
const todoList = document.querySelector(".todo-list");

export function renderProjects() {
  for (let i = 0; i < projects.length; i++) {
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

export function addGlobalEventListener(
  type,
  selector,
  callback,
  parent = document,
) {
  parent.addEventListener(type, (e) => {
    if (e.target.matches(selector)) {
      callback(e);
    }
  });
}

export function removeAllChild(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export function renderTodos(index) {
  if (!document.querySelector(".add-todo-btn")) {
    const addTodoBtn = document.createElement("button");
    addTodoBtn.classList.add("add-todo-btn");
    addTodoBtn.textContent = "Add Todo";
    todoSection.appendChild(addTodoBtn);
  }
  for (let i = 0; i < projects[index].todos.length; i++) {
    const todoDiv = document.createElement("div");
    todoDiv.setAttribute("data-index", i);
    todoDiv.setAttribute("data-projectindex", index);
    todoDiv.classList.add("todo-div");

    if (projects[index].todos[i].priority === "low") {
      todoDiv.style.borderBottom = "8px solid rgb(13, 153, 57)";
    } else if (projects[index].todos[i].priority === "mid") {
      todoDiv.style.borderBottom = "8px solid rgb(18, 85, 173)";
    } else {
      todoDiv.style.borderBottom = "8px solid rgb(234, 88, 88)";
    }

    const checkBox = document.createElement("input");
    checkBox.classList.add("check-box");
    checkBox.type = "checkbox";
    checkBox.checked = projects[index].todos[i].completed;

    const todoTitle = document.createElement("span");
    todoTitle.textContent = `Title: ${projects[index].todos[i].title}`;

    const todoDueDate = document.createElement("span");
    todoDueDate.textContent = `Due Date: ${projects[index].todos[i].dueDate}`;

    const todoPriority = document.createElement("span");
    todoPriority.textContent = `Priority: ${projects[index].todos[i].priority}`;

    const todoButtonDiv = document.createElement("div");
    todoButtonDiv.classList.add("todo-button-div");

    const delTodoBtn = document.createElement("button");
    delTodoBtn.classList.add("delete-todo-btn");
    delTodoBtn.textContent = "X";

    const viewTodoBtn = document.createElement("button");
    viewTodoBtn.classList.add("view-todo-btn");
    viewTodoBtn.textContent = "View/Edit";

    if (projects[index].todos[i].completed) {
      todoTitle.style.textDecoration = "line-through";
      todoDueDate.style.textDecoration = "line-through";
      todoPriority.style.textDecoration = "line-through";
    } else {
      todoTitle.style.textDecoration = "none";
      todoDueDate.style.textDecoration = "none";
      todoPriority.style.textDecoration = "none";
    }

    todoDiv.appendChild(checkBox);
    todoDiv.appendChild(todoTitle);
    todoDiv.appendChild(todoDueDate);
    todoDiv.appendChild(todoPriority);
    todoButtonDiv.appendChild(viewTodoBtn);
    todoButtonDiv.appendChild(delTodoBtn);
    todoDiv.appendChild(todoButtonDiv);
    todoList.appendChild(todoDiv);
  }
}

export function viewTodo(index, i) {
  const todoTitle = document.querySelector("#title");
  todoTitle.value = `${projects[index].todos[i].title}`;

  const todoDueDate = document.querySelector("#duedate");
  todoDueDate.value = `${projects[index].todos[i].dueDate}`;

  const todoDescription = document.querySelector("#description");
  todoDescription.value = `${projects[index].todos[i].description}`;

  const todoPriority = document.querySelector("#priority");
  todoPriority.value = `${projects[index].todos[i].priority}`;
}
