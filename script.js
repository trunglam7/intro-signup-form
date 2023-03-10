const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailRegex = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$', 'g');

firstName.addEventListener("click", () => {
    const errorMessage = firstName.parentElement.nextElementSibling;
    const errorIcon = firstName.nextElementSibling;
    firstName.style.borderColor = "hsl(249, 10%, 26%)";
    errorMessage.style.display = "none";
    errorIcon.style.display = "none";
})

lastName.addEventListener("click", () => {
    const errorMessage = lastName.parentElement.nextElementSibling;
    const errorIcon = lastName.nextElementSibling;
    lastName.style.borderColor = "hsl(249, 10%, 26%)";
    errorMessage.style.display = "none";
    errorIcon.style.display = "none";
})

email.addEventListener("click", () => {
    const errorMessage = email.parentElement.nextElementSibling;
    const errorIcon = email.nextElementSibling;
    email.style.borderColor = "hsl(249, 10%, 26%)";
    errorMessage.style.display = "none";
    errorIcon.style.display = "none";
})

password.addEventListener("click", () => {
    const errorMessage = password.parentElement.nextElementSibling;
    const errorIcon = password.nextElementSibling;
    password.style.borderColor = "hsl(249, 10%, 26%)";
    errorMessage.style.display = "none";
    errorIcon.style.display = "none";
})

function validateForm(){
    let validate = true;
    const form = document.getElementById("sign-up-form");
    

    if(firstName.value == ""){
        const errorMessage = firstName.parentElement.nextElementSibling;
        const errorIcon = firstName.nextElementSibling;
        errorMessage.style.display = "block";
        errorIcon.style.display = "block";
        firstName.style.borderColor = "hsl(0, 100%, 74%)";
        validate = false;
    }

    if(lastName.value == ""){
        const errorMessage = lastName.parentElement.nextElementSibling;
        const errorIcon = lastName.nextElementSibling;
        errorMessage.style.display = "block";
        errorIcon.style.display = "block";
        lastName.style.borderColor = "hsl(0, 100%, 74%)";
        validate = false;
    }

    if(!emailRegex.exec(email.value)){
        const errorMessage = email.parentElement.nextElementSibling;
        const errorIcon = email.nextElementSibling;
        errorMessage.style.display = "block";
        errorIcon.style.display = "block";
        email.style.borderColor = "hsl(0, 100%, 74%)";
        validate = false;
    }

    if(password.value == ""){
        const errorMessage = password.parentElement.nextElementSibling;
        const errorIcon = password.nextElementSibling;
        errorMessage.style.display = "block";
        errorIcon.style.display = "block";
        password.style.borderColor = "hsl(0, 100%, 74%)";
        validate = false;
    }

    if(validate) {
        form.submit();
    }
    else{
        return false;
    }
}