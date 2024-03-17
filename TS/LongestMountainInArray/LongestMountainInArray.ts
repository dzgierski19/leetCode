function longestMountain(arr: number[]): number[] {
  const arr2: number[] = [];
  arr.reduce((acc, element, index, []) => {
    if (arr[index] < arr[index + 1]) {
      acc += 1;
      if (arr[index + 1] > arr[index + 2]) {
        arr2.push(acc);
      }
    }

    return acc;
  }, 1);
  const max = Math.max(...arr2);
  // console.log(arr2);
  const spliced = arr.splice(1);
  // console.log(spliced);

  return arr2;
}

const exampleArr = [4, 2, 4, 5, 6, 2, 7];
const result = longestMountain(exampleArr);

console.log(result);
