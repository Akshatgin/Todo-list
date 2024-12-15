const addButton = document.getElementById("add-btn");
const inputField = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

let todoItems = [];

// Function to render the list
function renderTodos() {
  todoList.innerHTML = "";
  todoItems.forEach((todo, index) => {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-item");

    const todoText = document.createElement("span");
    todoText.textContent = todo.text;
    if (todo.completed) {
      todoText.classList.add("completed");
    }
    todoDiv.appendChild(todoText);

    // Edit Button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-btn");
    editButton.addEventListener("click", () => editTodo(index));
    todoDiv.appendChild(editButton);

    // Delete Button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteTodo(index));
    todoDiv.appendChild(deleteButton);

    // Mark as Complete/Incomplete
    todoText.addEventListener("click", () => toggleComplete(index));

    todoList.appendChild(todoDiv);
  });
}

// Add a new Todo
addButton.addEventListener("click", () => {
  const todoText = inputField.value.trim();
  if (todoText) {
    todoItems.push({ text: todoText, completed: false });
    inputField.value = "";
    renderTodos();
  }
});

// Edit a Todo
function editTodo(index) {
  const newText = prompt("Edit your task", todoItems[index].text);
  if (newText) {
    todoItems[index].text = newText;
    renderTodos();
  }
}

// Delete a Todo
function deleteTodo(index) {
  todoItems.splice(index, 1);
  renderTodos();
}

// Toggle task completion
function toggleComplete(index) {
  todoItems[index].completed = !todoItems[index].completed;
  renderTodos();
}

// Initial render
renderTodos();
