const userName = "donPepito";
const userPassword = "asdÍd5eñito";
const repeatUserPassword = "asdÍd5eñito";
const userAge = "22";

//password check
const regexpLength = /[a-ñA-Ñ0-9À-ú]{8,}/g;
const regexpUpper = /[A-ÑÀ-Ú]/g;
const regexpNumber = /[0-9]/g;

const passwordLength = regexpLength.test(userPassword);
const passwordUpper = regexpUpper.test(userPassword);
const passwordNumber = regexpNumber.test(userPassword);

//print
console.log(`El nombre de usuario es válido: ${userName.length >= 5}`);
console.log(
  `La contraseña es válida: ${
    passwordLength && passwordNumber && passwordUpper
  }`
);
console.log(
  `La repetición de la contraseña es válida: ${
    repeatUserPassword === userPassword
  }`
);
console.log(`Es mayor de edad: ${Number(userAge) >= 18}`);

//chequeos
/*console.log(passwordLength);
console.log(passwordUpper);
console.log(passwordNumber);
console.log(passwordLength && passwordNumber && passwordUpper); */
