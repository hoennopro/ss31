function maxSubArraySum(arr, n) {
  if (n > arr.length) {
    return null;
  }

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

let mangSo = [1, 2, 5, 2, 8, 1, 5];
let doDaiCon = 3;
let ketQua = maxSubArraySum(mangSo, doDaiCon);
console.log("Tổng lớn nhất của mảng con:", ketQua);
