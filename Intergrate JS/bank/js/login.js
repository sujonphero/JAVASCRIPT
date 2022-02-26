// get the login button.
document.getElementById('login-button').addEventListener('click',function(){
    console.log('hello bro')

    // get the password input.
    const passwordInput = document.getElementById('password-input');
    const userPassword = passwordInput.value;
    // console.log(userPasword);

    // get the email input.
    const emailInput = document.getElementById('email-input');
    const userEmail = emailInput.value;
    // console.log(userEmail);

    if (userEmail == 'sujon@gmail.com' && userPassword == 'sujon787') {
        window.location.href = 'banking.html';
    }
});