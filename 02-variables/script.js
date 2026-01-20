//область видимости
let x = 10;

if (true) {
  let x = 20;
  x = 30;
  console.log(x);
}
console.log(x);

const y = 30;
//y = 10;

//Деструктуризация позволяет извлекать значения из объектов в отдельные переменные
const person = { userName: "Alice", userAge: 25 };

const { userName, userAge } = person;

console.log(userName);

//Финальный пример для закрепления

const user = { name: "Александр", age: 25, profession: "Электрик" };

const { name: peopleName, age: peopleAge, profession: peopleProfession } = user;

document.getElementById("p1").textContent = `Имя: ${peopleName}`;
document.getElementById("p2").textContent = `Возраст: ${peopleAge}`;
document.getElementById("p3").textContent = `Профессия: ${peopleProfession}`;

document.getElementById("all").innerHTML += `
    <p>Имя: ${peopleName}</p>
    <p>Возраст: ${peopleAge}</p>
    <p>Профессия: ${peopleProfession}</p>
`;

//let, const - блочная область видимости, подвержены TDZ, а именно до их инициализации к ним нельзя обратиться
