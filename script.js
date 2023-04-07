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
  //I know this is wildly inefficient but I couldn't figure out another way
  var lowChar = "abcdefghijklmnopqrstuvwxyz";
  var upChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numChar = "1234567890";
  var specChar = "!@#$%^&*()_+-=?<>.";
  var password = "";
  var lowerCase = confirm("Which special characters do you want?\nDo you want lowercase?");
  var upperCase = confirm("Which special characters do you want?\nDo you want uppercase?");
  var numCase = confirm("Which special characters do you want?\nDo you want numbers?");
  var specialCase = confirm("Which special characters do you want?\nDo you want special characters?");
  if (lowerCase == false && upperCase == false && numCase == false && specialCase == false) {
    alert("Please select at least one special character")
  }
  else if (lowerCase == true && upperCase == false && numCase == false && specialCase == false) {
    randomChar = lowChar;
    }
  else if (lowerCase == true && upperCase == true && numCase == false && specialCase == false) {
    randomChar = lowChar+upChar;
    }
  else if (lowerCase == true && upperCase == true && numCase == true && specialCase == false) {
    randomChar = lowChar+upChar+numChar;
    }
  else if (lowerCase == true && upperCase == true && numCase == true && specialCase == true) {
    randomChar = lowChar+upChar+numChar+specChar;
    }
  else if (lowerCase == false && upperCase == true && numCase == true && specialCase == true) {
    randomChar = upChar+numChar+specChar;
    }
  else if (lowerCase == false && upperCase == false && numCase == true && specialCase == true) {
    randomChar = numChar+specChar;
    }
  else if (lowerCase == false && upperCase == false && numCase == false && specialCase == true) {
    randomChar = specChar;
    }
  else if (lowerCase == true && upperCase == false && numCase == true && specialCase == true) {
    randomChar = lowChar+numChar+specChar;
  }
  else if (lowerCase == true && upperCase == false && numCase == false && specialCase == true) {
    randomChar = lowChar+specChar;
  }
  else if (lowerCase == false && upperCase == true && numCase == false && specialCase == true) {
    randomChar = upChar+specChar;
  }
  else if (lowerCase == true && upperCase == false && numCase == true && specialCase == false) {
    randomChar = lowChar+numChar;
  }
  else if (lowerCase == false && upperCase == true && numCase == true && specialCase == false) {
    randomChar = upChar+numChar;
  }
  else if (lowerCase == true && upperCase == true && numCase == false && specialCase == true) {
    randomChar = lowChar+upChar+specChar;
  }
  else if (lowerCase == false && upperCase == true && numCase == false && specialCase == false) {
    randomChar = upChar;
  }
  else if (lowerCase == false && upperCase == false && numCase == true && specialCase == false) {
    randomChar = numChar;
  }
  else {
    console.log("Please try again. Select more special characters to use.");
  }

  for (var i = 0; i < passwordLengthTest; i++) {
    var randomGenerator = Math.floor(Math.random() * randomChar.length);
    password += randomChar.substring(randomGenerator , randomGenerator + 1);
  }
  //alert("Here is your password\n" + password);
return password;
}
