import { projects } from "./projects";

export function addTodo(title, description, dueDate, priority, status){
  return {title, description, dueDate, priority, status : "incomplete"};
}




