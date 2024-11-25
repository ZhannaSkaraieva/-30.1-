"use strict";


console.log('#11. JavaScript homework example file')
console.log('Завдання #1. ....................................');
/*
 *
 * Написати функцію, яка приймає рядок як вхідний параметр і перевіряє, чи є цей рядок валідною електронною адресою за допомогою регулярного виразу.
 * Функція повертає true, якщо електронна адреса валідна, і false в іншому випадку.
 *
 */

function isValidEmail(email) {
  const Expression = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return Expression.test(email);
}
console.log(isValidEmail('example@example.com')) // Повинно вивести: true
console.log(isValidEmail('invalid-email'))       // Повинно вивести: false

console.log('Завдання #2. ....................................');
/*
 *
 * Написати функцію, яка приймає рядок як вхідний параметр і перевіряє, чи є цей рядок валідним URL веб-сайту за допомогою регулярного виразу.
 * Функція повертає true, якщо URL валідний, і false в іншому випадку.
 *
 */

function isValidUrl(url) {
  const Expression2 = /^((ftp|http|https):\/\/)?(www\.)?[A-Za-zА-Яа-я0-9]*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?$/;
  return Expression2.test(url);
}
//^ -Метасимволы позиционирования, в начале строки
//$- в конце строки.

//ПРОТОКОЛ

// (ftp|http|https) - группировочные скобки позволяюи сохранять данные для дальнейшего использоания в выражении.
//также в выражении используется условие "или"
// : соответствует :
// \/\/  такое написание экранирует / и ищет его
// ? соответсвует 0 или 1 повтору предыдущей комбинации, так же означает что группа символов может быть или не быть.

//ДОМЕН
//(www\.)?[A-Za-zА-Яа-я0-9]*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}
//[A-Za-zА-Яа-я0-9] задаёт условие, при котором шаблон должен выполняться при любом совпадении символов заключенных в квадратные скобки
// используются буквы, цифры, символы "от - до"
//{1} ищет что предыдущая группа долна встречаться только 1 раз

//ПУТЬ
//(\/([\w#!:.?+=&%@!\-\/])*)
//[\w#!:.?+=&%@!\-\/] задаёт условие, при котором шаблон должен выполняться при любом совпадении символов заключенных в квадратные скобки
//*  Ноль и большее количество раз



console.log(isValidUrl('https://www.example.com')) // Повинно вивести: true
console.log(isValidUrl('invalid-url'))             // Повинно вивести: false

// Експорт функції для використання та тестування
//export { isValidEmail, isValidUrl }