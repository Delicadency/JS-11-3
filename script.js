const axios = require("axios").default;
const apiURL = "https://jsonplaceholder.typicode.com/posts";
const input = document.createElement("input");
input.setAttribute("data-test", "todo-input");
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
    console.error("Wystąpił błąd podczas dodawania nowej wartości:", error);
  }
};
button.addEventListener("click", addTodoElem);
