const form = document.getElementById("loginForm");

const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let isValid = true;

    clearErrors();

    // Required Validation
    if(email.value.trim() === ""){
        showError(email, "Email is required");
        isValid = false;
    }

    if(password.value.trim() === ""){
        showError(password, "Password is required");
        isValid = false;
    }

    // Email Validation
    if(email.value.trim() !== ""){
        if(!validateEmail(email.value.trim())){
            showError(email, "Enter a valid email address");
            isValid = false;
        }
    }

    // Password Validation
    if(password.value.trim() !== ""){
        if(!validatePassword(password.value.trim())){
            showError(
                password,
                "Password must contain 8+ chars, uppercase, lowercase, number and special character"
            );
            isValid = false;
        }
    }

    if(isValid){
        alert("Form Submitted Successfully!");
        form.reset();
    }

});

function showError(input, message){

    input.classList.add("error-input");

    const errorElement =
        input.parentElement.querySelector(".error");

    errorElement.textContent = message;
}

function clearErrors(){

    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        input.classList.remove("error-input");

        const errorElement =
            input.parentElement.querySelector(".error");

        errorElement.textContent = "";
    });
}

function validateEmail(email){

    const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);
}

function validatePassword(password){

    const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    return regex.test(password);
}
