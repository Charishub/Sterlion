

let myName = document.getElementById("yourName");
let countryCode = document.getElementById("code");
let phoneNumber = document.getElementById("phoneNum");
let emailAddress = document.getElementById("email");
let password = document.getElementById("pass");
let confirmPassword = document.getElementById("confirmPass");

const passwordButton = document.getElementById("showpassword");
let button = document.getElementById("submit");


passwordButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (password.type === "password" && confirmPassword.type === "password") {
        password.type = "text";
        confirmPassword.type = "text";
        setTimeout (() => {
            passwordButton.textContent = " Hide Password";
        }, 50)
    }
    else {
        password.type = "password";
        confirmPassword.type = "password";
        setTimeout(() => {
            passwordButton.textContent = "Show Password";
        }, 50)
    }
});

button.addEventListener("click", (e) => {
    e.preventDefault()
    if (myName.value == "") {
        myName.style.outline = "none"
        myName.style.border = "1px solid red"
    }
    else {
        myName.style.border = "1px solid black"
    }
    
    if (phoneNumber.value == "") {
        myName.style.outline = "none"
        phoneNumber.style.border = "1px solid red"
    }
    else if (phoneNumber.value.length > 11 || phoneNumber.value < 11){
        phoneNumber.style.outline = "none"
        phoneNumber.style.border = "1px solid red"
        phoneNumber.style.placeholder = "Invalid phone number"
    }
    else {
        phoneNumber.style.border= "1px solid black"
    }
    if (emailAddress.value == "") {
        myName.style.outline = "none"
        emailAddress.style.border = "1px solid red"
    }
    else {
        emailAddress.style.border = "1px solid black"
    }


    if (password.value == "") {
        password.style.outline = "none"
        password. style.border = "1px solid red"
    }
    else {
        password.style.border = "1px solid black"
    }
    if (confirmPassword.value == "") {
        confirmPassword.style.outline = "none"
        confirmPassword.style.border = "1px solid red"
    }
    else {
        confirmPassword.style.border = "1px solid black"
    }

    if (password.value === confirmPassword.value) {
        password.style.border = "1px solid green"
        confirmPassword.style.border = "1px solid green"
    }
    else{
        confirmPassword.style.border = "none"
    }

     window.location.href="./Assets/pages/home.html"
})



