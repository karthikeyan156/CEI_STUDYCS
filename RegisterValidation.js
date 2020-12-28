function validateRegisterDetails(){
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    
    let regexp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    let emailResult = regexp.test(String(email).toLowerCase());

    let passexp = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;
    let passwordResult = passexp.test(String(password));

    if( emailResult && passwordResult){
        if(password == confirmPassword){
            alert('Register sucess');
            
        }
        else{
            document.getElementById('passwordError').innerHTML = "<h4 style='color:red;'>password doesnot match with confirm password. Try Again!</h4>";
        }
    }
    else {
        document.getElementById('registerError').innerHTML = "<h4 style='color:red;'>Please enter a valid Email address or password</h4>";
    }

}