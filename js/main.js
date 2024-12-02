document.addEventListener('DOMContentLoaded', function() {
    // Add any general JavaScript functionality here
    console.log('Main JS loaded');

    // Example: Simple login validation
    const loginForm = document.querySelector('form[action="balance.html"]');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === 'user' && password === 'password') {
                // Allow form submission
            } else {
                event.preventDefault();
                alert('Invalid username or password');
            }
        });
    }
});