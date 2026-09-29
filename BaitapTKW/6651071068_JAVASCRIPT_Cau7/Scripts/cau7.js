function laNamNhuan(y) {
    return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
}
function soNgayTrongThang(m, y) {
    switch (m) {
        case 4: case 6: case 9: case 11: return 30;
        case 2: return laNamNhuan(y) ? 29 : 28;
        default: return 31;
    }
}
var d = parseInt(prompt("Nhập ngày:"));
var m = parseInt(prompt("Nhập tháng:"));
var y = parseInt(prompt("Nhập năm:"));

if (isNaN(d) || isNaN(m) || isNaN(y) || m < 1 || m > 12 || d < 1 || d > soNgayTrongThang(m, y)) {
    console.log("Ngày tháng năm không hợp lệ!");
} else {
    d++;
    if (d > soNgayTrongThang(m, y)) {
        d = 1;
        m++;
        if (m > 12) { m = 1; y++; }
    }
    console.log("Ngày kế tiếp: " + d + "/" + m + "/" + y);
}
