/*
  第一題
  以下變數何者值的型別為字串 ?
  a.let a = 1;
  b.let b = "我好棒";
  c.let c = true;
` d.let d = null;

  ans : b； (a 是 number 、 c 是 boolean 、 d 是 object)。
*/

/*
  第二題
  以下變數何者的值型別為 Boolean ?
  a.let a = 1;
  b.let b = "你好棒";
  c.let c = 2 > 1;
  d.let d;

  ans : c； (a 是 number 、 b 是 string 、 d 是 undefined)。
*/

/*
  第三題
  以下變數何者的值型別為 undefined ?
  a.let a;
  b.let b = "我們都很棒";
  c.let c = 123;
  d.let d = null;

  ans : a; (b 是 string 、 c 是 number 、 d 是 object)。
*/

/*
  第四題
  以下程式碼，變數值的型別分別為何 ?
  let a = 1 + 1;
  let b = 1 + "1";
  let c = a + b;
  a.皆為字串。
  b.皆為數字。
  c.a = 數字 、 b = 字串 、 c = 數字。
  d.a = 數字 、 b = 字串 、 c = 字串。

  ans : d;
*/

/*
  第五題
  以下程式碼，變數值的型別分別為何 ?
  let a = 2 > 1;
  let b = "1" * "1";
  let c = "2" * "哈囉妳好嗎 ?";
  a.皆為字串。
  b.a = 布林 、 b = 字串 、 c = 數字。
  c.a = 布林 、 b = 數字 、 c = 數字。
  d.a = 數字 、 b = 字串 、 c = 字串。

  ans : c;
*/

/*
  第六題
  以下程式碼，變數的值與值的型別分別為何 ?
  let a = 1;
  let b = 2;
  a += 1;
  a++;
  b += "1";
  a.a = 數字 3 、 b = 字串 "21"。
  b.a = 字串 3 、 b = 數字 21。
  c.a = 數字 3 、 b = 數字 21。
  d.a = 字串 "3" 、 b = 字串 "21"。

  ans : a;
*/

/*
  第七題
  請問以下關於字串型別的敘述何者為 "錯" ?
  a.字串內文如果含單引號 ，例如 It's OK ，那外層要使用雙引號才不會報錯。
  b.字串可以使用加號連結其他字串。
` c.可以使用 length 確認字串字元數。
  d.可以使用 typeof 幫字串轉型成數字。

  ans : d typeof 是查看什麼型別，轉型是用 parseInt();
*/

/*
  第八題
  請問以下關於數字型別的敘述何者為 "錯" ?
  a.數字型別可以使用 % 符號取餘數。
  b.數字型別可以使用 ** 符號來平方。
  c.NaN 也是數字型別。
  d.數字型別不能與字串型別使用加號連接。

  ans : d 可以。
*/

/*
  第九題
  以下敘述何者 "錯誤" ?
  a.console.log(3 > 2)，回傳的 true 為布林值。
  b.undefined 表示被賦予了空值。
  c.可以使用 alert() 彈跳式視窗或 console.log() 來除錯。
  d.想清空資料時可以使用 null。

  ans : b null 才是表示被賦予了空值。
*/

/*
  第十題
  以下敘述何者 "錯誤" ?
  a.NaN 是數字型別，所以拿來運算也沒問題。
  b.樣板字面值要使用 `` 包覆起來。
  c.null 跟 undefined 不一樣。
  d.undefined 的型別為 undefined。

  ans : a 不能運算。
*/

/*
  第十一題
  想清空字串前後的空格可以使用下列哪個方法 ?
  a.trim()。
  b.parseInt()。
  c.toString()。
  d.console.log()。

  ans : a (b 字串轉數字 、 c 數字轉字串 、 d 印出資料)。
*/

/*
  第十二題
  請問以下欄位可以填寫什麼答案 ?
  1.小美去速食店買了薯條、可樂。
  2.一份薯條 30 元。
  3.一杯可樂 25 元。
  4.小美買了 3 份薯條、5 杯可樂
  let friesPrice = 30;
  let colaPrice = 25;
  cost = (`待填答欄位`);
  a.cost = friesPrice * 3 + colaPrice * 5 ;
  b.cost = friesPrice * 5 + friesPrice * 3;
  c.cost = friesPrice * 5 + friesPrice * 3;
  d.cost = friesPrice * 5 + colaPrice * 3 ;

  ans : a
*/

/*
  第十三題
  請問以下程式碼該使用何種宣告方式 ?
  服飾店內
  情況一 : 易變動的顧客洋裝購買數量
  dressNum = 2;
  情況二 : 萬年不變的打折數
  sale = 0.9;
  a.洋裝購買量用 const 、打折數用 let。
  b.洋裝購買量用 let 、打折數用 const。
  c.都使用 const。
  d.都使用 let。

  ans : b
*/

/*
  第十四題
  以下為 let 、 const 的描述，何者 "錯誤" ?
  a.let 、 const 都可以重新賦予原始型別的值。
  b.let 可以重新賦予值 、 const 在原始型別難以被覆寫。
  c.let 可以拿來宣告易更改的變數、const 可能拿來宣告固定的變數。
  d.let 、 const 都無法被重複宣告。

  ans : a const 不能改值
*/

/*
  第十五題
  請參考以下程式碼，選出 a 、 b 正確值、型別
  let a = "1";
  let b = 2;
  b++;
  b += a;
  a = parseInt(a);
  a.a = 數字 1 、 b = 字串 "31"。
  b.a = 字串 "1" 、 b = 數字 31。
  c.a = 字串 "1" 、 b = 字串 "31"。
  d.a = 數字 1 、 b = 數字 31。

  ans : a
*/