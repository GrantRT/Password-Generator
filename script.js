// Assignment Code
var generateBtn = document.querySelector('#generate');

// Creating strings for lowercase and uppercase letters, numbers and special characters
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var special = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

function generatePassword() {
  var length = prompt('How long would you like your password to be? Between 8-128 characters)');
  var num = Number(length);
  if (length < 8) {
    alert('Your password cannot be less than 8 charcters long');
  } else if (length > 128) {
    alert('Your password cannot be more than 128 charcters long');
  } else Number(length);
  console.log(num);

  return 'Generated password here';
}

// Prompt to determine length of password

// Prompts with other options
// var lower = confirm('Would you like your password to contain lowercase letters?');
// var upper = confirm('Would you like your password to contain uppercase letters?');
// var num = confirm('Would you like your password to contain numbers?');
// var spec = confirm('Would you like your password to contain special characters?');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
