/*
  觀念一 : 函式參數介紹
  function a(num, num2) {
    console.log(num);
    console.log(num2);
  }
  a(1, 2); // 呼叫並帶入參數至函式 a（num 為 1 、 num2 為 2）
  a(3, 4); //（num 為 3 、 num2 為 4）
  觀念補充 ： 參數只存活在大括號
  console.log(num) // 會被誤會成是變數，但沒有 num 這個變數，會報錯。

  觀念二 : 參數寫法 - 兩個數字相加工具
  可以嘗試呼叫想相加的數值，並觀察結果：
  function add(num1, num2) {
    console.log(`您加總的數字為${num1 + num2}`);
  }
  add(2, 3);

  觀念三 : return 寫法教學
  function calcTotalScore(chineseScore, mathScore) {
    return chineseScore + mathScore; // 回傳，會把值回傳到呼叫 calcTotalScore 的地方。
  }
  // return 回傳後的值，可以被賦予在變數上。
  // 宣告一個變數，名為 markTotalScore，並賦予右邊函式的值。
  let markTotalScore = calcTotalScore(40, 60); // 會先將參數丟進 calcTotalScore 函式運算後，接收 return 回傳的值。
  console.log(markTotalScore) // 100

  觀念四 : return 可以有多個
  範例一 ： return 會中斷函式執行，後面的程式碼不會執行。
  function calcTotalScore(chineseScore, mathScore) {
    return chineseScore + mathScore; // return 會中斷該函式。
    // 以下都不會執行
    console.log('123');
    return 123;
  }
  let shannonScore = calcTotalScore(80, 20);

  範例二 ： 搭配 if else if 可以撰寫多個 return。
  // 檢查學生成績是否及格的函式。
  function checkScore(score) {
    if(score >= 60){
      return '及格';
    } else {
      return '不及格';
    }
  console.log('123'); // 因為前方有 return 中斷函式，所以不會執行。
  }
  let shannonScore = checkScore(50);
  console.log(shannonScore); // 不及格
  let tomScore = checkScore(80);
  console.log(tomScore) // 及格
*/

// 題目一
// 請參考觀念二 - 參數寫法 - 兩個數字相加工具後，撰寫出兩個數字相減工具，並透過 return 的方式，賦予回傳的值至以下變數
function minus(num1, num2) {
  let total = num1 - num2;
  return total;
}
let num = minus(4, 3);
console.log(num);

// 題目二
/*
  情境題
  炎炎夏日，小格到豆花專賣店前想吃一碗豆花
  1.豆花內用售價為 56 元
  2.豆花外帶售價為 61 元
  3.小格現有財產為 60 元
  參數對照表 ：
  num 豆花數量
  price 豆花售價
  isTakeout 是否外帶
  於是小格寫出以下程式碼想判斷自己能不能購買成功!
  請參考以上四個 function 觀念，協助小格使用 console.log 印出結果。
*/
function checkOrder(num, price, isTakeout) {
  if (isTakeout === true) {
    if (calTotal(num, price) <= 60) {
      return "外帶成功!";
    } else {
      return "外帶失敗!";
    }
  } else if (isTakeout === false) {
    if (calTotal(num, price) <= 60) {
      return "內用成功!";
    } else {
      return "內用失敗!";
    }
  } else {
    return "用餐方式輸入錯誤!";
  }
}
function calTotal(num, price) {
  return num * price;
}

// 情境一 : 小格想內用一碗豆花
// 請呼叫 checkOrder 函式並依照情境帶入參數
// 使用下方 console.log() 印出結果
console.log(checkOrder(1, 56, false));

// 情境二 ： 小格想外帶一碗豆花
// 請呼叫 checkOrder 函式並依照情境帶入參數
// 使用下方 console.log() 印出結果
console.log(checkOrder(1, 61, true));