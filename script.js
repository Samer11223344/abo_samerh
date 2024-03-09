function toggleMenu() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");

    var navbar = document.querySelector("nav");
    navbar.classList.toggle("dark-mode");

    var buyButtons = document.querySelectorAll(".buy-button");
    buyButtons.forEach(button => {
        button.classList.toggle("dark-mode");
    });
}
