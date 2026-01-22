//1. Логическое И (&&)
const age = 25;
const hasLicense = false;

if (age >= 18 && hasLicense) {
  console.log("🟢Можно водить машину");
} else {
  console.log("🔴Нельзя водить машину");
}

//2. Логическое ИЛИ (||)

const isWeekend = true;
const isHoliday = false;

if (isWeekend || isHoliday) {
  console.log("🟢Можно отдыхать");
} else {
  console.log("🔴Нельзя отдыхать");
}

//3. Логическое НЕТ (!)

const isLogged = false;

if (!isLogged) {
  console.log("🔴Необходимо войти");
} else {
  console.log("🟢Вы вошли");
}

//Ленивые вычисления

// && - если первый false, второй не выполняется

false && console.log("Это не выведется");
console.log("Это выведется -- 2") && false;

// || - если первый true, второй не выполнится

false || console.log("Это не выведется");

//Комбинирование операторов

const isWoman = false;
const yourAge = 20;
const hasMoney = true;

if (yourAge > 18 && hasMoney && !isWoman) {
  console.log("🟢Можно жениться!");
} else {
  console.log("🔴Нельзя жениться!");
}
