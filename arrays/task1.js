alert("Завдання 1. Ввести речення в діалогове вікно. Підрахувати кількість слів.");
let str = prompt("Введіть речення:");

let counter = 0;

let word = str.split(' ')

for (let a of word) {
    counter++;
}
alert(counter);


