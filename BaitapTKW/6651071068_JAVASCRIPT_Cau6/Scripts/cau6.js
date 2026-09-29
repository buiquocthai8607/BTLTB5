// Câu 6: Giải phương trình bậc 2 ax^2 + bx + c = 0
var a = parseFloat(prompt("Nhập a:"));
var b = parseFloat(prompt("Nhập b:"));
var c = parseFloat(prompt("Nhập c:"));
var kq;
if (isNaN(a) || isNaN(b) || isNaN(c)) {
    kq = "Hệ số nhập không hợp lệ!";
} else if (a === 0) {
    if (b === 0) {
        kq = (c === 0) ? "Phương trình vô số nghiệm." : "Phương trình vô nghiệm.";
    } else {
        kq = "Phương trình bậc nhất, nghiệm x = " + (-c / b);
    }
} else {
    var delta = b * b - 4 * a * c;
    if (delta < 0) {
        kq = "Phương trình vô nghiệm (Δ < 0).";
    } else if (delta === 0) {
        kq = "Phương trình có nghiệm kép x = " + (-b / (2 * a));
    } else {
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);
        kq = "Phương trình có 2 nghiệm phân biệt:\nx1 = " + x1 + "\nx2 = " + x2;
    }
}
alert(kq);
