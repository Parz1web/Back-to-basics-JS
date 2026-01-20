//1. Явное преобразование

//1.1 В строку

console.log(typeof String(123));
console.log(typeof String(true));
console.log(String(null));
console.log(String(undefined));
console.log(String([1, 2, 3]));

//1.2 В число

console.log(Number("123"));
console.log(Number(""));
console.log(Number("a"));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number([]));
console.log(Number({}));

//1.3 В булево

console.log(Boolean("123"));
console.log(Boolean(""));
console.log(Boolean("a"));
console.log(Boolean(false));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean([]));
console.log(Boolean({}));

//2. Неявное преобразование

// 2.1 (+) Преобразование в строку

console.log("10" + 5);
console.log("10" + "false");
console.log("10" + null);
console.log("10" + undefined);

// 2.2 Преобразование в число (* / - )

console.log("10" * 5);
console.log("10" - 2);
console.log("10" / 2);
console.log("asf" / 2);

//3. Логические преобразования

console.log(0 && "Привет");
console.log(0 || "Привет");
console.log(!"");

let form = document.querySelector("#userForm"),
  formResult = document.querySelector("#result");

let formSubmit = (e) => {
  e.preventDefault();
  const valueEl = new FormData(e.target).get("value");

  if (!valueEl) {
    alert("Введите значение");
    return;
  }

  const parseValue = (value) => {
    return value === "true"
      ? { value: true, type: "boolean" }
      : value === "false"
        ? { value: false, type: "boolean" }
        : !isNaN(value) === true
          ? { value: Number(value), type: "Number" }
          : { value, type: "String" };
  };
  const { value, type } = parseValue(valueEl);

  let resultParagraph = document.createElement("p");
  resultParagraph.innerHTML = `✅Значение: <span class="conversion-value">${value}</span> | Тип: <span class="conversion-type">${type}</span>`;
  formResult.prepend(resultParagraph);

  e.target.reset();
};

form.addEventListener("submit", formSubmit);
