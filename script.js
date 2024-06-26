document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById('navbar');

    // Fetch the navbar.html content and insert it into the #navbar div
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            navbar.innerHTML = data;

            // Add scroll event listener after loading navbar content
            const navbarElement = document.querySelector('.navbar');
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    navbarElement.classList.add('scrolled');
                } else {
                    navbarElement.classList.remove('scrolled');
                }
            });
        });
});
