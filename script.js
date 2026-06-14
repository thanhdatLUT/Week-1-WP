const button = document.getElementById('my-button');
const title = document.getElementById('title');

button.addEventListener("click", () => {
    console.log("hello world");
    title.textContent = "Moi maailma";
});

const addButton = document.getElementById('add-data');
const list = document.getElementById('my-list');
const textInput = document.getElementById('my-text');
addButton.addEventListener("click", () => {
    const li = document.createElement('li');
    li.textContent = textInput.value;
    list.appendChild(li);
});