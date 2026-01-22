//Синтаксис сам знаешь, для перебора массива
//Используй, когда знаешь точное кол-во элементов

const cars = ["volvo", "ford", "honda"];
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

let i = 0;
while (cars[i] !== "honda") {
  console.log(cars[i]);
  i++;
}

//Пример: Повтор до успешного ответа

function sendRequest() {
  return Math.random() > 0.8;
}

let attempt = 0;
let access = false;

while (!access && attempt < 10) {
  access = sendRequest();
  attempt++;
  console.log(`Попытка: ${attempt} - ${access ? "Успех" : "Неудача"}`);
}
// Ничего сложного, STAY FOCUSED -- Дальше больше
