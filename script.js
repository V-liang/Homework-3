// Assignment Code
var generateBtn = document.querySelector('#generate');

// Speacial Characters
var SpecialCharacters ="!@#$%^&*()";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Prompts for gerate click
function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters you want for you new password.  Minimum of 8 but maximum of 128.");
  var numbers = confirm('Do you want numbers in your password?');
  var lowerCases = confirm('Do you want lowercases in your password?');
  var upperCases = confirm('Do you want uppercases in your password?');
  var specialCharacters = confirm('Do you want special characters in your password?');

  //Minimum varibales
  var minimumCount = 0;

  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases ="";
  var minimumSpecialCharacters = "";

  //Generator Function**
  var functionArray = {
    getNumbers: function() {
      return string.fromCharcode (Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function() {
      return string.fromCharcode (Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function() {
      return string.fromCharcode (Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function() {
      return specialCharacters [Math.floor(Math.random() * specialCharacters.length)]
    }
  };

  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;
  }

  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;
  }

  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;
  }

  if (specialCharacters === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;
  }

  var randomPasswordGenerated = "";

  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;
  }

  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;

  return randomPasswordGenerated;
}

// Add event listener to generate button 
generateBtn.addEventListener("click", writePassword)
