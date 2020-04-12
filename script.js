
var length = prompt("Password length (8-128)")
if (length < 8 || length > 128) {
  alert("Please type an integer between 8 - 128!!")
}

var A = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var a = ("abcdefghijklmnopqrstuvwxyz");
var num = ("1234567890");
var other = (" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
var sum = "";

var output = "";

var confirmUppercase = confirm("Include Uppercase?");
if (confirmUppercase == true) sum += A;

var confirmLowercase = confirm("Include Lowercase?");
if (confirmLowercase == true) sum += a;

var confirmNumbers = confirm("Includen Numbers?");
if (confirmNumbers == true) sum += num;

var confirmSpecialCharaters = confirm("Include Special Charaters?");
if (confirmSpecialCharaters == true) sum += other;

sum = sum.split("");
while (length--) {
  var r = Math.floor(Math.random() * sum.length);
  output += sum[r];
}

document.getElementById("password").value = output;







// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
