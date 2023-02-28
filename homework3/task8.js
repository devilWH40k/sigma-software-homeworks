const calculateDifference = function (stuff, insurance) {
  if (typeof stuff !== "object" && stuff !== null)
    throw new Error("wrong input data");

  if (Object.keys(stuff).length === 0) throw new Error("obj cannot be empty");

  let totalSum = 0;
  for (const item in stuff) {
    totalSum += stuff[item];
  }

  if (totalSum < insurance)
    throw new Error("total amount must be more than insurance");

  return totalSum - insurance;
};

const main = function () {
  result1 = calculateDifference({ "baseball bat": 20 }, 5);
  console.log(result1);

  result2 = calculateDifference({ skate: 10, painting: 20 }, 19);
  console.log(result2);

  result3 = calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400);

  console.log(result3);
};

main();
