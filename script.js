const axios = require("axios").default;
const apiURL = "https://jsonplaceholder.typicode.com/posts";
const input = document.createElement("input");
input.setAttribute("data-test", "todo-input");
input.setAttribute("name", "input");
input.setAttribute("type", "text");
document.body.appendChild(input);
const button = document.createElement("button");
button.setAttribute("data-test", "todo-add");
button.setAttribute("type", "submit");
document.body.appendChild(button);

input.value = "hello";

const addTodoElem = async () => {
  try {
    const inputValue = input.value;
    const postTodo = await axios.post(apiURL, { value: inputValue });
    console.log("Dodano nową wartość: ", postTodo.data);
  } catch {
    const label = document.createElement("label");
    label.setAttribute("for", "input");
    label.setAttribute("data-test", "todo-input-label");
    label.value = "Request error";
    label.appendChild(input);
    document.body.appendChild(label);
    console.error("Wystąpił błąd podczas dodawania nowej wartości:", error);
  }
};
button.addEventListener("click", addTodoElem);
