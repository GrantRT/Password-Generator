// Creating arrays for lowercase and uppercase letters, numbers and special characters
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];

// Assignment Code
var generateBtn = document.querySelector('#generate');

function generatePassword() {
  // Creates a new empty array
  var userChoices = [];

  // Prompt to determine length of the password
  var length = prompt('How long would you like your password to be? (Between 8-128 characters)');
  var num = Number(length);
  if (num < 8) {
    alert('Your password cannot be less than 8 charcters long');
    return 'Please try again';
  } else if (num > 128) {
    alert('Your password cannot be more than 128 charcters long');
    return 'Please try again';
  } else if (isNaN(num)) {
    alert('Please enter a numerical value');
    return 'Please try again';
  }

  // Confirm prompts to determine what characters are used in the password
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

  if (userChoices.length === 0) {
    alert('You must select at least one type of character');
    return 'Please try again';
  }

  var userPassword = '';
  // For loop to run the character length selected by the user
  for (var i = 0; i < num; i++) {
    var randomChar = Math.floor(Math.random() * userChoices.length);
    userPassword += userChoices[randomChar];
  }
  return userPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
