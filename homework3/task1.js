const _ = require("lodash");

const biggestDifferenceLodash = function (numbers) {
  const maxValue = _.max(numbers);
  const minValue = _.min(numbers);

  return maxValue - minValue;
};

const biggestDifference = function (numbers) {
  numbers.sort((a, b) => a - b);

  // max - min
  return numbers[numbers.length - 1] - numbers[0];
};

const main = function () {
  const test_arr1 = [-10, 2, 5, 5, 7, -1, -2, 9];
  const result1 = biggestDifference(test_arr1);
  const resLodash1 = biggestDifferenceLodash(test_arr1);
  console.log("answer:", result1, "expected output: 19");
  console.log("answer(lodash):", resLodash1, "expected output: 19");

  const test_arr2 = [1, 2, 3, -4];
  const result2 = biggestDifference(test_arr2);
  const resLodash2 = biggestDifferenceLodash(test_arr2);
  console.log("answer:", result2, "expected output: 7");
  console.log("answer(lodash):", resLodash2, "expected output: 7");

  const test_arr3 = [2, 34, 2, 12];
  const result3 = biggestDifference(test_arr3);
  const resLodash3 = biggestDifferenceLodash(test_arr3);
  console.log("answer:", result3, "expected output: 32");
  console.log("answer(lodash):", resLodash3, "expected output: 32");
};

main();
