var inputElement = document.querySelector('input[text]');
var ulElement = document.querySelector('ul')

ulElement.onmousedown = function(e) {
    e.preventDefault();
}

ulElement.onclick = function(e) {
    console.log(e.target);
}