document.querySelectorAll('.custom-button').forEach(button => {
    button.addEventListener('click', function() {
        alert(`You clicked ${this.parentNode.querySelector('.title').textContent}`);
    });
});