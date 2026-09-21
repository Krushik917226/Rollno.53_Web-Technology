alert("Welcome to North-Korea Spy Servilence");
let name= prompt("Enter name")
alert(`Welcome to ${name}`);

function validateForm(event) {
    if (event) {
        event.preventDefault();
    }
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let age = document.getElementById("age").value;
    let password = document.getElementById("password").value;

    // Name validation
    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Phone validation (10 digits)
    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Phone number must be 10 digits.");
        return false;
    }

    // Age validation
    if (age < 18 || age > 100) {
        alert("Age must be between 18 and 100.");
        return false;
    }

    // Password validation
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    alert("Student registration successful!");
    return true;
}