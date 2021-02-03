'use strict';
let myHeading = document.querySelector('h1');
let podmena = prompt('введите подмену');
myHeading.textContent = podmena;
console.log(myHeading);

/*----------------------

+ конкатенация - склеивание объектов

инкремент ++ увеличивает на 1 если стоит префиксом, то результат сразу, если постфиксом, то результат не сразу 
__пример:
let peremennaya = 10;
let peremennaya1 = 10;
console.log(++peremennaya);
console.log(peremennaya1++);
результат: 11 и 10 соответственно
_______________________________________
декремент -- уменьшает на 1 (тоже что и инкремент только наоборот)

оператор И - &&
ИЛИ - ||
= присваевает
== не строгое сравнивание
=== сравнивание по типу данных
% - остаток от деления (5%2=1) 
! знак отрицания, меняет значение булевых данных на противоположное
!true --> false
порядок выполнения операций:
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

---------------------- */
