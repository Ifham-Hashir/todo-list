export const projects = [];

export function createProject(name){
  return {
    name,
    todos: [],
    addTodo(title, description, dueDate, priority){
      this.todos.push({title, description, dueDate, priority, status: "incomplete"});
    }
  };
}

export function removeProject(name) {
  const index = projects.findIndex(project => project.name === name);
  if (index !== -1) {
      projects.splice(index, 1);
  }
}
