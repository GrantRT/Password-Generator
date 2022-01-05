// Empty array for the users choices from the prompts
var userChoices = [];

// Creating arrays for lowercase and uppercase letters, numbers and special characters
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];

// Assignment Code
var generateBtn = document.querySelector('#generate');
function generatePassword() {
  var length = prompt('How long would you like your password to be? Between 8-128 characters)');
  var num = Number(length);
  if (num < 8) {
    alert('Your password cannot be less than 8 charcters long');
  } else if (num > 128) {
    alert('Your password cannot be more than 128 charcters long');
  } else if (isNaN(num)) {
    alert('Please enter a numerical value');
  } else Number(num);
  console.log(num);

  if (confirm('Would you like your password to contain lowercase letters?')) {
    userChoices = userChoices.concat(lowercase);
  }

  if (confirm('Would you like your password to contain uppercase letters?')) {
    userChoices = userChoices.concat(uppercase);
  }

  if (confirm('Would you like your password to contain numbers?')) {
    userChoices = userChoices.concat(numbers);
  }

  if (confirm('Would you like your password to contain special characters?')) {
    userChoices = userChoices.concat(special);
  }

  return 'Generated password here';
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
