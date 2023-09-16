document.getElementById('add_item').addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = 'Item';

    const myList = document.querySelector('.my_list');
    myList.appendChild(newItem);
});
