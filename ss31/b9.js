function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }

  return undefined;
}

let mangTangDan = [-4, -3, -2, -1, 0, 1, 2, 3, 5];
let ketQua = sumZero(mangTangDan);

if (ketQua) {
  console.log(`Cặp số có tổng bằng 0: [${ketQua[0]}, ${ketQua[1]}]`);
} else {
  console.log("Không có cặp số nào có tổng bằng 0.");
}
