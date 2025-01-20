import { projects } from "./projects";
import { createProject } from "./projects";
import { removeProject } from "./projects";

const project = createProject("Default");
project.addTodo("Read Book", "Divine Speech", "01-02-2025", "medium");
project.addTodo("Do Homework", "Maths", "21-01-2025", "high");
projects.push(project);
console.log(projects);

//removeProject("Default");
//console.log(projects);