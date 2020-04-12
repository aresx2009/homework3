var passwordlength = prompt("Password length (8-128)")
var confirmUppercase = confirm("Include Uppercase?")
var confirmLowercase = confirm("Include Lowercase?")
var confirmNumbers = confirm("Include numbers?")
var confirmSpecialCharaters = confirm("Include Special Charaters?")

if (passwordlength < 8 || passwordlength > 128) {
  alert("Please type an integer between 8 - 128!!")
}


// confirm("Include Uppercase?")
// if true {
//   add("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
// }
// confirm("Include Lowercase?")
// if true {
//   add("abcdefghijklmnopqrstuvwxyz")

// }
// confirm("Include numbers?")
// if true{
//   add("0123456789")

// }
// confirm("Include special Charater?")
// if true{
//   add(" !"#$ %& '()*+,-./:;<=>?@[\]^_`{|}~")

// }

const LOWERCASE_CHAR_CODES = arrayFromLowtoHigh(65, 90);
const UPPERCASE_CHAR_CODES = arrayFromLowtoHigh(97, 122);
const NUMBER_CHAR_CODES = arrayFromLowtoHigh(48, 57);
const SPECIALCHARATERS = arrayFromLowtoHigh(33, 47).concat(
  arrayFromLowtoHigh(58, 64)
).concat(
  arrayFromLowtoHigh(91, 96)
).concat(
  arrayFromLowtoHigh(123, 126)
)




// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
const characterAmount = passwordlength
const includeUppercase = confirmUppercaseElement.confirm
const inCludeLowercase = confirmUppercaseElement.true
const includeNumbers = confirmNumbersElement.true
const includeSpecialCharaters = confirmSpecialCharatersElement.true
const password = generatePassword(characterAmount, includeUppercase, inCludeLowercase, includeNumbers, includeSpecialCharaters)

function generatePassword(characterAmount, includeUppercase, inCludeLowercase, includeNumbers, includeSpecialCharaters) {
  console.log(LOWERCASE_CHAR_CODES)
}

function arrayFromLowtoHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}



//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




