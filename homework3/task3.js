const _ = require("lodash");

const solutionLodash = (str, ending) => {
  if (!_.isString(str)) throw Error("first parametr should be a string");

  if (!_.isString(ending)) throw Error("second parametr should be a string");

  return _.endsWith(str, ending);
};

const solution = (str, ending) => {
  if (typeof str !== "string") throw Error("first parametr should be a string");

  if (typeof ending !== "string")
    throw Error("second parametr should be a string");

  return str.substring(str.length - ending.length) === ending;
};

const main = function () {
  const result1 = solution("lol", "l");
  const resLodash1 = solutionLodash("lol", "l");
  console.log(result1);
  console.log(resLodash1, "(lodash)");

  const result2 = solution("football", "bowl");
  const resLodash2 = solutionLodash("football", "bowl");
  console.log(result2);
  console.log(resLodash2, "(lodash)");

  const result3 = solution("laser", "er");
  const resLodash3 = solutionLodash("laser", "er");
  console.log(result3);
  console.log(resLodash3, "(lodash)");
};

main();
