function chunkArrayInGroups(mang, n) {
  let mangChia = [];

  for (let i = 0; i < mang.length; i += n) {
    let mangCon = mang.slice(i, i + n);
    mangChia.push(mangCon);
  }

  return mangChia;
}

let mangGoc = [1, 2, 3, 4, 5, 6, 7, 8];
let n = 3;
let ketQua = chunkArrayInGroups(mangGoc, n);
console.log(ketQua);
