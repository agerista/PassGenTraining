var specialChars = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
]

var lowerCaseChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

var upperCaseChars = lowerCaseChars.join(" ").toUpperCase().split(" ")

var numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var generateBtn = document.querySelector("#generate")

function generatePassword() {
  var possibleChars = []
  var finalPass = []
  var passLength = 0
  var lower = false
  var upper = false
  var number = false
  var special = false

  while (passLength < 8 || passLength > 128) {
    passLength = parseInt(
      prompt("How many characters would you like your password to contain?")
    )
  }

  while (!lower || !upper || !number || !special) {
    lower = confirm("Would you like lower case characters in your password?")

    upper = confirm("Would you like upper case characters in your password?")

    number = confirm("Would you like number characters in your password?")

    special = confirm("Would you like special characters in your password?")
  }

  if (lower) {
    possibleChars = possibleChars.concat(lowerCaseChars)
    finalPass.push(randomChar(lowerCaseChars))
  }

  if (upper) {
    possibleChars = possibleChars.concat(upperCaseChars)
    finalPass.push(randomChar(upperCaseChars))
  }

  if (number) {
    possibleChars = possibleChars.concat(numberChars)
    finalPass.push(randomChar(numberChars))
  }

  if (special) {
    possibleChars = possibleChars.concat(specialChars)
    finalPass.push(randomChar(specialChars))
  }

  for (var i = finalPass.length; i < passLength; i++) {
    finalPass.push(randomChar(possibleChars))
  }
}

function randomChar(charArray) {
  return charArray[Math.floor(Math.random() * charArray.length)]
}

function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password")

  passwordText.value = password
}

generateBtn.addEventListener("click", writePassword)
