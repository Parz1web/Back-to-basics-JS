const fullName = "Jee Jackson";

const firstName = fullName
  .trimStart()
  .slice(0, fullName.trimStart().indexOf(" "));
const lastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(firstName);
console.log(lastName);

//Slice email

const userEmail = "jackson@google.com";

let firstHalf = userEmail.slice(0, userEmail.indexOf("@"));
let lastHalf = userEmail.slice(userEmail.indexOf("@") + 1);

console.log(firstHalf);
console.log(lastHalf);

let parts = userEmail.split("@");
console.log(parts);
