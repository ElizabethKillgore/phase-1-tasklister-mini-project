document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
     fixMyTodos(e.target['new-task-description'].value)
  })
});


function fixMyTodos(todos) {
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.textContent = 'x'
  li.textContent = todos
  li.append(btn)
  document.getElementById('tasks').append(li)
  btn.addEventListener('click', () => li.remove())
}







//need to prevent default behaviour of submit button with
//event.preventDefault()