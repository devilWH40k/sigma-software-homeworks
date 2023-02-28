const _ = require("lodash");

const averagesLodash = (arr) => {
  if (!_.isArray(arr)) throw Error("the first one should be an array");

  return _.reduce(
    arr,
    (avgs, _, i, arr) => {
      if (i === arr.length - 1) return avgs;

      avgs.push((arr[i] + arr[i + 1]) / 2);
      return avgs;
    },
    []
  );
};

const averages = (arr) =>
  arr.reduce((avgs, _, i, arr) => {
    if (i === arr.length - 1) return avgs;

    avgs.push((arr[i] + arr[i + 1]) / 2);
    return avgs;
  }, []);

const main = function () {
  const result1 = averages([2, -2, 2, -2, 2]);
  const resLodash1 = averagesLodash([2, -2, 2, -2, 2]);
  console.log(result1);
  console.log(resLodash1, "(lodash)");

  const result2 = averages([1, 3, 5, 1, -10]);
  const resLodash2 = averagesLodash([1, 3, 5, 1, -10]);
  console.log(result2);
  console.log(resLodash2, "(lodash)");
};

main();
