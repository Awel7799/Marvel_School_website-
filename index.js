// Select the form and inputs
const form = document.getElementById('register');
const nameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const gradeInput = document.getElementById('grade');
const infoInput = document.getElementById('otherInfo');

// Error spans
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const gradeError = document.getElementById('gradeError');
const infoError = document.getElementById('infoError');

// Function to validate inputs
function validateForm() {
    let isValid = true;

    // Name validation
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = 'Invalid email address.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Grade validation
    if (gradeInput.value.trim() === '') {
        gradeError.textContent = 'Grade is required.';
        isValid = false;
    } else {
        gradeError.textContent = '';
    }

    // Other info validation
    if (infoInput.value.trim() === '') {
        infoError.textContent = 'Additional information is required.';
        isValid = false;
    } else {
        infoError.textContent = '';
    }

    return isValid;
}

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    if (validateForm()) {
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'alert alert-success';
        successMessage.textContent = 'Form submitted successfully!';
        form.appendChild(successMessage);

        // Optionally, clear the form inputs
        form.reset();

        // Remove the success message after a few seconds
        setTimeout(() => {
            successMessage.remove();
        }, 3000);
    }
});

// Change the color of the submit button
const submitBtn = document.getElementById('submitBtn');
submitBtn.style.backgroundColor = 'red';