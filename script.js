let draggedItem = null;

function dragInit() {

  const listItems = document.querySelectorAll('.list-item');
  const lists = document.querySelectorAll('.list');

  for (let i = 0; i < listItems.length; i++) {
    const item = listItems[i];

    item.addEventListener('dragstart', function(e) {
      draggedItem = item;
      setTimeout(function() {
        item.style.display = 'none';
      }, 0);
    });

    item.addEventListener('dragend', function(e) {
      setTimeout(function() {
        draggedItem.style.display = 'block'; 
        draggedItem = null;
      }, 0);
    });

    for (let j = 0; j < lists.length; j++) {
      const list = lists[j];

      list.addEventListener('dragover', function(e) {
        e.preventDefault();
      });

      list.addEventListener('dragenter', function(e) {
        e.preventDefault();
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
      });

      list.addEventListener('dragleave', function(e) {
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'; 
      });

      list.addEventListener('drop', function(e) {      
        this.append(draggedItem);
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';

        // Need to add functionality where you can drop an element between another element
        // New function

      });
    }
  }
}

dragInit();

// Function for clicking Edit icon
function editItem() {
  console.log('Clicked!')
}

// Function for inserting an element into a list
function dragInsert() {
}

function createNewItem(list) {
  const parentElement = document.getElementById(list)
  const newListItem = document.createElement('div');
  const lastNode = document.getElementById(list).lastElementChild;

  const childElement = document.createElement("span")
  childElement.classList.add('material-symbols-outlined')
  childElement.innerHTML = 'edit'

  newListItem.classList.add('list-item');
  newListItem.setAttribute('draggable', true);
  newListItem.innerHTML = 'New List Item';
  newListItem.appendChild(childElement);

  document.getElementById(list).appendChild(newListItem);
  parentElement.insertBefore(newListItem, lastNode);
  dragInit();

}