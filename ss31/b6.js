let nums = [3, 5, 4, 1, 10];

let findElement = nums.find(function (e, i) {
  return e === 5;
});
function fakeFind(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    let test = fn(arr[i]);
    if (test === true) {
      return arr[i];
    }
  }
}

let res1 = fakeFind(nums, function () {
  return e === 10;
});
let res2 = fakeFind(nums, function () {
  return e === 10;
});
let res3 = fakeFind(nums, function () {
  return e === 10;
});
console.log(findElement);
console.log(res1);
console.log(res2);
console.log(res3);
