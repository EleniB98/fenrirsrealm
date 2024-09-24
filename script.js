// Log a message to the browser console
console.log("Welcome to my GitHub Pages website!");

// Adding an interaction when a button is clicked
document.addEventListener('DOMContentLoaded', function() {
    let button = document.createElement('button');
    button.innerHTML = "Click me!";
    document.body.appendChild(button);

    button.addEventListener('click', function() {
        alert('Button was clicked!');
    });
});

