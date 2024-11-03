export const projects = [];
export default function() {
  function Project(projectName, todoList){
    this.projectName = projectName;
    this.todoList = todoList || [];
  }

  const general = new Project("general", []);
  const arabic = new Project("arabic", []);

  function Todo(title, dueDate, priority) {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
  }
  
  const todo1 = new Todo("Read Book", "1-11-2024", "High");
  const todo2 = new Todo("Read Book2", "12-11-2024", "Low");
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
