export const projects = [];

export function Project(projectName, todoList){
  this.projectName = projectName;
  this.todoList = todoList || [];
}

export function Todo(title, dueDate, priority) {
  this.title = title;
  this.dueDate = dueDate;
  this.priority = priority;
}

export function inputTodo(){
  const todoObj = new Todo(prompt("Title"), prompt("DueDate"), prompt("Priority"));
  projects[i].todoList.push(todoObj);
}

export default function() {

  const general = new Project("general", []);
  const arabic = new Project("arabic", []);

  
  const todo1 = new Todo("Read FC Barcelona", "1-11-2024", "High");
  const todo2 = new Todo("Read Messi", "12-11-2024", "Low");
  const todo3 = new Todo("Divine Speech", "10/11/2024", "High");
  
  function addToDo(){
    general.todoList.push(todo1);
    general.todoList.push(todo2);
    arabic.todoList.push(todo3);
  }

  addToDo();
  projects.push(general);
  projects.push(arabic);
  console.log(projects);

}
