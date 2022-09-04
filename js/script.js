console.log('Hello'); // строки берем в кавычки
console.log('world');
console.log("world");
console.log('334');
console.log(334);
console.log('Hello' + 'world');
console.log('Hello' + ' world');
console.log('Hello ' + 'world');
console.log('Hello' + ' ' + 'world');
console.info('Hello');
// alert('Hello');
// alert('Hello');
// alert('Hello');

document.getElementById('out').innerHTML = 'Hello';
document.getElementById('out').innerHTML = 2019;
document.getElementById('out').innerHTML = '<b>2020</b>';

document.querySelector('.header').innerHTML = 5;
document.querySelector('#one').innerHTML = 777; // есть #
document.getElementById('one').innerHTML = 888; //нет #

let b;
let a = document.querySelector('#one');
let c;
c = document.querySelector('.header');

a.innerHTML = 9999;
c.innerHTML = 6666;

// Homework
//Task 1 Выведите в консоль ваше имя. Напоминаю - в ходе работы, консоль открыта всегда!
let name = 'Semen';
console.log(name);

//Task 2 Выведите в консоль номер месяца в котором вы родились. Изучите чем отличается вывод числа и строки
let month = 8;
console.log(month)

//Task 3 Выведите в консоль строку: 'Добро '+'пожаловать '+' на курс'
console.log('Добро' + ' ' + 'пожаловать' + ' ' + 'на курс');

