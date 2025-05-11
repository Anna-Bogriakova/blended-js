// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const Numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = Numbers.map((x) => x * x);
// console.log(squaredNumbers); // [1, 4, 9, 16, 25]

// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const newdata = data.flatMap((item) => item.values);
// console.log(newdata); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];
// const hasUnder20 = people.some((person) => person.age < 20);
// console.log(hasUnder20); // true

// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbersArrow = [2, 4, 6, 8, 10];
// const evenNumbers = numbersArrow.every((num) => num % 2 === 0);
// console.log(evenNumbers); // true

// Знайдіть перше непарне число

// const numbersArr = [2, 1, 6, 8, 9, 10, 12];
// const firstOddNumber = numbersArr.find((num) => num % 2 !== 0);
// console.log(firstOddNumber); // 1

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];
// const sortNumbers = numbersArray.sort((a, b) => a - b);
// console.log(sortNumbers); // [1, 2, 3, 4, 5]

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ["banana", "orange", "apple", "pear"];
// const sortedStrings = stringArray.sort();
// console.log(sortedStrings); // ['apple', 'banana', 'orange', 'pear']

//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];
// const sortedUsers = users.sort((a, b) => a.age - b.age);
// console.log(sortedUsers); // [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}]

// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbersArr = [1, 2, 3, 4, 5];
// const sum = numbersArr.reduce((acc, num) => acc + num, 0);
// console.log(sum); // 15

// Розроби клас Calculator, який дозволяє виконувати арифметичні
//  операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.

// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод substruct - Віднімає value від поточного значення. Повертає this.

// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод multiply -Множить поточне значення на value. Повертає this.

// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// class Calculator {
//   constructor() {
//     this.value = 0; // Тут ми зберігаємо поточне значення
//   }

//   // Встановлюємо початкове значення
//   number(value) {
//     this.value = value;
//     return this; // Повертаємо this, щоб можна було робити ланцюжок .add().multiply() тощо
//   }

//   // Додаємо число
//   add(value) {
//     this.value += value;
//     return this; // Повертаємо this для chaining
//   }

//   // Віднімаємо число
//   subtract(value) {
//     this.value -= value;
//     return this;
//   }

//   // Множимо на число
//   multiply(value) {
//     this.value *= value;
//     return this;
//   }

//   // Ділимо на число, але перевіряємо, чи воно не 0
//   divide(value) {
//     if (value === 0) {
//       throw new Error("Division by zero is not allowed"); // Викидаємо помилку
//     }
//     this.value /= value;
//     return this;
//   }

//   // Повертаємо результат
//   getResult() {
//     return this.value;
//   }
// }

// const calc = new Calculator();

// const result = calc
//   .number(10) // Починаємо з 10
//   .add(5) // Додаємо 5 → 15
//   .subtract(3) // Віднімаємо 3 → 12
//   .multiply(4) // Множимо на 4 → 48
//   .divide(2) // Ділимо на 2 → 24
//   .getResult(); // Отримуємо 24

// console.log(result); // 24

// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

// class Client {
//   #login;
//   #email;

//   // Конструктор — викликається при створенні нового об'єкта
//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   // Геттер для login — дозволяє отримати значення
//   get login() {
//     return this.#login;
//   }

//   // Сеттер для login — дозволяє встановити нове значення
//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   // Геттер для email
//   get email() {
//     return this.#email;
//   }

//   // Сеттер для email
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const client = new Client("springy", "springy@gmail.com");

// console.log(client.login); // "springy"
// console.log(client.email); // "springy@gmail.com"

// client.login = "springy";
// client.email = "springy@gmail.com";

// console.log(client.login); // "springy"
// console.log(client.email); // "springy@gmail.com"

//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

// Клас Person описує загальну людину
class Person {
  constructor(name, age, gender, email) {
    this.name = name; // Ім'я людини
    this.age = age; // Вік людини
    this.gender = gender; // Стать людини
    this.email = email; // Email людини
  }

  // Метод, який повертає інформацію про людину
  getDetails() {
    return {
      name: this.name,
      age: this.age,
      gender: this.gender,
      email: this.email,
    };
  }
}

// Клас Employee розширює Person (успадковує все, що має Person)
class Employee extends Person {
  constructor(name, age, gender, email, salary, department) {
    // Викликаємо конструктор батьківського класу Person
    super(name, age, gender, email);

    // Додаємо нові властивості тільки для працівника
    this.salary = salary; // Зарплата працівника
    this.department = department; // Відділ
  }

  // Метод, який повертає тільки деталі про працівника
  getEmployeeDetails() {
    return {
      salary: this.salary,
      department: this.department,
    };
  }
}
const worker = new Employee("Anna", 39, "female", "anna@gmail.com", 5000, "HR");

console.log(worker.getDetails());
// { name: 'Anna', age: 39, gender: 'female', email: 'anna@gmail.com' }

console.log(worker.getEmployeeDetails());
// { salary: 5000, department: 'HR' }
