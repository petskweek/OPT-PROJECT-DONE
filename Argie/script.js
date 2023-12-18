function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the password input value
    const passwordInput = document.getElementById('passwordInput').value;
    const password = "secretPassword";

    // Perform password validation (replace this with your actual validation logic)
    if (passwordInput === password) {
        // Redirect to the home page
        alert('Login Succesful')
        window.location.href = 'home.html';
    } else {
        alert('Incorrect password. Please try again.');
    }
}

