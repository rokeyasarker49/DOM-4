document.getElementById('loginBtn').addEventListener('click', function(){

        let inputEmail = document.getElementById('inputEmail');
        let inputPassword = document.getElementById('inputPassword');
        let outputError = document.getElementById('error');
        let outputErrors = document.getElementById('errors');
        let inputEmailValue = inputEmail.value;
        let inputPasswordValue = inputPassword.value;
    
    
    
        if(inputEmailValue == 'rokeya@gmail.com' && inputPasswordValue == 'rokeya'){
    
            window.location.href ='dashboard.html';
    
        }else if(inputEmailValue == '' && inputPasswordValue == ''){
    
            inputEmail.style.border = '2px solid red';
            inputPassword.style.border = '2px solid red';
            outputError.innerText = 'Email is required';
            outputErrors.innerText = "Password is required";
    
    
        }else if(inputEmailValue == 'rokeya@gmail.com' && inputPasswordValue == ''){
    
            inputPassword.style.border = '2px solid red';
            outputErrors.innerText = 'Password is required';
    
    
        }else if(inputEmailValue == '' && inputPasswordValue == 'admin'){
    
            inputEmail.style.border = '2px solid red';
            outputError.innerText = 'Email is required';
    
        }else{
    
            inputEmail.style.border = '2px solid red';
            inputPassword.style.border = '2px solid red';
            outputError.innerText = 'Provide a valid Email address';
            outputErrors.innerText = "Provide a valid Password";
    
        }
    
        
        
    
    });