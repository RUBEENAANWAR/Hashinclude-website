document.querySelectorAll('.start-btn').forEach(button => {
    button.addEventListener('click', function() {
        alert(`You clicked ${this.parentNode.querySelector('.title').textContent}`);
    });
});