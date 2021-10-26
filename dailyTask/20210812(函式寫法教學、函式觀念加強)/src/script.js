// 觀念一 : 函式寫法教學 機器人 - 早起活動 - 起床刷牙洗臉出門
// 步驟一 : 幫函式取個語意化的名字
function morningAction() {
  // 步驟二 : 放入希望函式執行的內容
  console.log("起床");
  console.log("刷牙");
  console.log("洗臉");
  console.log("出門");
}
// 步驟三 : 最後別忘記呼叫函式，也可以呼叫多次唷！
morningAction();
morningAction();

// 觀念二 : 註冊多組函式流程 機器人 - 早起活動 - 起床刷牙洗臉出門
function morningAction() {
  console.log("起床");
  console.log("刷牙");
  console.log("洗臉");
  console.log("出門");
}
// 機器人 - 晚上活動
function nightAction() {
  console.log("回家");
  console.log("刷牙");
  console.log("洗臉");
  console.log("睡覺");
}
// 當呼叫到對應名稱的函式時，會依序去執行大括號裡面的內容
morningAction(); // 執行順序一
nightAction(); // 執行順序二（等待一執行完成才會執行二）

// 觀念三 : 函式裡面仍可以執行函式 機器人 - 早起活動 - 起床刷牙洗臉出門
function morningAction() {
  console.log("起床");
  cleanHead(); // 會先執行 cleanHead 函式大括號裡的內容
  console.log("出門");
}
//機器人 - 晚上活動
function nightAction() {
  console.log("回家");
  cleanHead(); //會先執行 cleanHead 函式大括號裡的內容
  console.log("睡覺");
}
// 將共同使用到的部分，拉出來獨立成一個函式，可以使程式碼分工更明確
function cleanHead() {
  console.log("刷牙");
  console.log("洗臉");
}
// 當呼叫到對應名稱的函式時，會依序去執行大括號裡面的內容
morningAction(); // 執行順序一
nightAction(); // 執行順序二（等待一執行完成才會執行二）

// 情境題：王小明是一隻貓咪，他想透過定義函式的方式，來記錄他每天的行動，請透過以下步驟協助他完成這個函式。
// 步驟一 請定義一個函式，函式名稱為 catAction 。
// 步驟二 請在函式的大括號內透過 console.log 印出相關資料
function catAction() {
  console.log("起床");
  console.log("叫主人起床");
  console.log("嫌棄飼料難吃");
  console.log("上廁所，不撥沙");
  console.log("把桌上的水撥到地版");
  console.log("睡覺");
}
// 步驟三 請呼叫 catAction 。
catAction();
