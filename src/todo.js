import { projects } from "./projects";

export function addTodo(title, description, dueDate, priority, completed){
  return {title, description, dueDate, priority, completed : false};
}



