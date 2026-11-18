let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let passwordRegex = /^[a-zA-Z0-9]+$/;
let nameRegex = /^[a-zA-Zа-яА-Я0-9'`єіїЄІЇ]+$/;

function clean(formName){
    let form = document.forms[formName];
    let errors = form.getElementsByClassName("error");

    for(let i = 0; i < errors.length; i+=1){
        errors[i].innerHTML = "";
    }
    form.getElementsByClassName("result")[0].innerHTML = "";
}

function validate(){
    clean("login");
    let flag = true;

    let email = document.forms["login"]["email"].value;
    let password = document.forms["login"]["password"].value;

    if(email == ""){
        document.getElementById("loginEmailof").innerHTML = "*Введіть пошту";
        flag = false;
    }
    else if(!emailRegex.test(email)){
        document.getElementById("loginEmailof").innerHTML = "*Email введено некоректно";
        flag = false;
    }

    if(password == ""){
        document.getElementById("loginPasswof").innerHTML = "*Введіть пароль";
        flag = false;
    }
    else if(password.length < 8 || !passwordRegex.test(password)){
        document.getElementById("loginPasswof").innerHTML = "*Пароль має містити щонайменше 8 символів<br>Дозволено вводити літери та числа";
        flag = false;
    }

    if(flag){
        document.getElementById("loginResult").innerHTML = "Вхід виконано успішно, Вітаємо!";
    }

    return false;
}

function validate2(){
    clean("registr");
    let flag = true;

    let name = document.forms["registr"]["name"].value.trim();
    let email = document.forms["registr"]["email"].value;
    let password = document.forms["registr"]["password"].value;
    let password2 = document.forms["registr"]["password2"].value;
    
    if(name.length<2 || !nameRegex.test(name)){
        document.getElementById("registrNameof").innerHTML = "*Ім'я має містити щонайменше 2 символи<br>Дозволено вводити літери та числа";
        flag = false;
    }

    if(email == ""){
        document.getElementById("registrEmailof").innerHTML = "*Введіть пошту";
        flag = false;
    }
     else if(!emailRegex.test(email)){
        document.getElementById("registrEmailof").innerHTML = "*Email введено некоректно";
        flag = false;
    }

    if(password.length < 8 || !passwordRegex.test(password)){
        document.getElementById("registrPasswof").innerHTML = "*Пароль має містити щонайменше 8 символів<br>Дозволено вводити літери та числа";
        flag = false;
    }

    if(password2 != password || password2 == ""){
        document.getElementById("registrPasswof2").innerHTML = "*Паролі не збігаються";
        flag = false;
    }

    if(flag){
         document.getElementById("registrResult").innerHTML = "Дякуємо! Реєстрацію завершено";
    }
    return false;
}
