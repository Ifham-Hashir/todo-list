export const projects = [];
export default function() {
  function Project(projectName, todoList){
    this.projectName = projectName;
    this.todoList = todoList || [];
  }

  const defaultTodo = new Project("defaultTodo", []);
  const arabic = new Project("arabic", []);

  function Todo(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
  
  const todo1 = new Todo("Read Book", "null", "1-11-2024", "High");
  const todo2 = new Todo("Read Book2", "null", "12-11-2024", "Low");
  const todo3 = new Todo("Divine Speech", "Watch", "10/11/2024", "High");
  
  function addToDo(){
    defaultTodo.todoList.push(todo1);
    defaultTodo.todoList.push(todo2);
    arabic.todoList.push(todo3);
  }

  addToDo();
  projects.push(defaultTodo);
  projects.push(arabic);
  console.log(projects);
}
