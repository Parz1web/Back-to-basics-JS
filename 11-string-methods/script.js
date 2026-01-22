let vacancyName = "FrontendDev";

console.log(vacancyName);
console.log(vacancyName.indexOf("e"));
console.log(vacancyName.lastIndexOf("e"));

let userName = " Web Dev Joe ";
console.log(userName.length);
console.log(userName.trim());
console.log(userName.trimStart());
console.log(userName.trimEnd());

console.log(userName.toUpperCase().trim());
console.log(userName.toLowerCase().trim());

let str = "Бета";
console.log(str.repeat(3));

const nickName = "etudiant";

if (nickName.startsWith(" ")) {
  console.log("🔴Никнейм не должен начинаться с пробела");
} else {
  console.log("🟢Никнейм указан верно");
}

const nickStatus = nickName.endsWith(" ")
  ? "🔴Никнейм не должен заканчиваться пробелом"
  : "🟢Никнейм указан верно";
console.log(nickStatus);

let emptySpacesStatus = nickName.includes(" ")
  ? "Никнейм содержит пробелы"
  : "Никнейм указан верно";
console.log(emptySpacesStatus);

const phone = "8 999 888 77 77";
console.log(phone.replaceAll(" ", ""));
