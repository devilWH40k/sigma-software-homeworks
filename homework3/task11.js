const _ = require("lodash");

const haveSameCharactersLodash = function (str1, str2) {
  const str1Characters = _.split(str1, "");
  const str2Characters = _.split(str2, "");

  str1Characters.sort();
  str2Characters.sort();

  return _.join(str1Characters, "") === _.join(str2Characters, "");
};

const haveSameCharacters = function (str1, str2) {
  const str1Characters = str1.split("");
  const str2Characters = str2.split("");

  str1Characters.sort();
  str2Characters.sort();

  return str1Characters.join("") === str2Characters.join("");
};

const main = function () {
  const result1 = haveSameCharacters("dog", "god");
  const resLodash1 = haveSameCharactersLodash("dog", "god");
  console.log(result1);
  console.log(resLodash1, "(lodash)");

  const result2 = haveSameCharacters("food", "flood");
  const resLodash2 = haveSameCharactersLodash("food", "flood");
  console.log(result2);
  console.log(resLodash2, "(lodash)");
};

main();
