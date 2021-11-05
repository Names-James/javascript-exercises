//funtion that accepts an array and values
//returns an array with all the values with matching types removed
//if no values are passed, return an empty array
function removeFromArray(arr, ...values) {
  if (values.length === 0) {
    return [];
  }
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!values.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
// Do not edit below this line
module.exports = removeFromArray;
