const age = 18;
console.log(age >= 18 ? "Ты совершеннолетний" : "Ты несовершеннолетний");

//Вложенные тернарники и цепочки
const number = -2;
const checkNumber =
  number > 0 ? "Положительное" : number < 0 ? "Отрицательное" : "Число равно 0";

console.log(checkNumber);

//Цепочка тернарников

const accessAge = 13;

let checkAge =
  accessAge < 13
    ? "Детский доступ"
    : accessAge < 18
      ? "Подростковый доступ"
      : accessAge < 65
        ? "Взрослый доступ"
        : "Пенсионный доступ";

console.log(checkAge);
