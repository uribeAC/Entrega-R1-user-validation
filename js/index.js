const username = "donPepito";
const userPassword = "adc53áÑÙ";
const repeatedUserPassword = "adc53áÑÙ";
const userAge = 22;

const lengthRegEx = /[a-zA-Z0-9À-ú]{8,}/g;
const upperCaseRegEx = /[A-ZÀ-Ú]/g;
const numberRegEx = /[0-9]/g;

const hasPasswordLength = lengthRegEx.test(userPassword);
const hasPasswordUpperCase = upperCaseRegEx.test(userPassword);
const hasPasswordNumber = numberRegEx.test(userPassword);

const minimumUsernameLength = 5;
console.log(
  `El nombre de usuario es válido: ${username.length >= minimumUsernameLength}`
);
console.log(
  `La contraseña es válida: ${
    hasPasswordLength && hasPasswordUpperCase && hasPasswordNumber
  }`
);
console.log(
  `La repetición de la contraseña es válida: ${
    repeatedUserPassword === userPassword
  }`
);
const minimumAdultAge = 18;
console.log(`Es mayor de edad: ${userAge >= minimumAdultAge}`);
