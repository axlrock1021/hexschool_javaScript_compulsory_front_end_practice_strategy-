/*
  第一題
  以下關於 Event 事件的敘述何者 "錯誤" ?
  a.可以透過 DOM 綁定 HTML 元素，並註冊監聽事件進行。
  b.如果想要偵測使用者點擊可以使用 "click" 事件。
  c.Event 中並不包含滑鼠滾輪事件。
  d.Event 中包含網頁伸縮事件。

  ans : c;
*/

/*
  第二題
  以下關於 addeventListener 的敘述何者 "錯誤? ?
  a.可以針對按鈕註冊點擊的監聽事件。
  b.可以透過 Chrome 開發者工具內的 Event Listeners 去觀看是否註冊事件監聽成功。
  c.addEventListener() 帶入的第一個參數會是要監聽的事件類型，例如 "click"。
  d.addEventListener() 帶入的第二個參數會是一個函式，該函式內可以傳入參數 event ，該參數無法自定義名稱。

  ans : d; 函式的參數可以自定義名稱。
*/

/*
  第三題
  以下敘述何者 "錯誤? ?
  a.e.target 可以知道目前點擊到的 DOM 位置。
  b.可以透過 nodeName 來了解是哪個 HTML 標籤，例如 "BUTTON"。
  c.可以透過 e.nodeName.target 的方式，來得知自己點擊到哪個 HTML 標籤。
  d.preventDefault 可以取消表單元素預設的 submit 行為。

  ans : c; 正確的方式為 e.target.nodeName。
*/

/*
  第四題
  請參考以下程式碼，選出 "錯誤" 的答案 ?
  <input type="button" value="送出">
  <a href="#">連結</a>
  <ul class="list">
    <li></li>
  </ul>
  a.透過 DOM 選取 input 元素後，可以透過 addEventListener 在該元素上註冊監聽 "click" 點擊事件。
  b.註冊監聽後執行 console.log(e.target.nodeName) 跟 console.log(e.target) 印出的結果會相同。
  c.選取 a 元素節點後註冊監聽點擊事件，可以透過 e.preventDefault() 阻止 a 連結預設行為。
  d.選取 li 節點後註冊監聽事點擊件，可以透過 if (e.target.nodeName === "LI") 判斷是否點擊到的是 li 標籤。

  ans : b; e.target.nodeName = INPUT 、 e.target = <input type="button" value="送出">。
*/

/*
  第五題
  請參考以下程式碼，選出 "不適當" 的撰寫方式
  const myLinks = document.querySelector("a");
  const list = document.querySelector(".list");
  myLinks.addEventListener("click", function (e) { // 選項一
    e.preventDefault(); // 選項二
  });
  list.addEventListener("click", function (e) { // 選項三
    if (e.target === "BUTTON") { // 選項四
      console.log("送出");
    }
  });
  a.選項一是透過 addEventListener 去註冊監聽 myLinks 的 "click" 點擊事件。
  b.選項二是透過 e.preventDefault() 去阻止 myLinks 的預設行為。
  c.選項三是透過 addEventListener 去註冊監聽 list 的 "click" 點擊事件。
  d.選項四是透過 e.target 去判斷是否為 HTML 標籤 "BUTTON"。

  ans : b; e.target.nodeName 才是。
*/
