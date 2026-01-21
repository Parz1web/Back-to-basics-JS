//Элементы формы
const form = document.querySelector(".age-form");
const ageInput = document.querySelector(".your-age");
const displayResult = document.querySelector(".display-result");

//Получение данных из json
let ageOptions = [];

const loadData = async () => {
  try {
    const response = await fetch("./data.json");
    const data = await response.json();

    ageOptions = data.ageOptions;
  } catch (error) {
    console.log("Ошбика при загрузке данных", error);
  }
};

//Обработка введенных данных
const processAge = () => {
  let userAge = ageInput.value.trim();
  const ageNumber = Number(userAge);

  if (userAge == "") {
    displayResult.textContent = "Заполните поле ввода";
    return;
  }
  if (isNaN(ageNumber)) {
    displayResult.textContent = "Введите число";
    return;
  }

  let message = "Ошбика отсутствует";

  for (const option of ageOptions) {
    if (ageNumber >= option.min && ageNumber <= option.max) {
      message = option.message;
      break;
    }
  }
  displayResult.textContent = message;
};

//Загружаем данные
window.addEventListener("load", async () => await loadData());

//Отправка формы
form.addEventListener("submit", (e) => {
  e.preventDefault();
  processAge();
});
