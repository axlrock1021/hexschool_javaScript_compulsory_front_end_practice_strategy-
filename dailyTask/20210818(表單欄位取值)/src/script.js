/*
  觀念複習
  觀念一 ： .value 取值
  可以透過 .value 來取出表單元素 Elements ，但要注意取出的值都會是 "字串"。
    input 欄位取值示範 ：
    HTML ：
    <input type="text" class="txt" value="你好棒！">
    JavaScript ：
    // 先透過 querySelector 選取 class txt
    const txt = document.querySelector(".txt");
    console.log(txt.value) // 你好棒！
    
    input 欄位賦予值示範 ：
    txt.value = "大家都很棒！";
    修改後： 
    console.log(txt.value) // 大家都很棒！

    select 取值示範 ：
    HTML ：
    <select class="list">
      <option value="蘋果">蘋果</option>
      <option value="水蜜桃">水蜜桃</option>
      <option value="西瓜">西瓜</option>
    </select>
    JavaScript ：
    // 先透過 querySelector 選取 class list
    const list = document.querySelector('.list');
    console.log(list.value) // 蘋果
    select 賦予值示範 ：
    list.value = "水蜜桃";
    修改後 ：
    console.log(list.value) // 水蜜桃

  觀念二 ： addeventListener
  可透過 addeventListener 監聽網頁 Event 事件 ：
    HTML ：
    <input type="button" class="btn" value="點擊">
    <h1></h1>
    JavaScript ：
    // 先透過 querySelector 選取 class btn
    const btn = document.querySelector('.btn');
    // 先透過 querySelector 選取 h1 Element
    const title = document.querySelector('h1');
    // 監聽 click 事件，點擊了按鈕，就會觸發函式的內容
    btn.addEventListener("click", function (e) {
    title.textContent = "你被點擊了！！";
    });
    點擊後效果 ：
    按下 btn，h1標題會出現 "你被點擊了！！" 文字內容
*/

// 題目一
// 情境題 ： 鵬聖在路上走著走著撿到了一張傳單，上頭寫著 ：
// 你已被幸運喵喵造訪，透過以下步驟解鎖更多貓貓的私密照吧！ Σ>―(〃°ω°〃)♡→
// 備註 ： 本企劃執行期間沒有任何貓奴受到傷害
// 身為貓奴的他，當然不會放過這個機會，請依照下方指示協助他完成任務。

// 步驟一
// 請透過 querySelector 選取下方 4 個 HTML 標籤 :
// <input class="m-3 p-1" type="number">
// <button id="send" type="button" class="btn btn-dark">送出</button>
// <img class="picture" src="https://pse.is/3jxbf2" alt="">
// <span class="txt">0</span>
const input = document.querySelector("input");
const send = document.querySelector("#send");
const picture = document.querySelector(".picture");
const txt = document.querySelector(".txt");
// 步驟二
// 請利用步驟一選取的 button 送出按鈕
// 透過 addEventListener 監聽 'click' 事件
send.addEventListener("click", function (e) {
  // 步驟三
  // 請注意 ： 以下步驟皆在步驟二監聽函式的 {} 大括號內處理
  // 使用 .value 的方式取出步驟一選取的 input 欄位值
  // 將 input 欄位的值，使用 textContent 的方式，賦予到步驟一選取的 <span class="txt">0</span> 上
  // 針對步驟一選取的圖片 picture 使用 setAttribute 將 src 屬性值改為 "https://pse.is/3mcgfu"
  let num = input.value;
  txt.textContent = num;
  picture.setAttribute("src", "https://pse.is/3mcgfu");
});

// 題目二
// 承上題，透過 if else 流程判斷，更換不一樣的貓貓圖片吧！
if (num >= 10000) {
  picture.setAttribute("src", "https://pse.is/3le5vy");
} else {
  picture.setAttribute("src", "https://pse.is/3mcgfu");
}

// 底下為小彩蛋，打開註解後，瘋狂點圖囉 !
// let count = 0;
// picture.addEventListener("click", function (e) {
//   count += 1;
//   if (count % 2 === 0) {
//     picture.setAttribute("src", "https://pse.is/3h85x6");
//   } else {
//     picture.setAttribute("src", "https://pse.is/3mcgfu");
//   }
//   txt.textContent = count;
//   if (count >= 10000) {
//     picture.setAttribute("src", "https://pse.is/3le5vy");
//   }
// });