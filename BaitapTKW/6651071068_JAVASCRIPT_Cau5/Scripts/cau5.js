function laNguyenTo(n) {
    if (n < 2) return false;
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
var n = parseInt(prompt("Nhập một số nguyên dương:"));
if (isNaN(n) || n <= 0) {
    alert("Giá trị nhập không hợp lệ!");
} else {
    alert(n + (laNguyenTo(n) ? " là số nguyên tố." : " không phải là số nguyên tố."));
}
