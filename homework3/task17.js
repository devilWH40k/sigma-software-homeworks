const reformate = function (arr, endIndex = arr.length, firstCycle = true) {
  if (Math.ceil(arr.length / 2) === endIndex) return arr;

  const startIndex = firstCycle ? 0 : 1;

  const minElem = Math.min(...arr.slice(startIndex, endIndex));
  const minElemIndex = arr.indexOf(minElem);

  if (firstCycle) {
    [arr[0], arr[minElemIndex]] = [arr[minElemIndex], arr[0]];
    endIndex++;
  } else {
    [arr[minElemIndex], arr[endIndex - 1]] = [
      arr[endIndex - 1],
      arr[minElemIndex],
    ];
  }

  return reformate(arr, --endIndex, false);
};

const main = function () {
  const test_arr1 = reformate([23, 21, 3, 5, -3, 45, 17]);
  console.log(test_arr1);

  const test_arr2 = reformate([2, -2, 3, 5, 4, 1, 19]);
  console.log(test_arr2);
};

main();
