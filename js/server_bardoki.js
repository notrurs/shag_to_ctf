let key = getRandomInt(100000,1000000);
let rand_question = getRandomInt(0, 4);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function login(){
    let login = document.getElementById("login").value;
    let password = document.getElementById("password").value;

    if (login === 'admin' && password == key){
        window.location.replace('server_bardoki_admin_panel.html');
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Упс...',
            text: 'Неправильный логин или пароль!',
            footer: '<a href="https://vk.com/bardoki" target="_blank">Администратор</a>'
        })
    }
}

async function forgot_password(){
    let questions = ['Дата рождения любимого питомца?','Любимое блюдо?','Любимое место отдыха?','Город рождения?','Кем был в школе?'];
    let correct_answers = ['10.08.2020','салями','мальдивы','лондон','программист'];
    let question = questions[rand_question]
    let correct_answer = correct_answers[rand_question]
    const { value: user_answer } = await Swal.fire({
        title: 'Восстановление доступа',
        input: 'text',
        inputLabel: question,
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
                return 'Нужно хоть что-то ввести!'
            }
        }
    })

    if (user_answer.toLowerCase() === correct_answer) {
        Swal.fire(`Пароль от админа: ${key}`)
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Вспоминай',
            text: 'Неправильный ответ!'
        })
    }
}

login_button.addEventListener("click", login);
forgot.addEventListener("click", forgot_password)
document.addEventListener("keypress", function (e) {
    if (e.key === 'Enter'){
        login();
    }
})
