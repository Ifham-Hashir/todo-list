import logic from "./logic.js";
logic();
import { projects } from "./logic.js";
export default function() {
  const sideBar = document.querySelector(".sidebar");
  const todoContainer = document.querySelector(".todo-container");
  const projectList = document.createElement("ul");
  projectList.classList.add("project-list");

  for(let i = 0; i < projects.length; i++){
    let listItem = document.createElement("li");
    let link = document.createElement("a");
    link.textContent = `# ${projects[i].projectName.toLowerCase()}`;
    link.href = "#";
    projectList.appendChild(listItem);
    listItem.appendChild(link);

    link.addEventListener("click", () => {
      while (todoContainer.firstChild) {
        todoContainer.removeChild(todoContainer.firstChild);
      }
      for(let j = 0; j < projects[i].todoList.length; j++){
        if(!projects[i].todoList[j]){
          return;
        }
        else{
          const todoCard = document.createElement("div");
          todoCard.classList.add("todo-card");
          todoContainer.appendChild(todoCard);
          todoCard.dataset.index = j;
  
          const todoTitle = document.createElement("div");
          todoCard.appendChild(todoTitle);
          todoTitle.textContent = `${projects[i].todoList[j].title}`;
  
          const todoDueDate = document.createElement("div");
          todoCard.appendChild(todoDueDate);
          todoDueDate.textContent = `${projects[i].todoList[j].dueDate}`;
  
          const todoPriority = document.createElement("div");
          todoCard.appendChild(todoPriority);
          todoPriority.textContent = `${projects[i].todoList[j].priority}`;
  
          const removeBtn = document.createElement("button");
          todoCard.appendChild(removeBtn);
          removeBtn.textContent = "X";
  
          removeBtn.addEventListener("click", () => {
            delete projects[i].todoList[j];
            todoCard.remove();
          });
        }
        //alert(projects[i].todoList[j].title);
      }
    });
  }
  sideBar.appendChild(projectList);
}