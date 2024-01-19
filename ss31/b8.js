function fakeReduce(mang, callback, giaTriKhoiDau) {
  let accumulator = giaTriKhoiDau !== undefined ? giaTriKhoiDau : mang[0];
  let startIndex = giaTriKhoiDau !== undefined ? 0 : 1;

  for (let i = startIndex; i < mang.length; i++) {
    accumulator = callback(accumulator, mang[i], i, mang);
  }

  return accumulator;
}

let ketQua = fakeReduce(
  mangGoc,
  function (accumulator, currentValue) {
    return accumulator + currentValue;
  },
  0
);

console.log(ketQua);
