export const projects = [];

export function createProject(name) {
  return {
    name,
    todos: [],
  };
}

export function deleteProject(index) {
  projects.splice(index, 1);
}
