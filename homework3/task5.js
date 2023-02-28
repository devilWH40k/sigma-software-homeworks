const VOWELS = "aeiou";

const countVowels = function (str) {
  let cntr = 0;

  for (const char of str) {
    if (VOWELS.indexOf(char.toLowerCase()) !== -1) cntr++;
  }

  return cntr;
};

const removeABC = function (str) {
  const abcRegex = /[aAbBcC]/g;

  if (!str.match(abcRegex)) return null;

  return str.replace(abcRegex, "");
};

const main = function () {
  result1 = countVowels("Celebration");
  console.log("Vowels count:", result1);

  result2 = countVowels("Aqua");
  console.log("Vowels count:", result2);

  result3 = removeABC("night");
  console.log("Modified str:", result3);

  result4 = removeABC("The best car");
  console.log("Modidfied str:", result4);
};

main();
