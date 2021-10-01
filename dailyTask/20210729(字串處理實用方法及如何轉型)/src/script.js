// 題目一
// 請使用 trim() 的方式將以下字串濾掉空白：
let myEmail = "  123456@gmail.com";
let myPassword = "    987654321";
myEmail = myEmail.trim();
myPassword = myPassword.trim();
console.log(myEmail);
console.log(myPassword);

// 第二題
// 請使用 parseInt() 將以下字串轉型為數字：
let a = "1";
let b = "2";
a = parseInt(a);
b = parseInt(b);
let c = a + b;
console.log(c);

// 第三題
// 請使用 toString() 將以下數字轉型為字串：
let countryCode = 886;
let myNumber = 123456789;
countryCode = countryCode.toString();
myNumber = myNumber.toString();
let myPhoneNumber = countryCode + "+" + myNumber;
console.log(myPhoneNumber);