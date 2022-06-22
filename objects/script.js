alert('Завдання. Створити об’єкт, який містить інформацію про назву товару, ціну та кількість. Створити метод, який підраховує вартість. Реалізувати фабричну функцію для створення об’єкта.')
function createProduct(name, price, amount,){
    return {
        name,
        price,
        amount,
        info: function(){
            alert(`Назва товару: ${this.name} \nЦіна: ${this.price} \nКількість: ${this.amount}`)
        },
        //let sum = 0, //parseInt,
        CalculateCost: function()
        {
            //let sum = 0;
            //sum = amount * price;
           alert(`Повна ціна:${this.amount * this.price}`)
        },
    }
}

let person1 = createProduct("Pepsi 2l", "35", "20");
let person2 = createProduct("Chivas Regal 1l", "1279", "9");

person1.info();
person1.CalculateCost();
person2.info();
person2.CalculateCost();
