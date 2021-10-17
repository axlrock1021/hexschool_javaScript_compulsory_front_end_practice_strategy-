/*
  第一題
  以下關於陣列的敘述何者 "錯誤" ?
  a.陣列裡面也可以是空的。
  b.陣列外層要使用 [] 中括號包覆。
  c.陣列的中括號內只需要放值。
  d.陣列內的值要用 ; 分號隔開。

  ans : d; 要用 , 逗號隔開。
*/

/*
  第二題
  以下關於陣列讀取敘述何者 "錯誤" ?
  a.陣列要使用 [] 中括號去讀取。
  b.想讀取陣列的長度可以使用 length。
  c.可以讀取陣列資料後賦予到一個新的變數上。
  d.陣列的讀取是從一開始算起。

  ans : d； 從零開始算起。
*/

/*
  第三題
  關於下列程式碼，陣列寫入資料流程的敘述何者 "錯誤" ?
  let fruits = [];
  fruits[0] = "apple";
  fruits.push("strawberry");
  fruits.unshift("mango");
  console.log(fruits);
  a.fruits[0] = "apple"; 代表在陣列第 0 筆資料中新增了蘋果。
  b.使用 push 新增的值 "strawberry" 會被塞入在最後面。
  c.使用 unshift 新增的值 "mango" 會被塞入在最後面。
  d.使用 console.log(fruits) 查詢的結果應該是 ["mango", "apple", "strawberry"]。
  ans : c; 最前面。
*/

/*
  第四題
  關於下列程式碼，陣列刪除資料的敘述何者 "錯誤" ?
  let fruits = ["mango", "apple", "strawberry"];
  fruits.pop();
  fruits.shift();
  a.使用 pop 會刪除掉陣列中的最後一筆資料 "strawberry"。
  b.使用 shift 會刪除掉陣列中的最後一筆資料 "strawberry"。
  c.使用 shift 會刪除掉陣列中的第一筆資料 "mango"。
  d.最後陣列中只會剩下 "apple"。

  ans : b; 會刪除掉陣列中的第一筆資料。
*/

/*
  第五題
  關於 splice 的敘述何者 "錯誤" ?
  a.可以使用 splice 刪除指定位置的資料。
  b.splice 參數的第一個數字代表起始位置。
  c.splice 參數的第二個數字代表要往後刪除幾筆資料。
  d.如果對一個陣列使用 splice(0, 2) 代表我要從第零筆資料的位置去往前刪除兩筆資料。

  ans : d; 往後刪除兩筆資料。
*/

/*
  第六題
  關於下列程式碼，選出 "錯誤" 敘述的答案
  let fruits = [];
  fruits.push("strawberry");
  fruits.unshift("mango");
  fruits[0] = "apple";
  fruits.shift();
  fruits.splice(0, 1);
  a.陣列中已無僅存的值，變成空陣列 []。
  b.使用 unshift 新增的值會塞入在陣列的最前面。
  c.使用 splice 的方式可以指定自己要刪除哪筆資料。
  d.使用 shift 會刪除陣列的最後一筆資料。

  ans : d; 會刪除第一筆資料。
*/

/*
  第七題
  關於下列程式碼，選出 "錯誤" 敘述的答案
  let colors = ["red", "blue", "black"];
  a.如果想在陣列的後方塞入橘色可以使用 colors.push('orange')。
  b.如果想在陣列的前方塞入黃色可以使用 colors.shift('yellow')。
  c.如果想刪除陣列的最後一筆資料可以使用 colors.pop()。
  d.如果想在陣列的前方塞入綠色可以使用 colors.unshift('green')。

  ans : b; colors.unshift('yellow')。
*/

/*
  第八題
  如果想使用 splice 刪除陣列中的 'pink'、'red' 該怎麼寫 ?
  let colors = ["pink", red", "blue", "black"];
  a.colors.splice(1, 2)。
  b.colors.splice(0, 2)。
  c.colors.splice(0, 1)。
  d.colors.splice(1, 1)。

  ans : b;
*/