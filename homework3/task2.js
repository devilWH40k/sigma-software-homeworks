const _ = require("lodash");

const splitToWordsLodash = function (str, minLimit = 0) {
  if (!_.isString(str)) throw Error("first parametr should be a string");

  if (!_.isFinite(minLimit))
    throw Error("the first one should be a number and not NaN");

  const words = _.split(str, " ");

  return _.filter(words, (word) => word.length > minLimit);
};

const splitToWords = function (str, minLimit = 0) {
  if (typeof str !== "string") throw Error("first parametr should be a string");

  if (!Number.isFinite(minLimit))
    throw Error("the first one should be a number and not NaN");

  const words = str.split(" ");

  return words.filter((word) => word.length > minLimit);
};

const main = function () {
  const test_str1 = "Such a great day";
  const result1 = splitToWords(test_str1, 3);
  const resLodash1 = splitToWordsLodash(test_str1, 3);
  console.log(result1);
  console.log(resLodash1, "(lodash)");

  const test_str2 = "In Emperor we trust";
  const result2 = splitToWords(test_str2, 2);
  const resLodash2 = splitToWordsLodash(test_str2, 2);
  console.log(result2);
  console.log(resLodash2, "(lodash)");

  const test_str3 =
    "The fallen shall be forever remembered as the emperor's finest";
  const result3 = splitToWords(test_str3, 5);
  const resLodash3 = splitToWordsLodash(test_str3, 5);
  console.log(result3);
  console.log(resLodash3, "(lodash)");
};

main();
