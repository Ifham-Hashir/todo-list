export default function() {
  const myToDo = [];
  function Todo(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
  
  const todo1 = new Todo("Read Book", "null", "1-11-2024", "High");
  const todo2 = new Todo("Read Book", "null", "12-11-2024", "Low");
  
  function addToDo(){
    myToDo.push(todo1);
    myToDo.push(todo2);
  }

  addToDo();
  console.log(myToDo);
}
