// Assignment code here

// [x] Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// [x] Write password to the #password input
function writePassword() {
  passwordCriteriaPrompt();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var passwordCriteria = ""

// [x] Series of prompts for password criteria
var passwordCriteriaPrompt = function () {
  do {
    var inputsAreCorrect = false;
    var length = "LENGTH";
    var characterType = "CHARACTER TYPE";
    var both = "BOTH";

    passwordCriteria = window.prompt("Please enter 'LENGTH' 'CHARACTER TYPE' or 'BOTH' to determine what criteria(s) you want for your password.");
    
    if (!passwordCriteria) {
      return;
    }

    // Convert to uppercase to make comparisons better
    passwordCriteria = passwordCriteria.toUpperCase();

    // Activates the criteria's function based on the user's input
    if (passwordCriteria === length) {
      window.alert("You want to have password criteria of: " + passwordCriteria);
      passwordLengthPrompt();
      inputsAreCorrect = true;
    } else if (passwordCriteria === characterType) {
      window.alert("You want to have password criteria of: " + passwordCriteria);
      charTypePrompt();
      inputsAreCorrect = true;
    } else if (passwordCriteria === both) {
      window.alert("You want to have password criteria of: " + passwordCriteria);
      window.alert("Let's start with defining the password length.");
      passwordLengthPrompt();
      window.alert("Now that you've defined the password length, let's define the password's character types.");
      charTypePrompt();
      inputsAreCorrect = true;
    } else {
      window.alert("Input is not 'LENGTH' 'CHARACTER TYPE' or 'BOTH'. You must select at least one password criteria. Please try again.");
      inputsAreCorrect = false;
    }
  } while (inputsAreCorrect === false);
}

var passwordLength = 8;

// [x] Password Length Prompt
var passwordLengthPrompt = function() {
  do {
    var inputsAreCorrect = false;
    var low = 8;
    var high = 128;  
    
    // [x] Asks user for Password Length
    passwordLength = window.prompt("Please submit a number between 8 and 128 to determine password length.");

    if (!passwordLength) {
      return;
    }

    // Parses passwordLength from String to Integer
    passwordLength = parseInt(passwordLength);

    // Checks to see if input is NaN
    if (isNaN(passwordLength)) {
      window.alert("Input is not a number.");
      inputsAreCorrect = false;
    
    // Checks to see if input is between 8 and 128
    } else if (passwordLength < low || passwordLength > high) {
      window.alert("Input is not a number between 8 and 128");
      inputsAreCorrect = false;
    } else {
      window.alert("Thanks! Password Length is: " + passwordLength);
      inputsAreCorrect = true;
    }
  } while (inputsAreCorrect === false);
}

var charType = "";
var lowercase = true;
var uppercase = true;
var numeric = true;
var specialChar = true;

// [x] Character Type Prompt
var charTypePrompt = function() {
  do {
    var inputsAreCorrect = false;

    charType = "lowercase";
    lowercase = charTypeFunction();

    charType = "uppercase";
    uppercase = charTypeFunction();

    charType = "numeric";
    numeric = charTypeFunction();

    charType = "special characters";
    specialChar = charTypeFunction();

    if (lowercase === false && uppercase === false && numeric === false && specialChar === false) {
      window.alert("You answered 'NO' for all character types. Please select at least one character type. Please try again.");
      inputsAreCorrect = false;
    } else {
      inputsAreCorrect = true;
    }
  } while (inputsAreCorrect === false);
}

// [x] Character Type Function - used for all character types
var charTypeFunction = function() {
  do {
    var charTypeInput = window.prompt("Do you want to include " + charType + " characters? Enter 'YES' or 'NO'");

    if (!charTypeInput) {
      return;
    }

    // Convert to uppercase to make comparisons better
    charTypeInput = charTypeInput.toUpperCase();

    if (charTypeInput === 'YES') {
      window.alert("You answered " + charTypeInput + " for " + charType + " characters");
      return true;
    } else if (charTypeInput === 'NO') {
      window.alert("You answered " + charTypeInput + " for " + charType + " characters");
      return false;
    } else {
      window.alert("Input is not 'YES' or 'NO'. Please try again.");
    }
  } while (charTypeInput != 'YES' || charTypeInput != 'NO');
}

var generatePassword = function() {
  window.alert("Your password will now be generated:");

  var index = "";
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericCharacters = "0123456789";
  var specialCharCharacters = "!@#$%^&*()_-=+`~[]{}\|;:',<.>/?"
  var characters = "";

  if (lowercase == true) {
    characters = characters.concat(lowercaseCharacters);
  } 
  if (uppercase == true) {
    characters = characters.concat(uppercaseCharacters);
  } 
  if (numeric == true) {
    characters = characters.concat(numericCharacters);
  } 
  if (specialChar == true) {
    characters = characters.concat(specialCharCharacters);
  }

  for (var i = 0; i < passwordLength; i++) {
    index += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return index;
}

// [x] Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* 

GIVEN I need a new, secure password
[x] WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
[x] WHEN prompted for password criteria
THEN I select which criteria to include in the password
[x] WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
[x] WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
[x] WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
[x] WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
[x] WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

*/