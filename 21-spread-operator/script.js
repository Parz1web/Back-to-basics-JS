const numbers = [1, 2, 3, 4, 5];

// let maxNum = Math.max(numbers); -- NaN

//(...arr) spread operator
let maxNum = Math.max(...numbers);

console.log(maxNum);

const word = "Maintenant";

let letter = [...word];
//['M', 'a', 'i', 'n', 't', 'e', 'n', 'a', 'n', 't']
console.log(letter);

//spread оператор разворачивает значение посимвольно или поэлементно

const cars = ["honda", "mercedes", "supra"];

const shoes = ["nike", "hoka", "mizuno"];

//Вкладывает массив в массив
let shoes1 = [shoes];
//Хранит ссылку
let shoes2 = shoes;

console.log(shoes1);
console.log(shoes2);
shoes[1] = "adidas;";
console.log(shoes2);

//разворачивает элементы
let yourOwn = [...cars, ...shoes, "invasion revolt"];
console.log(yourOwn);
