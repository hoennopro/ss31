function timTuDaiNhat(chuoi) {
  let mangTu = chuoi.split(" ");

  let tuDaiNhat = "";
  for (let i = 0; i < mangTu.length; i++) {
    if (mangTu[i].length > tuDaiNhat.length) {
      tuDaiNhat = mangTu[i];
    }
  }

  let cacTuBangNhau = mangTu.filter((tu) => tu.length === tuDaiNhat.length);

  if (cacTuBangNhau.length > 1) {
    return {
      tu: cacTuBangNhau[0],
      doDai: tuDaiNhat.length,
    };
  } else {
    return {
      tu: tuDaiNhat,
      doDai: tuDaiNhat.length,
    };
  }
}

let chuoiTest = "Chuỗi ví dụ để kiểm tra hàm timTuDaiNhat";
let ketQua = timTuDaiNhat(chuoiTest);
console.log(`Từ dài nhất là '${ketQua.tu}' có độ dài ${ketQua.doDai}`);
