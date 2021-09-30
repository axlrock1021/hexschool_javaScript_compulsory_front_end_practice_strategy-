// 以下變數 a, b, c, d, e, f 它們的值、型別各自為何 ?
// 第一題 題目
let a = 1 +"2"+ 3 ;
let b = "1" * "1";
let c = 2 - "1";
let d = 1 > 2;
let e = 2 > 1;
let f = "我好棒" - 1;

// 第一題 答案
a = "123" // string
b = 1     // number
c = 1     // number
d = false // boolean
e = true  // boolean
f = NaN   // number
// 透過 console.log 放入各變數確認值、型別：
console.log(a, b, c, d, e, f); 
console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f);


// 以下選項哪些有問題，請指出有問題的答案，並回答為什麼。
// 第二題 題目及答案

// const 在原始型別不能重複賦予值
// const HexSchool = "六角";
// HexSchool = "六角學院";

// const 不能重複宣告
// const HexSchoolMail = "service@hexschool.com";
// const HexSchoolMail = "service@hexschool.com.tw";

// 沒問題
let studentNum = 20000;
studentNum = 30000;

// 不能使用保留字當變數
// let const = const;

// 不能使用數字開頭當變數
// const 123 = 123;