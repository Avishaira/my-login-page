document.addEventListener("DOMContentLoaded", function() {
    const navbarPlaceholder = document.getElementById("navbar-placeholder");
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            navbarPlaceholder.innerHTML = data;
        });
});
