function login(){
    let login = document.getElementById("login").value;
    let password = document.getElementById("password").value;

    if (login === 'admin' && password === '12345'){
        document.getElementById("login_form").innerHTML = '';
        document.getElementById("personal_area").innerHTML = '<p>flag{y0u_4r3_1n}</p>';
    }
    else {
        document.getElementById("login_response").innerHTML = 'Неправильный логин или пароль!';
    }
}

login_button.addEventListener("click", login);
document.addEventListener("keypress", function (e) {
    if (e.key === 'Enter'){
        login();
    }
})
