function validateLoginDetails(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let regexp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    let emailResult = regexp.test(String(username).toLowerCase());

    let passexp =  /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;
    let passwordResult = passexp.test(String(password));
    
    if(emailResult && passwordResult){
        alert("sucess")
    }
    else{
        document.getElementById('emailError').innerHTML = "<h4 style='color:red;'>Please enter a valid Email address or password</h4>";      
    }
}
