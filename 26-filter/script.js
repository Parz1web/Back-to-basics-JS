const numbers = [5, 12, 130, 444, 9];

const bigNumbers = numbers.filter((num) => num > 40);

console.log(bigNumbers);

//Фильтрация строк

const words = ["мышь", "машина", "строка", "до"];

const longWords = words.filter((word) => word.length > 4);

console.log(longWords);

//Фильтрация объектов

const people = [
  {
    name: "Ivan",
    age: 22,
  },
  {
    name: "Dima",
    age: 18,
  },
  {
    name: "Daniil",
    age: 20,
  },
];

const items = people.filter((person) => person.age > 18);

items.forEach((item) => console.log(item));

//Использование индекса

const myNumbers = [10, 20, 30, 40, 50];

const evenIndex = myNumbers.filter((_, index) => index % 2);

console.log(evenIndex);
