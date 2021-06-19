const form = document.getElementById('form');
const username = document.getElementById('username');
const email= document.getElementById('email');
const password = document.getElementById('password');
const password2= document.getElementById('password2');
// Functions
// Functions to show error
function showError(input,message){ 
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small')
    small.innerText = message;

}

// Function to show success
function showSuccess(input)  {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    
}


// this is an event listenr for the form 
form.addEventListener('submit',function(e) {
    e.preventDefault();

    if (username.value === '' ){
        showError(username, 'Username is required')
    } else {
        showSuccess(username);
    }
    if (email.value === '' ){
        showError(email, 'Email is required')
    } else {
        showSuccess(email);
    }
    if (password.value === '' ){
        showError(password, 'password is required')
    } else {
        showSuccess(password);
    }
    if (password2.value === '' ){
        showError(password2, 'password2 is required')
    } else {
        showSuccess(password2);
    }
})