const _ = require("lodash");

const differenceLodash = (arr1, arr2) => [..._.uniq(arr1.concat(arr2))];

const difference = (arr1, arr2) => [...new Set(arr1.concat(arr2))];

const main = function () {
  const result1 = difference([1, 2, 3], [100, 2, 1, 10]);
  const resLodash1 = differenceLodash([1, 2, 3], [100, 2, 1, 10]);
  console.log(result1);
  console.log(resLodash1, "(lodash)");

  const result2 = difference([3, 3, 5, 23], [45, 3, 24, 5]);
  const resLodash2 = differenceLodash([3, 3, 5, 23], [45, 3, 24, 5]);
  console.log(result2);
  console.log(resLodash2, "(lodash)");
};

main();
