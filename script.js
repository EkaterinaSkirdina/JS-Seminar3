// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

function getCube(num) {
    return num**3;
}
console.log(getCube(2) + getCube(3));

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

let userInput = Number(prompt("Введите число"));
isNaN(userInput) ? console.log("значение задано неверно") : afterTaxes(userInput);

function afterTaxes(salary) {
    console.log(`Размер заработной платы за вычетом налогов равен ${salary*0.87}`)
}


// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

let num1 = prompt("Введите 1е число");
let num2 = prompt("Введите 2е число");
let num3 = prompt("Введите 3е число");

const getMax = (param1, param2, param3) => Math.max(param1, param2, param3);
console.log(getMax(num1, num2, num3));

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

const sum = (num1, num2) => num1 + num2;
const diff = (num1, num2) => (num1 > num2) ? num1 - num2 : num2 - num1;
const mult = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;

console.log(sum(2, 6));
console.log(diff(2, 2));
console.log(diff(25, 2));
console.log(diff(2, 20));
console.log(mult(2, 6));
console.log(div(2, 6));