// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ["jazz", "blues"];
// styles.push("rock-n-roll");
// const indexElement = styles.indexOf("blues");
// if (indexElement !== -1) {
//   styles[indexElement] = "classic";
// }

// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }

// logItems(styles);

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//   const userName = prompt("Enter your name");

//   if (array.includes(userName)) {
//     alert(`Welcome, ${userName}!`);
//   } else {
//     alert("User not found");
//   }
// }

// checkLogin(logins);

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function calculateAverage(...args) {
//   let sum = 0;
//   let count = 0;

//   for (const arg of args) {
//     if (typeof arg === "number") {
//       sum += arg;
//       count += 1;
//     }
//   }

//   if (count === 0) {
//     return 0;
//   }

//   return sum / count;
// }

// console.log(calculateAverage(10, 20, 30)); // 20
// console.log(calculateAverage(5, "hello", 15)); // 10
// console.log(calculateAverage("hi", true, null)); // 0

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// function sumAdjacentNumbers(arr) {
//   const result = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     const sum = arr[i] + arr[i + 1];
//     result.push(sum);
//   }

//   return result;
// }
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// console.log(sumAdjacentNumbers(someArr));

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

function findSmallestNumber(numbers) {
  if (!Array.isArray(numbers)) {
    return "Sorry, it is not an array!";
  }

  return Math.min(...numbers);
}

const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
console.log(findSmallestNumber(numbers)); // 2
console.log(findSmallestNumber("not an array")); // Sorry, it is not an array!

// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// function findLongestWord(string) {
//   const words = string.split(" ");
//   let longestWord = "";

//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }

// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// for (const key of Object.keys(user)) {
//   console.log(`${key}: ${user[key]}`);
// }
// // console.log(user);

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// let sum = 0;
// for (const key in salaries) {
//   sum += salaries[key];
// }
// console.log(sum); // 1730
// console.log(Object.values(salaries)); // [100, 160, 1470]
// console.log(Object.keys(salaries)); // ['Mango', 'Poly', 'Ajax']

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

const calculator = {
  a: null,
  b: null,

  read(a, b) {
    this.a = a;
    this.b = b;
  },

  exist() {
    return this.a !== null && this.b !== null;
  },

  sum() {
    if (this.exist()) {
      return this.a + this.b;
    }
    return "No such properties";
  },

  mult() {
    if (this.exist()) {
      return this.a * this.b;
    }
    return "No such properties";
  },
};

calculator.read(8, 2);
console.log(calculator.sum()); // No such properties
console.log(calculator.mult()); // No such properties
