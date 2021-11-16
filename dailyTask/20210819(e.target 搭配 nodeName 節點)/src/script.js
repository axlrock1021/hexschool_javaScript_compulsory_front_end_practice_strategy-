/*
  觀念複習
  觀念一 ： event
  我們可以透過 event 來得知目前 DOM 所發生的事件，如點擊按鈕、按鍵盤等，可以與 addEventListener() 搭配使用，以下為示範 ：
  1.監聽使用者 click 點擊事件
    HTML ：
    <button type="button">送出</button>
    JavaScript ：
    // 先透過 querySelector 選取 button
    const button = document.querySelector("button");
    // 監聽使用者點擊就會執行大括號的內容
    button.addEventListener('click', function(e) {
    console.log('123') // 點擊按鈕就會印出 123
    })
  2.監聽使用者 keydown 鍵盤事件
    HTML ：
    <input type="text">
    JavaScript ：
    // 先透過 querySelector 選取 input
    const input = document.querySelector("input");
    // 監聽使用者按鍵盤就會執行大括號的內容
    input.addEventListener('keydown', function(e) {
    console.log(e.key);
    })

  觀念二 ： e.target 、 nodeName
  e.target 會指向目前選取到的 DOM 物件，可以搭配 nodeName 去得知目前點選的節點名稱，以下為示範 ：
  判斷是否點擊到按鈕
    HTML：
    <ul class="list">
      <li>內文</li>
      <li>內文<button type="button">按鈕</button></li>
      <li>內文</li>
    </ul>
    JavaScript ：
    // 先透過 querySelector 選取 class list
    const list = document.querySelector(".list");
    // 監聽使用者點擊就會執行大括號的內容
    list.addEventListener("click", function (e) {
    // 監聽使用者點擊到的是否為 <button></button> 按鈕
      if (e.target.nodeName === "BUTTON") {
        console.log("123"); 
      }
    });
*/

// 情境題
// 魚魚在逛購物網站，卻發現她不管點網站的哪裡，都會跑出彈跳式視窗顯示 ： 加入購物車成功。
// 讓她回想起童年時 Windows XP 跳出一排彈出視窗的恐怖回憶，腦海中彷彿迴盪著「登登 !」的音效聲。
// 魚魚崩潰大吼：「啊啊啊 ! 寫這什麼爛東西，我阿嬤都寫的比你好 ! 就交給我來改寫吧 !」
// 請依步驟協助修改此網頁
// 步驟一
// 請使用 querySelector 選取節點 <ul class="list row d-flex justify-content-between">
const list = document.querySelector(".list");
// 步驟二
// 將監聽的 document 改成步驟一選取的節點 ul.list
document.addEventListener("click", function (e) {
  // 步驟三
  // 請注意 ： 以下步驟皆在步驟二監聽函式的 {} 大括號內處理
  // 撰寫 if (`使用 e.target.nodeName 判斷是不是 BUTTON `) 判斷式
  // 如果成立的話顯示彈跳式視窗  alert('加入購物車成功 !')
  if (e.target.nodeName === "BUTTON") {
    alert("加入購物車成功！");
  }
});