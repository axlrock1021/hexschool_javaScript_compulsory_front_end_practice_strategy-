// 第一題
// 請問以下變數的型別、值分別為何？
let a = 1 + "我好棒";  // 型別 : 字串、值 : "1我好棒"
let b = 1 * "我好棒";  // 型別 : 數字、值 : NaN
let c = 2 > 1;        // 型別 : 布林、值 : true
let d = 1 < 2;        // 型別 : 布林、值 : true
let e;                // 型別 : undefined、值 : undefined

// 第二題
// 請利用賦值運算子計算冰箱布丁剩餘數量：
/*
  冰箱裡原有 15 顆布丁
  被妹妹拿走了 3 顆
  被姊姊拿走了 5 顆
  媽媽又冰了 10 顆
  弟弟拿走了 2 顆
*/
let puddingNum = 15;
puddingNum -= 3;
puddingNum -= 5;
puddingNum += 10;
puddingNum -= 2;
console.log(`布丁還有 ${puddingNum} 顆`);

// 第三題
// 小美去飲料店買了很多飲料，但她數學不好，請利用以下步驟幫小美算出購買總額：
/*
  1 杯紅茶 30 元，小美買了 2 杯，她將紅茶價格 * 紅茶數量，算出 60 元
  1 杯綠茶 25 元，小美買了 4 杯，她將綠茶價格 * 綠茶數量，算出 ?? 元
  1 杯奶茶 50 元，小美買了 6 杯，她將奶茶價格 * 奶茶數量，算出 ?? 元
*/
let bill = 0;
const blackTeaPrice = 30;
let blackTeaNum = 2;
const greenTeaPrice = 25;
let greenTeaNum = 4;
const milkTeaPrice = 50;
let milkTeaNum = 6;
bill += (blackTeaPrice * blackTeaNum) + (greenTeaPrice * greenTeaNum) + (milkTeaPrice * milkTeaNum);
console.log(`小美總共花了 ${bill} 元`);


// 第四題
// 請協助以下字串與數字轉型、過濾空白
let number = "123";                  // 將 number 轉型為數字
let string = 123;                    // 將 string 轉型為字串
let myEmail = "  1235487@gmail.com"; // 請將 myEmail 的空白過濾掉
number = parseInt(number);
string = string.toString();
myEmail = myEmail.trim();
console.log(number, string, myEmail);