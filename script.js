// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var lower = false;
var upper = false;
var numeric = false;
var special = false;
var length = 0;

// Function to prompt user for password options
function getPasswordOptions() {
  lower = confirm("Do you want your password to contain lowercase characters?");
  upper = confirm("Do you want your password to contain uppercase characters?");
  numeric = confirm("Do you want your password to contain numeric characters?");
  special = confirm("Do you want your password to contain special characters?");

  if (!lower && !upper && !numeric && !special) {
    alert("You must select at lease one character type");
    getPasswordOptions();
  } else {
    while (true) {
      if (length < 8 || length > 128) {
        length = prompt("How long would you like your password? (8 - 128 characters)");
      } else {
        break;
      }
    }
  }
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

document.addEventListener("DOMContentLoaded", function() {
  getPasswordOptions();
});


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);