const passwordContainer = document.querySelectorAll('.password-container');
const passwordMessageContainer = document.querySelector('.password-message');

function checkPassword() {
    let password = document.querySelector('#password').value;
    let password2 = document.querySelector('#password2').value;

    if(password == password2) {
        passwordContainer.forEach(item => {
            item.classList.remove('error');
            passwordMessageContainer.textContent = '';
        });
    }
    else {
        passwordContainer.forEach(item => {
            item.classList.add('error');
        });
        passwordMessageContainer.textContent = '*Passwords don\'t match';
        return false;
    }
}

const buttonSubmit = document.querySelector('#submit-button');

buttonSubmit.addEventListener('click', checkPassword);