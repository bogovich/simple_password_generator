const buttonGen = document.querySelector("#passGen");

const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
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
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

function getRandomNumber() {
  return Math.floor(Math.random() * characters.length);
}

function getRandomCharacter() {
  return characters[getRandomNumber()];
}

function generatePasswords() {
  randomPassword = "";
  for (let i = 0; i <= 16; i++) {
    randomPassword += getRandomCharacter();
  }
  return randomPassword;
}

function showGeneratedPasswords() {
  firstPassword = generatePasswords();
  secondPassword = generatePasswords();

  firstPassElement = document.getElementById("first-password");
  secondPassElement = document.getElementById("second-password");

  firstPassElement.textContent = firstPassword;
  secondPassElement.textContent = secondPassword;
}

buttonGen.addEventListener("click", showGeneratedPasswords);
