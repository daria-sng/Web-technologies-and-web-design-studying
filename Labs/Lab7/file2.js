function factorial(number){
    if(number == 0 || number == 1){
        return 1;
    }
    else{
        return number * factorial(number-1);
    }
}

let number;
while(true){
    number = +prompt("Введіть ціле невід'ємне число для обчислення факторіалу:", "0");
    if(Number.isInteger(number) && number >= 0){
        break;
    }
    alert("Увага!\r\nКоректно введіть значення числа, будь-ласка спробуйте ще раз!");
}

alert(`${number}! = ${factorial(number)}`);