// Синтаксис

let arr = [1, 2, 3];
const thisArg = { offset: 1 };

const callback = function (element, index, array) {
  return element + index + array.length + this.offset;
};

// const callback = (element, index, array) => {
//   return element + index + array.length + this.offset;
// }; У arrow-функци нет контекста(this не работает)

const result = arr.map(callback, thisArg);

console.log(result.join(", "));

//Функция для обработки чисел

// const asyncDouble = (num) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(num * 2);
//     });
//   }, 1000);
// };

// async function processMyNumbers() {
//   const promises = arr.map(asyncDouble);
//   const results = await Promise.all(promises);

//   console.log(results);
// }

// processMyNumbers();

//Оценка студентов

const scores = [77, 88, 90];

const gradingSystem = {
  bonusPoints: 5,
  maxScore: 100,
};

const report = scores.map(function (score, index, array) {
  const adjustScore = score + this.bonusPoints;
  const finalScore = Math.min(adjustScore, this.maxScore);
  const avgScore = array.reduce((sum, s) => sum + s, 0) / array.length;
  const aboveAverage =
    finalScore >= avgScore ? "Выше среднего" : "Ниже среднего";

  return `Студент ${index + 1}: Финальная оценка - ${finalScore}, ${aboveAverage}`;
}, gradingSystem);

report.forEach((line) => console.log(line));

//Еще пример

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(square);

function square(el) {
  return Math.pow(el, 2);
}

console.log(squares);

//Список дел с приоритетами

const tasks = [
  {
    text: "Купить продукты",
    isImportant: false,
  },
  {
    text: "позвонить другу",
    isImportant: false,
  },
  {
    text: "Сходить в спортзал",
    isImportant: true,
  },
];

const taskList = tasks.map((element, index) => {
  const priority = element.isImportant ? " (важная)" : "";

  return `${index + 1}. ${element.text}${priority}`;
});

taskList.forEach((line) => {
  console.log(line);
});
