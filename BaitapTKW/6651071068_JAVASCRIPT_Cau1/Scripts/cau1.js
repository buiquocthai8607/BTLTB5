
var a = 5, b = 6, c = 7;
var p = (a + b + c) / 2;
var dienTich = Math.sqrt(p * (p - a) * (p - b) * (p - c));

console.log(dienTich);                                             
window.alert("The area of the triangle is: " + dienTich.toFixed(2)); 
document.getElementById("ketqua").innerHTML = "The area of the triangle is: " + dienTich.toFixed(2);
