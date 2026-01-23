const food1 = "Морковь";
const food2 = "Картошка";
const food3 = "Слива";

function showNums(...foods) {
  console.log(foods);
  console.log(...foods);
  //   console.log(food1, food2, food3);
}

showNums(food1, food2, food3);

function getFood(...foods) {
  return foods;
}

const foods = getFood(food1, food2, food3);

console.log(foods);

console.log("---");
//При деструктуризации
const fruits = ["Яблоко", "Ананас", "Киви", "Апельсин"];

const [first, second, ...others] = fruits;

console.log(first, second, others); //С массивом

console.log(...others); //Отдельные элементы
