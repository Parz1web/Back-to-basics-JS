let cars = ["honda", "volvo", "ford"];

console.log(cars);

//Добавление в конец
cars.push("ferrari");
console.log(cars);

//Добавление в начало
cars.unshift("Москвич");
console.log(cars);

//Удаление с конца
cars.pop();
console.log(cars);

//Удаление с начала
cars.shift();
console.log(cars);

//Вывод массива

cars.forEach((e, i) => console.log(`${i + 1}: ${e}`));

//Проблема с индексом в цикле for

for (const [index, el] of cars.entries()) {
  console.log(`${index + 1}: ${el}`);
}
