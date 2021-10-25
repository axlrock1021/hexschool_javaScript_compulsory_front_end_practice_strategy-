/*
  第一題
  以下有關函式 function 的敘述何者 "錯誤" ?
  a.函式可以帶入參數。
  b.函式只能呼叫一次。
  c.函式的參數只會存活在函式的作用域 {} 大括號內。
  d.可以透過 return 的方式回傳函式裡面的值。

  ans : b; 可以呼叫多次。
*/

/*
  第二題
  請觀察以下程式碼，並選出 console.log 會如何印出 ?
  function morningAction () {
    console.log("起床");
    cleanHead();
    console.log("出門");
  }
  function nightAction () {
    console.log("回家");
    cleanHead();
    console.log("睡覺");
  }
  function cleanHead () {
    console.log("刷牙");
    console.log("洗臉");
  }
  nightAction();
  a.起床、出門、刷牙、洗臉。
  b.起床、出門、回家、睡覺。
  c.回家、刷牙、洗臉、睡覺。
  d.刷牙、洗臉、回家、睡覺。

  ans : c;
*/

/*
  第三題
  請觀察以下程式碼，並選出 console.log 會如何印出 ?
  function add (num1, num2) {
    let total = num1 + num2;
    console.log(num1);
    console.log(num2);
    console.log(total);
  }
  add(1, 2);
  a.3、2、1。
  b.1、2、3。
  c.2、1、3。
  d.3、1、2。

  ans : b;
*/

/*
  第四題
  如上題，小明希望能將 total 賦予到他新增的變數 mingTotal 上，請幫他選擇該新增哪行程式碼上去 ?
  function add (num1, num2) {
    let total = num1 + num2;
    // 在此應該新增什麼程式碼，幫助小明回傳值呢?
  }
  let mingTotal = add(30, 40);
  a.console.log(total)。
  b.return mingTotal。
  c.return total。
  d.不用新增程式碼，現在這樣 mingTotal 也會接收到計算後的值。

  ans : c;
*/

/*
  第五題
  請觀察以下程式碼後，選出回答 "錯誤" 的選項
  function checkScore (score) {
    if (score >= 80) {
      return "總分達到 80 以上";
    } else if (score >= 60) {
      return "總分達到 60 以上";
    } else if (score >= 40) {
      return "總分達到 40 以上";
    } else {
      return "總分達到 20 以上";
    }
    console.log('100');
  }
  let shannonScore = checkScore(50);
  a.console.log('100') 會執行，但要等到 if 判斷式的流程執行完後。
  b.shannonScore 會被賦予字串型別為 "總分達到 40 以上" 的值。
  c.將 return 搭配 if else if 的情境使用時 return 可以多組。
  d.執行到 return 後就會中斷該函式，所以 console.log('100') 不會執行。

  ans : a;
*/

/*
  第六題
  請觀察以下程式碼後，回答 total 目前的值為何 ?
  let total = 0;
  function add (num) {
    total += num;
  }
  add(3);
  add(2);
  a.0。
  b.5。
  c.2。
  d.3。

  ans : b;
*/

/*
  第七題
  請觀察以下程式碼後，選出回答 "錯誤" 的選項
  let count = 0;
  function checkNumber (myInput) {
    count += 1;
    if (myInput % 2 === 0) {
      // B 選項
      return "是偶數";
    } else {
      // B 選項
      return "不是偶數";
    }
    // C 選項
  }
  let checkSevenNumber = checkNumber(7);
  a.count 會依據呼叫的次數，不斷累加 1。
  b.count 可以放置於程式碼中 B 選項的地方。
  c.count 可以放置於程式碼中 C 選項的地方。
` d.checkSevenNumber 會被賦予字串型別的 "不是偶數" 值。

  ans : c; 
*/
