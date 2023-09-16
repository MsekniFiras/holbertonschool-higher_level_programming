const headerElement = document.querySelector('header');

toggle_header.addEventListener('click', () => {
    headerElement.classList.toggle('red');
    headerElement.classList.toggle('green');
});
