//Объявление функций - hoisting

function sayHi(name) {
  return name;
}

// Функциональное выражение - не подвергается hoisting, мб анонимным

const sayHiConst = function (name) {
  return name;
};
console.log(sayHiConst("Ivan"));

// Стрелочные функции - не подвергается hoisting,

const hiArrow = (name) => name;

console.log(hiArrow("ivan"));

//Параметры и аргументы
//Параметры это то, что мы передаем при объявлении функции
//const hiArrow = (name) => name; name -- параметр
//hiArrow(name); name = 'ivan' - аргумент

//Значение по умолчанию
function greet(name = "Dima") {
  return `Hi ${name}`;
}
console.log(greet());

//Возврат значений

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32; // Формула перевода
}

console.log(celsiusToFahrenheit(25));

let numbers = [3, 5, 76, 7, 1, 124, 246, 2];

function findMax(numbers) {
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

console.log(findMax(numbers));

function generatePassword(len) {
  const chars = "ABCDEasdfghjkzzxcvbnm";
  let pass = "";

  for (let i = 0; i < len; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    pass += chars.charAt(randomIndex);
  }
  return pass;
}

console.log(generatePassword(11));

//Запуск таймера обратного отсчета

function startCounter(time) {
  let remaining = time;

  const timer = setInterval(() => {
    console.log(`Осталось ${remaining}`);
    remaining--;

    if (remaining < 0) {
      clearInterval(timer);
      console.log("Время вышло");
    }
  }, 1000);
}

// startCounter(5);

//Функция с обязательным аргументом

function calcArea(width, height) {
  if (typeof width !== "number" && typeof height !== "number") {
    throw new Error("Ширина и высота должны быть числами");
  }

  if (width <= 0 || height <= 0) {
    throw new Error("Ширина и высота должны быть положительными");
  }

  return width * height;
}

// console.log(calcArea(12, 10));

// Функция с аргументами по умолчанию

function greetUser(name, title = "Гость", formal = false) {
  if (formal) {
    return `Добро пожаловать, ${title} ${name}`;
  } else {
    return `Привет ${title} ${name} `;
  }
}

console.log(greetUser("Anna", "Друг", true));

function createUserDescription({ name, age, city = "Не указан" }) {
  if (!name || !age) {
    throw new Error("Имя и возраст должны быть заполнены");
  }
  return `Имя: ${name} \nВозраст: ${age} \nГород: ${city}`;
}

const user = {
  name: "Dan",
  age: 12,
};

console.log(createUserDescription(user));

const validEmail = (email) => email.includes("@");

console.log(validEmail("zxcvbmail.ru"));
