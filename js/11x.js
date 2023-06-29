const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name:'Check email',
  dueDate: '01/22/2023'
},{
  name:'Check missed calls',
  dueDate: '01/22/2023'
}];

  renderTodoList ();

function renderTodoList () {
  let todoListHTML = '';

for (let i=0; i < todoList.length; i++) {
  const todoObject = todoList[i];
  const { name, dueDate } = todoObject;
  const html = `
  <div>${name}</div>
  <div>${dueDate}</div>
  <button onclick="
    todoList.splice(${i}, 1);
    renderTodoList();
    saveToStorage();
    " class="delete-button">Delete</button>
  `;
  todoListHTML += html;
} 

  document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;


}



  function addToDo() {

  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    name,
    dueDate});
    
  inputElement.value = '';
  renderTodoList ();
  saveToStorage();  

} 

  function saveToStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }

