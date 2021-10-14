/*
  陣列的基礎寫法：
  外層使用中括號([])包覆，內層元素間用逗號(,)區隔，在讀取陣列時會由零開始。
  
  let array = [0, 1 ,2];
  console.log(array[0]);     // 陣列的讀取方法，從零開始
  console.log(array.length); // 讀取陣列長度
  
  陣列的新增方法
  let array = ['item1'];
  console.log(array); // ["item1"]
  
  陣列預設寫入資料
  array[1] = 'item2';
  console.log(array); // ["item1", "item2"]

  push 寫入資料(最後一筆)
  array.push('item3');
  console.log(array); // ["item1", "item2", "item3"]
  
  unshift 寫入資料(第一筆)
  array.unshift('item0');
  console.log(array); // ["item0", "item1", "item2", "item3"]
*/

// 問題一 以下為廚房現有的食材，請依照以下要求宣告陣列 :
// 新增一個名為 fruits 的變數，其值為一個陣列，裡面包含 ＂mango＂、＂strawberry＂、＂apple＂、＂cherry＂、＂orange＂、＂lemon＂。
// 新增一個名為 seasoning 的變數，其值為一個陣列，裡面包含 ＂pepper＂、＂salt＂、＂sugar＂、＂vinegar＂、＂honey＂。
let fruits = ["mango", "strawberry", "apple", "cherry", "orange", "lemon"];
let seasoning = ["pepper", "salt", "sugar", "vinegar", "honey"];

// 問題二 萱萱想依照廚房現有食材製作草莓果醬，請依照問題一宣告陣列後，透過步驟指引協助萱萱完成果醬 :
// 使用陣列的讀取方法，得到值為＂strawberry＂與＂lemon＂的資料
console.log(fruits[1], fruits[5]);
// 使用陣列的讀取方法，得到值為＂sugar＂與＂honey＂的資料
console.log(seasoning[2], seasoning[4]);
// 請透過 push 的方式將上方獲取到的四個值傳入＂strawberryJam＂新陣列中
let strawberryJam = [];
strawberryJam.push(fruits[1], fruits[5], seasoning[2], seasoning[4]);
console.log(strawberryJam);
// 請使用陣列方法輸出 strawberryJam 的長度
console.log(strawberryJam.length);
