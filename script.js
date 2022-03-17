// THESE ARE THE VARIABLES FOR PASSWORD CRITERIA
var characterLength = 8;
var choiceArr = [];

// THESE ARE THE POSSIBLE CHARACTERS TO USE WHEN GENERATING THE PASSWORD
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '=', '?', ',', '~', ';'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];


// ASSIGNMENT CODE
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button // or generatePassword
generateBtn.addEventListener("click", writePassword); 


function createPrompt() {
    choiceArr = [];

    characterLength = parseInt(prompt("How many characters do you want your password to contain? Must be between 8-128 characters in length"));


    if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
          prompt("Character length has to be a number, 8 - 128 digits. Try again.");
        return false;
    }
    
    if (confirm("Would you like lowercase letters in your password?")) {
        choiceArr = choiceArr.concat(lowerCase);
    }
    if (confirm("Would you like uppercase letters in your password?")) {
        choiceArr = choiceArr.concat(upperCase);
    }
    if (confirm("Would you like special characters in your password?")) {
        choiceArr = choiceArr.concat(specialCharacters);
    }
    if (confirm("Would you like numbers in your password?")) {
            choiceArr = choiceArr.concat(number);
    }
    return true;
    }

// Write password to the #password input
function generatePassword() {
    var password = "";
    for(var i = 0; i < characterLength; i++) {
        var randomIndex = Math.floor(Math.random() * choiceArr.length);
        password = password + choiceArr[randomIndex];
    }
    return password;
}

function writePassword() {
    var correctPrompt = createPrompt();
    var passwordText = document.querySelector("#password");

if (correctPrompt) {
    var password = generatePassword();
    passwordText.value = password;
} else {
    passwordText.value = "";
}
}

// let arr = []
// let button = document.getElementById('btn')
// let result = document.getElementById('passwordContainer')
// // button.addEventListener('click', generatePassword)
// function generatePassword() {
//     var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '=', '?', ',', '~', ';']
//     var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//     var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
//     var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',]

//     var allDigits = [...lowerCase, ...upperCase, ...specialCharacters, ...number]
//     console.log(allDigits.length)
    
//     for(var i = 0; i < allDigits.length; i++) {
//         let picker = Math.floor(Math.random() * allDigits.length)
//         arr.push(allDigits[picker])
//     }
//     arr.length = 128;
//     return arr.join('')
// }
// console.log(generatePassword);


//  This is where the box pops up for the user to input
//     window.alert("How many characters do you want the password to be?");

//  function getPrompt() {
//    if (isNaN(characterLength)) || characterLength < 8 && characterLength > 128) {
        //  alert("Character length has to be a number, 8 - 128 digits. Try again.");
        //  return false;
//     }
//     if (confirm("Would you like lowercase letters in your password?")) {
//         choiceArr = choiceArr.concat(lowerCase);
//     }
//     if (confirm("Would you like uppercase letters in your password?")) {
//         choiceArr = choiceArr.concat(upperCase);
//     }

//     if (confirm("Would you like special characters in your password?")) {
//         choiceArr = choiceArr.concat(lowerCase);
//     }
//     if (confirm("Would you like numbers in your password?")) {
//         choiceArr = choiceArr.concat(number);
//     }
//     return true;
//     }



   // if (isNaN(characterLength)) || characterLength < 8 && characterLength > 128) {
    //     alert("Character length has to be a number between 8 - 128 digits. Please try again.");
    //     return false;  

// if (characterLength) < 8 || characterLength > 128) {
//     window.alert("Character length has to be a number, 8 - 128 digits. Try again.");
    
// }







// window.alert("How many characters would you like your password to contain?");
// alert("you are hacked");
// alert("");




// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page