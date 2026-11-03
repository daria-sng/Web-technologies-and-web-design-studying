// Перше завдання
let number;
while(true){
    number = +prompt("Введіть ціле число:", "0");
    if(Number.isInteger(number)){
        break;
    }
    alert("Увага!\r\nНекоректне введення цілого числа, будь-ласка спробуйте ще раз!");
}

if(confirm(`Підтвердження:\r\nПеревірити число ${number} на парність?`)){
    if(number % 2 == 0){
        alert(`Число ${number} є парним`);
        document.write(`<div class="info">Число ${number} є парним</div>`);
    }
    else{
        alert(`Число ${number} є непарним`);
        document.write(`<div class="info">Число ${number} є непарним</div>`);
    }
}
else{
    alert("Скасовано перевірку!");
    document.write("<div class=\"info cancel\">Скасовано перевірку!</div>");
}

// Друге завдання
let blocks = Math.floor(Math.random()*5) + 6;
let addition = "<div class=\"blocks\">";

for(let i = 1; i <= blocks; i+=1){
    addition += "<div class=\"block\"></div>";
}

document.write(addition + "</div>");

// Третє завдання
let goods = [
    [1011, "Лялька", 800, 4],
    [1012, "Плюшевий ведмедик", 450, 2],
    [1013, "Іграшкова машинка", 1100, 1],
    [1014, "Кубики", 260, 5],
    [1015, "М'яч", 380, 7]
];

let i = 0, total = 0;
let sum;
document.write("<h3>Товари дитячого магазину іграшок</h3>");
document.write("<table>");
document.write("<tr class=\"headlines\"><td>Код</td><td>Найменування</td><td>Ціна за одиницю</td><td>Кількість</td><td>Сума за товар</td></tr>");
while(i < goods.length){
    document.write("<tr>");
    for(let j = 0; j < 4; j+=1){
        document.write(`<td>${goods[i][j]}</td>`);
    }

    sum = goods[i][2]*goods[i][3];
    document.write(`<td>${sum}</td>`);
    total += sum;

    document.write("</tr>");
    i+=1;
}
document.write(`<tr><td class="total_sum" colspan="4">Загальна сума за всі товари</td><td>${total}</td></tr>`);
document.write("</table>");