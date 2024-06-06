function validateForm() {
    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const age = document.getElementById("age").value.trim();
    const gender = document.getElementById("gender").value;
    let isValid = true;
  
    // Regular expressions for validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Helper function to set error messages
    function setError(id, message) {
      document.getElementById(id).innerText = message;
      isValid = false;
    }
  
    // Reset all error messages
    [
      "nameError",
      "emailError",
      "passwordError",
      "ageError",
      "genderError",
    ].forEach((id) => {
      document.getElementById(id).innerText = "";
    });
  
    // Name validation
    if (name === "") {
      setError("nameError", "Please enter your name");
    }
  
    // Email validation
    if (email === "") {
      setError("emailError", "Please enter your email");
    } else if (!emailPattern.test(email)) {
      setError("emailError", "Please enter a valid email address");
    }
  
    // Password validation
    if (password === "") {
      setError("passwordError", "Please enter a password");
    } else if (password.length < 6) {
      setError("passwordError", "Password must be at least 6 characters");
    }
  
    // Age validation
    if (age === "") {
      setError("ageError", "Please enter your age");
    } else if (isNaN(age) || age < 13 || age > 100) {
      setError("ageError", "Please enter a valid age (13-100)");
    }
  
    // Gender validation
    if (gender === "") {
      setError("genderError", "Please select your gender");
    }
  
    // Submit form if valid
    if (isValid) {
      document.getElementById("successMessage").innerText =
        "Form submitted successfully!";
      document.getElementById("registerForm").reset();
    } else {
      document.getElementById("successMessage").innerText = "";
    }
  }
  
  // Apply colors to gender options after the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", function () {
    const maleOption = document.getElementById("maleOption");
    const femaleOption = document.getElementById("femaleOption");
  
    if (maleOption) {
      maleOption.style.color = "blue";
    }
  
    if (femaleOption) {
      femaleOption.style.color = "red";
    }
  });