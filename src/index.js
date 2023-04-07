document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const tasks = document.getElementById('tasks');
  const submitBtn = document.getElementsByTagName('input')[1]
  const form = document.getElementsByTagName('input')[0]
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault()

    //Input variable
    const addedValue = document.getElementById('new-task-description').value

    //Creating element p and remove button
    var p = document.createElement('p')
    p.textContent = `${addedValue}`
    const removeBtn = document.createElement('button')
    removeBtn.textContent = 'x'
    removeBtn.style.cursor = 'pointer'

    //Appending button to p
    p.appendChild(removeBtn)
    //Appending p to tasks
    tasks.appendChild(p)
    
    //Making removeBtn be able to remove p
    removeBtn.addEventListener('click', removeParent)
    })
    function removeParent(e) {
      e.target.parentNode.remove()
    }
});
