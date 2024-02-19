const form = document.getElementById('form');
const email = document.getElementById('email');
const warning = document.getElementById('warning');

function validate() {
    let pattern = /^[^ ]+@[^ ]+[a-z]{2,3}$/;
    if (email.value.match(pattern)) {
        form.classList.add('valid');
        form.classList.remove('invalid');
        warning.innerHTML="";
    } else {
        //form.classList.remove('valid');
        form.classList.add('invalid');
        form.classList.remove('valid')
        warning.innerHTML="invalid email";
        warning.style.color="red";
    }
    if (email.value =="") {
        form.classList.add('invalid');
        warning.innerHTML="Please enter an email address";
    }
}

email.addEventListener('input',validate)