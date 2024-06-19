const apiURL = "https://jsonplaceholder.typicode.com/posts";
const input = document.createElement("input");
input.setAttribute("data-test", "todo-input");
input.setAttribute("name", "input");
input.setAttribute("type", "text");
input.id = "input";
document.body.appendChild(input);
const label = document.createElement("label");
label.setAttribute("for", "input");
label.setAttribute("data-test", "todo-input-label");
document.body.appendChild(label);
const button = document.createElement("button");
button.setAttribute("data-test", "todo-add");
button.setAttribute("type", "submit");
button.innerText = "Wyślij";
document.body.appendChild(button);

input.value = "hello";

const addTodoElem = async () => {
  try {
    if (label.innerText === "Request error") {
      label.innerText = "";
    }
    const inputValue = input.value;
    const postTodo = await axios.post(apiURL, { value: inputValue });
    console.log("Dodano nową wartość: ", postTodo.data);
  } catch (error) {
    label.innerText = "Request error";
    console.error("Wystąpił błąd podczas dodawania nowej wartości:", error);
  }
};
button.addEventListener("click", addTodoElem);
