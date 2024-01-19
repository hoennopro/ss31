function truncate(chuoi, n) {
  if (chuoi.length <= n) {
    return chuoi;
  } else {
    return chuoi.slice(0, n) + "...";
  }
}

let chuoiGoc = "Chuỗi ví dụ để kiểm tra hàm truncate";
let chuoiRutGon = truncate(chuoiGoc, 20);
console.log(chuoiRutGon);
