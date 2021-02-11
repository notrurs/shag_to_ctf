let count_done_tasks = 0;
let done_tasks = [false, false, false, false, false, false]

Swal.fire({
    icon: 'warning',
    title: 'Очень важно!',
    text: 'Не перезагружай и не закрывай эту страницу, иначе весь прогресс сбросится.',
    confirmButtonText: 'Хорошо, не буду'
})

function check_task_1() {
    let user_input = document.getElementById("input_task1").value;
    if (user_input==='mr_robot_is_not_real'){
        if (done_tasks[0] === false){
            done_tasks[0] = true;
            count_done_tasks += 1;
            document.getElementById("block_task1").innerHTML = '<img src="images/correct_task.png">';
            complete_competition()
        }
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Ошибочка',
            text: 'Неправильно :('
        })
    }
}

function check_task_2() {
    let user_input = document.getElementById("input_task2").value;
    if (user_input==='you_are_slave_neo'){
        if (done_tasks[1] === false){
            done_tasks[1] = true;
            count_done_tasks += 1;
            document.getElementById("block_task2").innerHTML = '<img src="images/correct_task.png">';
            complete_competition()
        }
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Ошибочка',
            text: 'Неправильно :('
        })
    }
}

function check_task_3() {
    let user_input = document.getElementById("input_task3").value;
    if (user_input==='y0u_4r3_1n'){
        if (done_tasks[2] === false){
            done_tasks[2] = true;
            count_done_tasks += 1;
            document.getElementById("block_task3").innerHTML = '<img src="images/correct_task.png">';
            complete_competition()
        }
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Ошибочка',
            text: 'Неправильно :('
        })
    }
}

function check_task_4() {
    let user_input = document.getElementById("input_task4").value;
    if (user_input==='hacker'){
        if (done_tasks[3] === false){
            done_tasks[3] = true;
            count_done_tasks += 1;
            document.getElementById("block_task4").innerHTML = '<img src="images/correct_task.png">';
            complete_competition()
        }
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Ошибочка',
            text: 'Неправильно :('
        })
    }
}

function check_task_5() {
    let user_input = document.getElementById("input_task5").value;
    if (user_input==='r0m4_pr1v3t'){
        if (done_tasks[4] === false){
            done_tasks[4] = true;
            count_done_tasks += 1;
            document.getElementById("block_task5").innerHTML = '<img src="images/correct_task.png">';
            complete_competition()
        }
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Ошибочка',
            text: 'Неправильно :('
        })
    }
}

function check_task_6() {
    let user_input = document.getElementById("input_task6").value;
    if (user_input==='4v3_c3s4r'){
        if (done_tasks[5] === false){
            done_tasks[5] = true;
            count_done_tasks += 1;
            document.getElementById("block_task6").innerHTML = '<img src="images/correct_task.png">';
            complete_competition()
        }
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Ошибочка',
            text: 'Неправильно :('
        })
    }
}

function complete_competition(){
    if (count_done_tasks >= 6){
        window.location.replace('done_competition.html');
    }
}

task1.addEventListener("click", check_task_1);
task2.addEventListener("click", check_task_2);
task3.addEventListener("click", check_task_3);
task4.addEventListener("click", check_task_4);
task5.addEventListener("click", check_task_5);
task6.addEventListener("click", check_task_6);
