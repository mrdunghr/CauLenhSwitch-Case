let thang1 = '1';
let thang2 = '2';
let thang3 = '3';
let thang4 = '4';
let thang5 = '5';
let thang6 = '6';
let thang7 = '7';
let thang8 = '8';
let thang9 = '9';
let thang10 = '10';
let thang11 = '11';
let thang12 = '12';
// Cách 1 if elseif
// function KiemTraThang(){
//     let thang = document.getElementById('Month').value;
//     if (thang == thang1 || thang == thang3 || thang == thang5 || thang == thang7 || thang == thang8 || thang == thang10 || thang == thang12){
//         document.getElementById('KetQua').innerHTML = 'Tháng ' + thang + ' Có 31 ngày';
//     } else if (thang == thang4 || thang == thang6 || thang == thang9 || thang == thang11){
//         document.getElementById('KetQua').innerHTML = 'Tháng ' + thang + ' Có 30 ngày';
//     }else if (thang == thang2){
//         document.getElementById('KetQua').innerHTML = 'Tháng ' + thang + ' Có 28 hoặc 29 ngày';
//     }else{
//         document.getElementById('KetQua').innerHTML = 'Chỉ có 12 tháng thôi, LÀM GÌ CÓ THÁNG NÀY';
//     }
// }

//Cách 2 switch-case
function KiemTraThang() {
    let thang = document.getElementById('Month').value;
    switch (thang) {
        case thang1:
        case thang3:
        case thang5:
        case thang7:
        case thang8:
        case thang10:
        case thang12:
            document.getElementById('KetQua').innerHTML = 'Tháng ' + thang + ' Có 31 ngày';
            break;
        case thang4:
        case thang6:
        case thang9:
        case thang11:
            document.getElementById('KetQua').innerHTML = 'Tháng ' + thang + ' Có 30 ngày';
            break;
        case thang2:
            document.getElementById('KetQua').innerHTML = 'Tháng ' + thang + ' Có 28 hoặc 29 ngày';
            break;
        default:
            document.getElementById('KetQua').innerHTML = 'Chỉ có 12 tháng thôi, LÀM GÌ CÓ THÁNG NÀY';
    }
}