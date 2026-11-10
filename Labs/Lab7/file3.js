let countRecursionCalls = 0, countMemoCalls = 0;
function fibonachiRecursion(number){
    countRecursionCalls +=1;
    if(number <= 2){
        return 1;
    }
    return fibonachiRecursion(number-1) + fibonachiRecursion(number-2);
}

function newFibonachiMemo(){
    let cache = {};
    function fibonachiMemo(number){
        countMemoCalls += 1;
        if(number in cache){
            return cache[number];
        }

        if(number <= 2) {
            return cache[number] = 1;
        }

        cache[number] = fibonachiMemo(number-1) + fibonachiMemo(number-2);
        return cache[number];
    }
    return fibonachiMemo;
}

let number;
while(true){
    number = +prompt("Введіть номер числа для обчислення чисел Фібоначі\r\nПримітка: послідовність починається з 1", "1");
    if(Number.isInteger(number) && number >= 1){
        break;
    }
     alert("Увага!\r\nКоректно введіть номер числа, будь-ласка спробуйте ще раз!");
}

const fibonachiMemo = newFibonachiMemo();
alert(`Число Фібоначі №${number}: ${fibonachiRecursion(number)}\r\nКількість викликів функції (рекурсія): ${countRecursionCalls}\r\n\r\nЧисло Фібоначі №${number}: ${fibonachiMemo(number)}\r\nКількість викликів функції (мемоїзація): ${countMemoCalls}`);
