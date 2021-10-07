/*
  第一題
  關於 if 的敘述何者 "錯誤" ?
  a.if 的小括號內如果結果回傳為 true ，會執行大括號內的內容。
  b.關於流程判斷的題目可以使用 if 來撰寫。
  c.直接在 if 的括號內填入 true 也可以執行大括號內的內容。
  d.if 的小括號內不能放變數。

  ans : d; 可以放變數來判斷。
*/

/*
  第二題
  關於 if else 的敘述何者 "錯誤" ?
  a.可以在 if 判斷式後新增 else，不執行 if 區塊時，就會執行 else。
  b.if、else 只會執行其中一項，不會 if、else 都執行。
 c.如果要新增多組條件，可以在 if 後新增多組 else。
  d.else 不需要新增小括號。

  ans : c； 新增多組 else if。
*/

/*
  第三題
  關於 else if 的敘述何者 "錯誤" ?
  a.可以用來新增多組條件。
  b.必須使用小括號來放條件。
  c.跟 if 、 else 只能有一組不同，else if 可以新增多組。
  d.else if 不能新增多組。

  ans : d; 可以新增多組。
*/

/*
  第四題
  請問以下選項一 、 選項二 、 選項三應該填入什麼條件 ?
  // 小明想喝飲料，但他不確定錢包剩多少錢
  // 有 70 元喝咖啡
  // 有 50 元喝珍奶
  // 有 30 元喝綠茶
  // 都不符合就不喝飲料
  let wallet = 60;
  if (`選項一`) {
    console.log("小明跑去喝咖啡了");
  } else if (`選項二`) {
    console.log("小明跑去喝珍奶了");
  } else if (`選項三`) {
    console.log("小明跑去喝綠茶了");
  } else {
    console.log("小明不喝飲料了");
  }
  a.選項一 ： wallet >= 70 、 選項二 ： wallet >= 50 、 選項三 ： wallet >= 30。
  b.選項一 ： wallet >= 30 、 選項二 ： wallet >= 50 、 選項三 ： wallet >= 70。
  c.選項一 ： wallet > 70 、 選項二 ： wallet > 50 、 選項三 ： wallet > 30。
  d.選項一 ： wallet > 30 、 選項二 ： wallet > 50 、 選項三 ： wallet > 70。

  ans : a;
*/

/*
  第五題
  請問以下選項一 、 選項二 、 選項三應該填入什麼條件 ?
  // 小美想買零食，但她不確定錢包剩多少錢
  // 超過 40 元買洋芋片
  // 超過 20 元買蘋果麵包
  // 超過 10 元棒棒糖
  // 都不符合就不吃零食
  let wallet = 30;
  if (`選項一`) {
    console.log("小美跑去買洋芋片");
  } else if (`選項二`) {
    console.log("小美跑去買蘋果麵包");
  } else if (`選項三`) {
    console.log("小美跑去買棒棒糖");
  } else {
    console.log("小明不吃零食");
  }
  a.選項一 ： wallet >= 40 、 選項二 ： wallet >= 20 、 選項三 ： wallet >= 10。
  b.選項一 ： wallet > 40 、 選項二 ： wallet > 20 、 選項三 ： wallet > 10。
  c.選項一 ： wallet > 10 、 選項二 ： wallet > 20 、 選項三 ： wallet > 40。
  d.選項一 ： wallet >= 10 、 選項二 ： wallet >= 20 、 選項三 ： wallet >= 40。

  ans : b;
*/