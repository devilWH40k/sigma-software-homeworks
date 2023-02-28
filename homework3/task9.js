const doesBrickFit = function (...measurments) {
  // if at least one parameter is not a Number or is NaN
  if (
    measurments.some(
      (measurment) => typeof measurment !== "number" || Number.isNaN(measurment)
    ) ||
    measurments.length !== 5
  )
    throw Error("invalid measurments");

  const brickMeasurs = measurments.slice(0, 3);
  const holeMeasurs = measurments.slice(-2);

  brickMeasurs.sort((a, b) => a - b);
  holeMeasurs.sort((a, b) => a - b);

  const [brickMinSide1, brickMinSide2] = brickMeasurs;
  const [holeSide1, holeSide2] = holeMeasurs;

  if (brickMinSide1 <= holeSide1 && brickMinSide2 <= holeSide2) return true;

  return false;
};

const main = function () {
  result1 = doesBrickFit(5, 3, 7, 6, 5);
  console.log(result1);

  result2 = doesBrickFit(1, 2, 1, 1, 1);
  console.log(result2);

  result3 = doesBrickFit(1, 2, 2, 1, 1);
  console.log(result3);
};

main();
