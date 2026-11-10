function operation(parameters){
    let manipulation; 
    let result = 0;
    if(parameters.length % 2 == 0){
        manipulation = "додавання";
        for(let i = 0; i < parameters.length; i+=1){
            result += parameters[i];
        }
    }
    else{
        manipulation = "віднімання";
        result = parameters[parameters.length-1];
         for(let j = parameters.length-2; j >= 0; j-=1){
            result -=parameters[j];
        }
    }

    return `Результат ${manipulation} чисел: ${result}`;
}

let parameters = [];
let entry, number;

while(true){
    entry = prompt("Введіть будь-яке число для додавання чи віднімання\r\n\r\nПримітки:\r\nДодавання - парна кількість чисел\r\nВіднімання - непарна кількість чисел\r\nСимвол * для завершення введення ");
    if(entry == "*"){
        break;
    }

    if(entry == null || entry === ""){
        alert("Увага!\r\nБудь-ласка введіть число або символ * для виходу!");
        continue;
    }

    number = +entry.replace(",", ".");
    if(isNaN(number)){
        alert("Увага!\r\nНекоректне введення числа, будь-ласка спробуйте ще раз!");
        continue;
    }

    parameters.push(number);
}

if(parameters.length >= 2){
    alert(`Введені числа: ${parameters.join(", ")}\r\n${operation(parameters)}`);
}
else{
    alert("Увага!\r\nВведено недостаню кількість чисел для виконання маніпуляцій Необхідно ввести мінімум два числа\r\n\r\nПерезавантажте сторінку для повторної спроби введення!");
}