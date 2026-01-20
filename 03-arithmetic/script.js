let value = null;

let finalResult = value ?? "Значение по умолчанию";
//null или undefined
console.log(finalResult);

const user = { name: "Alexey" };
console.log(user.age?.toString());
//Безопасно обращаться к null или undefined в объекте

class User {}
let people = new User();
console.log(people instanceof User);

console.log(void 42);

class Workman {}
let workman = new Workman();
console.log(workman);

let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4, 5, 6];
console.log(newNumbers);

function sumFunction(...theArgs) {
  let total = 0;
  for (const n of theArgs) {
    total += n;
  }
  return total;
}

console.log(sumFunction(1, 2, 3));

async function fetchData() {
  let response = await fetch("./data.json");
  let data = await response.json();
  console.log(data.employees[1].lastName);
}

fetchData();

async function fecthDataHTML() {
  try {
    let response = await fetch("./data.json");

    if (!response.ok) {
      throw new Error(`Ошибка загрузки: ${response.statusText}`);
    }
    let data = await response.json();

    let outputElement = document.getElementById("root");

    data.employees.forEach((employee) => {
      let employeeElement = document.createElement("p");
      employeeElement.textContent = `Сотрудник: ${employee.firstName} ${employee.lastName}`;
      outputElement.appendChild(employeeElement);
    });
  } catch (error) {
    console.error("Ошибка при загрузке данных: ", error);
  }
}

fecthDataHTML();
