// Câu 22: Nhân / chia hai số nguyên từ form
var ketqua = document.getElementById("ketqua");

// Lấy và kiểm tra dữ liệu nhập, trả về [a, b] hoặc null nếu không hợp lệ
function layHaiSo() {
    var s1 = document.getElementById("so1").value.trim();
    var s2 = document.getElementById("so2").value.trim();
    var laSoNguyen = /^-?\d+$/;

    if (!laSoNguyen.test(s1) || !laSoNguyen.test(s2)) {
        hienThi("Vui lòng nhập hai số nguyên hợp lệ!", true);
        return null;
    }
    return [parseInt(s1), parseInt(s2)];
}

function hienThi(noiDung, laLoi) {
    ketqua.textContent = noiDung;
    ketqua.className = laLoi ? "loi" : "";
}

function nhan() {
    var so = layHaiSo();
    if (so) hienThi(so[0] * so[1], false);
}

function chia() {
    var so = layHaiSo();
    if (!so) return;
    if (so[1] === 0) {
        hienThi("Không thể chia cho 0!", true);
    } else {
        hienThi(so[0] / so[1], false);
    }
}

document.getElementById("btnNhan").addEventListener("click", nhan);
document.getElementById("btnChia").addEventListener("click", chia);
