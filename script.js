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


//generatePassword

function generatePassword() {
  var start = "Hello!\nPlease confirm these series of prompts OK for yes Cancel for no";
  alert(start);

 //for (i=0; i < passwordLengthTest; i++ ){ 
    //var passwordLengthTest = parseInt(prompt("Please enter the number of characters you want between 8-128"));
  //}

  var passwordLengthTest = parseInt(prompt("Please enter the number of characters you want between 8-128"));
  if (isNaN(passwordLengthTest)) {
    alert("Value is not a number please try again")
    var passwordLengthTest = parseInt(prompt("Please enter the number of characters you want between 8-128"));
  }
  else if (passwordLengthTest < 8) {
    alert("Please choose a number of 8 or more");
    var passwordLengthTest = parseInt(prompt("Please enter the number of characters you want between 8-128"));
  } else if (passwordLengthTest > 128) {
  alert("Please choose a number of 128 or less");
  var passwordLengthTest = parseInt(prompt("Please enter the number of characters you want between 8-128"));
  } else {
    console.log(passwordLengthTest);
  }
  //var specialCharacters = prompt("Which special characters do you want?");
}