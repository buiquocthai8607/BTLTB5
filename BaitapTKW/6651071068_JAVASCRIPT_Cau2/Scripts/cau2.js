
var nam = parseInt(prompt("Nhập năm:", "2024"));
var nhuan = (nam % 4 === 0 && nam % 100 !== 0) || (nam % 400 === 0);
document.write("Năm " + nam + (nhuan ? " là năm nhuận." : " không phải năm nhuận."));
