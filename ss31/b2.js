function timSoLonNhat(...mangArrays) {
  let ketQua = [];

  for (let mang of mangArrays) {
    if (mang.length > 0) {
      let soLonNhatTrongMang = Math.max(...mang);
      ketQua.push(soLonNhatTrongMang);
    } else {
      ketQua.push(undefined);
    }
  }

  return ketQua;
}

let ketQua = timSoLonNhat([1, 5, 2, 8], [9, 3, 7], [4, 6]);
console.log("Số lớn nhất trong từng mảng:", ketQua);
