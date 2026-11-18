function clean(){
    let errors = document.getElementsByClassName("error");
    for(let i = 0; i<errors.length; i+=1){
        errors[i].innerHTML = "";
    }
    document.getElementById("result").innerHTML = "";
}

function validate(){
    clean();
    let flag = true;

    let name = document.forms["form"]["name"].value;
    let phone = document.forms["form"]["phone"].value;
    let email = document.forms["form"]["email"].value;
    let kayak = document.forms["form"]["kayak"].value;
    let date = document.forms["form"]["date"].value;
    let days = document.forms["form"]["days"].value;

    if(name.length == 0){
        document.getElementById("nameof").innerHTML = "*Поле обов'язкове для заповнення";
        flag = false;
    }

    if(phone.length != 13 || phone.indexOf("+380") != 0 || isNaN(phone.substring(1))){
        document.getElementById("phoneof").innerHTML = "*Введіть повний номер у правильному форматі +380...";
        flag = false;
    }

    let at = email.indexOf("@");
    let dot = email.lastIndexOf(".");
    if(at < 1 || dot < at+2 || dot >= email.length - 1){
        document.getElementById("emailof").innerHTML = "*Email введено некоректно";
        flag = false;
    }

    if(kayak == ""){
        document.getElementById("kayakof").innerHTML = "*Оберіть тип каяка";
        flag = false;
    }

    if(date == ""){
        document.getElementById("dateof").innerHTML = "*Оберіть дату оренди";
        flag = false;
    }

    if(days == "" || days < 1 || days > 7){
        document.getElementById("daysof").innerHTML = "*Введіть число від 1 до 7";
        flag = false;
    }

    if(flag){
        document.getElementById("result").innerHTML = `Дякуємо, ${name}! Ваше оформлення прийнято`;
    }
    return false;
}