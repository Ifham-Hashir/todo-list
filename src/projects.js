export const projects = [];

export function createProject(name){
  return {
    name,
    todos: [],
  };
}

export function deleteProject(name){
  for(let i = 0; i < projects.length; i++){
    if(projects[i].name === name){
      projects.splice(projects[i], 1)
    }
  }
}