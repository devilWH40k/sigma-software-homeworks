const _ = require("lodash");

function closestMinMaxLodash(a, b = null, c = null, sorted = false) {
  if (a.length % 2 !== 0)
    throw Error("this algorythm supports only even amount of elems");

  if (a.length === 0) return [b, c];

  b ??= [];
  c ??= [];

  if (!sorted) a.sort((a, b) => b - a);

  let minDiff = Math.abs(a[0] - a[1]);
  let minDiffPos = 0;

  const bcItems = _.reduce(
    a,
    (minDiffElems, _, i, arr) => {
      if (i === arr.lenght - 1) return minDiffElems;

      const diff = Math.abs(arr[i] - arr[i + 1]);

      if (diff <= minDiff) {
        minDiff = diff;
        minDiffElems = [];
        minDiffElems.push(arr[i], arr[i + 1]);
        minDiffPos = i;
      }

      return minDiffElems;
    },
    []
  );

  _.pullAt(a, [minDiffPos, minDiffPos + 1]);
  const [cItem, bItem] = bcItems;

  c.push(cItem);
  b.push(bItem);

  return closestMinMaxLodash(a, b, c, true);
}

function closestMinMax(a, b = null, c = null, sorted = false) {
  if (a.length % 2 !== 0)
    throw Error("this algorythm supports only even amount of elems");

  if (a.length === 0) return [b, c];

  b ??= [];
  c ??= [];

  if (!sorted) a.sort((a, b) => b - a);

  let minDiff = Math.abs(a[0] - a[1]);
  let bItem = a[1];
  let cItem = a[0];
  let minDiffPos = 0;

  for (let i = 1; i < a.length - 1; i++) {
    const diff = Math.abs(a[i] - a[i + 1]);

    if (diff < minDiff) {
      minDiff = diff;
      cItem = a[i];
      bItem = a[i + 1];
      minDiffPos = i;
    }
  }

  a.splice(minDiffPos, 2);

  c.push(cItem);
  b.push(bItem);

  return closestMinMax(a, b, c, true);
}

function main() {
  const [b, c] = closestMinMax([0.8, 1, 5, 9, 10, 10.5, -5, -3, 23, -40]);
  console.log(b, c);

  const [b2, c2] = closestMinMaxLodash([
    0.8, 1, 5, 9, 10, 10.5, -5, -3, 23, -40,
  ]);
  console.log(b2, c2, "(lodash)");
}

main();
