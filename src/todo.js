import { projects } from "./projects";

export function addTodo(title, description, dueDate, priority, status){
  return {title, description, dueDate, priority, status : "incomplete"};
}

export function removeTodo(projectName, todoTitle) {
  const project = projects.find((p) => p.name === projectName);
  if (project) {
    const todoIndex = project.todos.findIndex((todo) => todo.title === todoTitle);
    if (todoIndex !== -1) {
      project.todos.splice(todoIndex, 1);
    }
  }
}


