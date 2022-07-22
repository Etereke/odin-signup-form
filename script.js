const password = document.querySelector('#password1');
const passwordRepeat = document.querySelector('#password2');
const pwRow = document.querySelector('.pw-row');
password.addEventListener('focusout', checkPasswordEquality);
passwordRepeat.addEventListener('focusout', checkPasswordEquality);

function checkPasswordEquality(e){
    
    if(!password.value && !passwordRepeat.value){
        pwRow.classList.remove("error");
        pwRow.classList.remove("correct");
        
    }
    else if(password.value !== passwordRepeat.value){
        pwRow.classList.add("error");
        pwRow.classList.remove("correct");
    }
    else{
        pwRow.classList.remove("error");
        pwRow.classList.add("correct");
    }
}