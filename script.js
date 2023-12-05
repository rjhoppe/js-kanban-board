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
        parentEle = draggedItem.closest('.list');

        if (parentEle.id === 'list1') {
          let lastNode = document.getElementById('list1-create-new');
          parentEle.insertBefore(draggedItem, lastNode);
        } else if (parentEle.id === 'list2') {
          let lastNode = document.getElementById('list2-create-new');
          parentEle.insertBefore(draggedItem, lastNode);
        } else if (parentEle.id === 'list3') {
          let lastNode = document.getElementById('list3-create-new');
          parentEle.insertBefore(draggedItem, lastNode);
        }

        // Need to add functionality where you can drop an element between another element
        // New function
        // Just gets added to the bottom of the existing list (i.e. above the create new button)

      });
    }
  }
}

dragInit();

// Function for clicking Edit icon
function editItem() {
  console.log('Clicked!')
}

function createNewItem(list) {
  const parentElement = document.getElementById(list);
  const newListItem = document.createElement('div');
  const lastNode = document.getElementById(list).lastElementChild;

  const childElement = document.createElement("span");
  childElement.classList.add('material-symbols-outlined');
  childElement.innerHTML = 'edit';
  childElement.setAttribute('onclick', "editItem()");

  newListItem.classList.add('list-item');
  newListItem.setAttribute('draggable', true);
  newListItem.innerHTML = 'New List Item';
  newListItem.appendChild(childElement);

  document.getElementById(list).appendChild(newListItem);
  parentElement.insertBefore(newListItem, lastNode);
  dragInit();

}