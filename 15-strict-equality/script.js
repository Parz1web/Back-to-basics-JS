//1. Строгое сравнение(значение и тип)

console.log(5 === 5);
console.log(5 === "5");
console.log(true === 1);
console.log(null === undefined);

console.log("-----1----");
//2. Нестрогое значение(значение)

console.log(5 == 5);
console.log(5 == "5");
console.log(true == 1);
console.log(null == undefined);

console.log("-----2----");
//3. Разбор сложных случаев

//1. null и undefined

console.log(null == undefined);
console.log(null === undefined);

console.log("----3.1-----");
//2. NaN (Not a Number)

console.log(NaN === NaN);
console.log(isNaN(NaN));
console.log("----3.2-----");

//3. 0 и false

console.log(0 == false);
console.log(0 === false);

console.log("----3.3-----");
//4. Пустые строки и false

console.log("" == false);
console.log("" === false);

console.log("----3.4-----");

//Сравнение объектов и массивов

const obj1 = { a: 1 };
const obj2 = { a: 1 };

console.log(obj1 == obj2);
console.log(obj1 === obj2);
//С массивами также
console.log("----4-----");

//Операторы неравенства

//1. Нестрогое неравенство (!=)

console.log(5 != "5");
console.log(0 != false);
console.log(null != undefined);

//2. Строгое неравенство (!==)

console.log(5 !== "5");
console.log(0 !== false);
console.log(null !== undefined);

console.log("Операторы неравенства");

//Практический пример

const userInput = "123";

if (userInput != 123) {
  console.log("Нестрогое неравенство: ничего не выведется");
}

if (userInput !== 123) {
  console.log("Строгое неравенство: выведется");
}

const PI = 3.14;

if (PI == "3.14") {
  console.log("Истина");
} else {
  console.log("Ложь");
}
