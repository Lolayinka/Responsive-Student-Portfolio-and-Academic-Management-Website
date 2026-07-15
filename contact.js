function validateForm(){
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();
    if (name === "" || email === "" || phone === "" || message === "") {
        alert("Please fill in all fields.");
        return false;
    }
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    let phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(phone)) {
        alert("Phone number must contain only digits.");
        return false;
    }
    alert("Form submitted successfully!");
    return true;
}