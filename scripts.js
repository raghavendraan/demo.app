// scripts.js

// Function to update the active state of navigation links
function updateActiveNav() {
    // Get all 'a' elements within the navigation
    var navLinks = document.querySelectorAll('.main-nav a, .site-navigation a');

    // Remove the 'active' class from all navigation links
    navLinks.forEach(function(link) {
        link.classList.remove('active');
    });

    // Add the 'active' class to the current page's navigation link
    var currentPage = window.location.pathname.split('/').pop();
    navLinks.forEach(function(link) {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Call the updateActiveNav function when the window loads
window.onload = updateActiveNav;

// Mock function for event registration
function registerForEvent() {
    // Select the registration button
    var registerBtn = document.querySelector('.registration-cta .btn-primary');

    // Add click event listener to the registration button
    if (registerBtn) {
        registerBtn.addEventListener('click', function() {
            alert('Thank you for registering! We will send you more information soon.');
        });
    }
}

// Call the registerForEvent function when the window loads
window.onload = function() {
    updateActiveNav();
    registerForEvent();
};
