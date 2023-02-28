const generatePassword = function () {
  const randomNumber = (start, end) =>
    Math.floor(Math.random() * (end - start + 1) + start);

  const UPPERCASE = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const LOWERCASE = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const CYPHERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const ALL_CHARACTERS = UPPERCASE.concat(LOWERCASE, CYPHERS);
  const ALL_LETTERS = UPPERCASE.concat(LOWERCASE)
  
  const passLength = randomNumber(6, 20);
  let password = "";
  let prevCharacter;    
  let numCntr = 0;

  for (let i = 0; i < passLength; i++) {
    const randIndex = randomNumber(0, ALL_CHARACTERS.length - 1);
    const randCharacter = ALL_CHARACTERS[randIndex];

    if (typeof randCharacter === "number") numCntr++;

    if (typeof randCharacter === "number" && typeof prevCharacter === "number" || numCntr >= 5) {
        const newRandIndex = randomNumber(0, ALL_LETTERS.length - 1);
        password += ALL_LETTERS[newRandIndex];
    } else {
        password += randCharacter;
        prevCharacter = randCharacter;
    }
  }

  const randUndescoreIndex = randomNumber(0, passLength);
  password = password.substring(0, randUndescoreIndex) + '_' + password.substring(randUndescoreIndex + 1);

  return password;
};

const main = function () {
  const testPass = generatePassword();
  console.log(testPass);
};

main();
