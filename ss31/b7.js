function fakeFilter(mang, dieuKien) {
  let ketQua = [];

  for (let i = 0; i < mang.length; i++) {
    if (dieuKien(mang[i], i, mang)) {
      ketQua.push(mang[i]);
    }
  }

  return ketQua;
}

let mangGoc = [1, 2, 3, 4, 5, 6, 7, 8];

function dieuKienChan(so) {
  return so % 2 === 0;
}

let ketQua = fakeFilter(mangGoc, dieuKienChan);
console.log(ketQua);
