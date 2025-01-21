import { projects } from "./projects";

export function addTodo(title, description, dueDate, priority, status){
  return {title, description, dueDate, priority, status : "incomplete"};
}

export function removeTodo(projectName, todoTitle){
  for(let i = 0; i < projects.length; i++){
    if(projectName === projects[i].name){
      for(let j = 0; j < projects[i].todos.length; j++){
        if(projects[i].todos[j].title === todoTitle){
          projects[i].todos.splice(projects[i].todos[j], 1);
        }
      }
    }
  }
}