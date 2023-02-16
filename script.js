const passwordFields = document.querySelectorAll("input[type='password']");
const pwField = document.getElementById('password');
const cnField = document.getElementById('confirm');
const warningMessage = document.querySelector('p.password-warning');

console.log(warningMessage);


function comparePasswords() {
    pw = pwField.value;
    cf = cnField.value;

    return pw == cf ? true : false;
}

passwordFields.forEach(element => {
    element.addEventListener('keyup', function(e) {
    
        if(comparePasswords()) {
            passwordFields.forEach(element => {
                element.classList.remove('invalid');
                element.classList.add('valid');
                warningMessage.classList.add('hidden');
            });
        }  else {
            passwordFields.forEach(element => {
                element.classList.remove('valid');
                element.classList.add('invalid');
                warningMessage.classList.remove('hidden');
            });
        }
        
           
    });
});
