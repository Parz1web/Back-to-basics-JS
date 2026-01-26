const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);

//Пример без начального массива

// const myNumbers = [1, 2, 3, 4];
// const mySum = myNumbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// });

// console.log(mySum);
//Использует первое значение в качестве accumulator

//Поиск максимального числа
const yourNumbers = [1, 5, 3, 6, 7];

const yourMax = yourNumbers.reduce((accumulator, currentValue) => {
  return Math.max(accumulator, currentValue);
}, -Infinity);

console.log(yourMax);

//Объединение строк

const words = ["Привет ", "мир", "!"];

const assignWords = words.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, "");

console.log(assignWords);

// console.log(!isNaN(parseInt("12.2")));
//Создание объекта

const hisNumbers = [1, 2, 3, 2, 3, 1, 4];

const hisCount = hisNumbers.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;

  return accumulator;
}, {});

console.log(hisCount);

//Выравнивание массива(flatten)

const nestedArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const flatArr = nestedArr.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, []);

console.log(flatArr);
