alert("Завдання 2. Вводити в діалогове вікно числа до тих пір, поки не буде введений будь-який символ, після цього вивести у вікно всі числа через кому, порахувати їх суму та кількість парних та непарних чисел.");

let i =0;
let arr = [];
let isSymb = true;

while(isSymb){
    let symb = prompt("Введіть число, щоб закінчити, введіть будь-який інший символ");
    if(!isNaN(symb)){
        arr[i] = symb;
        i++;
    }
    else{
        isSymb = false;
    }
}

let even = 0;
let odd = 0;
let str = '';
let sum = +0;
for(let j=0; j< arr.length; j++)
{
    if(arr[j] % 2 == 0)
    {
        even++;
    }
    else{
        odd++;
    }
    sum += +arr[j];
    str += arr[j] + ',';
}
alert(str);
alert("Сума чисел: " + sum);
alert("Кількість парних чисел: " + even);
alert("Кількість непарних чисел: " + odd);