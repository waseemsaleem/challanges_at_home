// challenge 5 => Difference of array
const getSymmetricDifference = (arr1, arr2) => {
  if (arr1.length <= 100 && arr2.length <= 100) {
    const x = arr1.filter((x) => !arr2.includes(x));
    const y = arr2.filter((x) => !arr1.includes(x));
    const symmetricDifference = x.concat(y);
    console.log(symmetricDifference, "difference of array");
    return symmetricDifference;
  }
  return;
};

let firstArray = [1, 2, 3];
let secondArray = [3, 4];
getSymmetricDifference(firstArray, secondArray);
