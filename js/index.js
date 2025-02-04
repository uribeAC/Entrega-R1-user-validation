const userName = "donPepito";
const userPassword = "asdAd5epito";
const repeatUserPassword = "asdAd5epito";
const userAge = "22";

//password check
const regexpLength = /[a-zA-Z0-9]{8,}/g;
const regexpUpper = /[A-Z]/g;
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
