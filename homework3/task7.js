const objReverse = function (obj) {
  if (typeof obj !== "object" && obj !== null)
    throw new Error("wrong input data");

  const reversedObj = {};

  for (const key in obj) {
    const value = obj[key];
    reversedObj[value] = key;
  }

  return reversedObj;
};

const main = function () {
  result1 = objReverse({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" });
  console.log(result1);

  result2 = objReverse({ dog: "пес" });
  console.log(result2);
};

main();
