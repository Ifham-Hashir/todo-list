import logic from "./logic.js";
logic();
import { projects } from "./logic.js";
export default function() {
  const sideBar = document.querySelector(".sidebar");
  const todoContainer = document.querySelector(".todo-container");
  const projectList = document.createElement("ul");
  projectList.classList.add("project-list");

  for(let i = 0; i < projects.length; i++){
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.textContent = `# ${projects[i].projectName.toLowerCase()}`;
    link.href = "#";
    projectList.appendChild(listItem);
    listItem.appendChild(link);

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-btn");
    removeBtn.textContent = "✖";
    listItem.appendChild(removeBtn);

    removeBtn.addEventListener("click", () => {
      delete projects[i];
      listItem.remove();
      if(document.querySelectorAll("div") && document.querySelector("h1")){
        todoContainer.querySelectorAll("div").forEach(e => e.remove());
        todoContainer.querySelectorAll("h1").forEach(e => e.remove());
      }
    });

    link.addEventListener("click", () => {
      if(document.querySelectorAll("div") && document.querySelector("h1")){
        todoContainer.querySelectorAll("div").forEach(e => e.remove());
        todoContainer.querySelectorAll("h1").forEach(e => e.remove());
      }
      
      const projectTitle = document.createElement("h1");
      projectTitle.textContent = `${projects[i].projectName.toUpperCase()}`
      todoContainer.appendChild(projectTitle);

      for(let j = 0; j < projects[i].todoList.length; j++){
        if(!projects[i].todoList[j]){
          return;
        }
        else{

          const todoCard = document.createElement("div");
          todoCard.classList.add("todo-card");
          todoContainer.appendChild(todoCard);
          todoCard.dataset.index = j;
          
          const checkBox = document.createElement("INPUT");
          checkBox.setAttribute("type", "checkbox");
          todoCard.appendChild(checkBox);

          const todoTitle = document.createElement("div");
          todoCard.appendChild(todoTitle);
          todoTitle.textContent = `${projects[i].todoList[j].title}`;
  
          const todoDueDate = document.createElement("div");
          todoCard.appendChild(todoDueDate);
          todoDueDate.textContent = `Due Date: ${projects[i].todoList[j].dueDate}`;
  
          const todoPriority = document.createElement("div");
          todoCard.appendChild(todoPriority);
          todoPriority.textContent = `Priority: ${projects[i].todoList[j].priority}`;

          const editBtn = document.createElement("button");
          editBtn.classList.add("edit-btn");
          todoCard.appendChild(editBtn);
          editBtn.textContent = "Edit";
          
          const removeBtn = document.createElement("button");
          removeBtn.classList.add("remove-btn");
          removeBtn.textContent = "✖";
          todoCard.appendChild(removeBtn);
  
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