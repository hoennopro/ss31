function kiemTraKetThucChuoi(str, target) {
  let doDaiTarget = target.length;

  let ketQua = str.slice(-doDaiTarget) === target;

  return ketQua;
}

let chuoiGoc = "Chào mừng bạn";
let chuoiCon = "bạn";
let ketQua = kiemTraKetThucChuoi(chuoiGoc, chuoiCon);

if (ketQua) {
  console.log(`Chuỗi '${chuoiGoc}' kết thúc bằng chuỗi '${chuoiCon}'.`);
} else {
  console.log(`Chuỗi '${chuoiGoc}' không kết thúc bằng chuỗi '${chuoiCon}'.`);
}
