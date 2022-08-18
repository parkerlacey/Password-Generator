// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

function generatePassword () {
    // Prompt for the length of the password
    var passwordLength = prompt("How many characters would you like your password to contain?");
    
    var lengthConfirm = parseInt(passwordLength);
    console.log(lengthConfirm);
 
// Asking the user how many characters they to include in their password 
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        alert ("Please choose a number between 8-128.");
        return;
    }

var possibleChar = [];
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
var lowerCaseChar = "abcdefghiklmnopqrstuvwxyz" .split("");
var numberChar = "0123456789" .split ("");
var specialChar = "!@#$%^&*()-+?<>}{|~;" .split("");


// Asking the user if they want to include lowercase characters
var hasLowerCase = confirm("Do you want your password to include lowercase characters?");
    if(hasLowerCase=== true) {
        for (var i = 0; i < lowerCaseChar.length; i++) {
            possibleChar.push(lowerCaseChar[i]);
        }
    }
// Asking the user if they want to include uppercase characters
var hasUpperCase = confirm("Do you want your password to include uppercase characters?");
    if (hasUpperCase === true) {
        for (var i = 0; i < upperCaseChar.length; i++) {
            possibleChar.push(upperCaseChar[i]);
        }
    }
// Asking the user if they want to include numbers
var hasNumbers= confirm("Do you want your password to include numbers");
    if (hasNumbers === true) {
        for (var i = 0; i < numberChar.length; i++) {
            possibleChar.push(numberChar[i]);
        }
    }
// Asking the user if they want to include special characters    
var hasSpecial = confirm("Do you want your password to include special characters?");
    if (hasSpecial === true) {
        for (var i = 0; i < specialChar.length; i++) {
            possibleChar.push(specialChar[i]);
        }
    }

// Using the Math.floor(Math.random) it is generating a random password
 var finalPassword = "";
 for (var i = 0; i < lengthConfirm; i++) {
     possibleChar[
         Math.floor(Math.random() * possibleChar.length)];
     finalPassword +=
        possibleChar[
            Math.floor(Math.random() * possibleChar.length)
        ];
    }
 return finalPassword;
}

generateBtn.addEventListener("click", writePassword);


