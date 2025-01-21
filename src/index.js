import { projects } from "./projects";
import { createProject } from "./projects";
import { deleteProject } from "./projects";
import { removeTodo } from "./todo";
import { addTodo } from "./todo";

const project = createProject("Default");
projects.push(project);

const todo1 = addTodo("read book", "harry potter", "22-01-2025", "low");
const todo2 = addTodo("watch movie", "harry potter", "22-01-2025", "low");
project.todos.push(todo1);
project.todos.push(todo2);

removeTodo("Default", "read book");

console.log(projects);
