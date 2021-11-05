/*
  第一題
  以下敘述何者 "錯誤" ?
  a.querySelector 可以用 CSS 選擇器的方式，來選擇想要的網頁元素。
  b.網頁瀏覽器產生時會先解析 document 而 document 底下有很多元素 Element。
  c.網頁會將 HTML 檔案解析成 DOM tree 節點樹狀圖。
  d.透過 textContent 寫入的文字，不會覆蓋舊的文字內容。

  ans : d; 會覆蓋舊的文字內容。
*/

/*
  第二題
  以下敘述何者 "錯誤" ?
  a.innerHTML 、 textContent 都可以穿插變數到帶入的字串內容。
  b.可以使用 setAttribute 去抓出想要的 HTML 標籤屬性。
  c.使用 querySelectorAll 重複選取多個元素後，讀取時要使用 [] 中括號的方式選取是第幾筆資料。
  d.可以透過 .value 的方式取出表單元素的值。

  ans : b; 使用 getAttribute。
*/

/*
  第三題
  以下敘述何者 "錯誤" ?
  a..innerHTML 可以取出 HTML 結構。
  b..textContent 可以去抓出文字內容。
  c..getAttribute 可以抓出屬性值。
  d.透過 .value 取出來的表單值，不只字串型別，也可能是數字型別。

  ans : d; 都是字串行別。
*/

/*
  第四題
  請參考以下 HTML 結構後，選出 "錯誤" 敘述的選項
  a.如果想將 a 標籤的文字內容 "連結" 改成 "連結一" 可以使用 textContent 的方式。
  b.如果想取出 input 表單元素的值，可以使用 .value 的方式。
  c.如果想在 img 標籤的 src 屬性添加圖片網址，可以使用 setAttribute 的方式。
  d.如果想在 h1 標籤內插入 HTML 結構，可以使用 getAttribute 的方式。
  ans : d; 使用 innerHTML。
*/

/*
  第五題
  請參考以下程式碼後，選出 console.log() 註解 "錯誤" 的選項
  <a href="#"></a>
  <a href="#"></a>
  <a href="#"></a>
  <input type="text" value="很棒的人才看得見的值">
  a.選項一
  const link = document.querySelectorAll("a");
  link.setAttribute("href", "http://www.google.con.tw/");
  b.選項二
  const input = document.querySelector("input").value;
  console.log(input); // 很棒的人才看得見的值
  c.選項三
  console.log(link[0].getAttribute("href")); // "#"
  d.選項四
  絕對不會是這個選項。
  ans : a; 使用 document.querySelector("a");
*/

/*
  第六題
  請參考以下程式碼後，選出 console.log() 註解 "錯誤" 的選項
  <button type="button">送出</button>
  <ul>
    <li>連結一</li>
  </ul>
  <h1 class="titile">標題</h1>
  a.選項一
  const button = document.querySelector("button");
  console.log(button.getAttribute("type")); // "button"
  b.選項二
  const listContent = document.querySelector("ul li");
  listContent.textContent = "新連結";
  console.log(listContent); // <li>新連結</li>
  c.選項三
  const list = document.querySelector("ul");
  list.innerHTML = "哈囉";
  console.log(list); // <li>哈囉</li>
  d.選項四
  絕對不會是這個選項。
  ans : c; <ul>哈囉</ul>
*/

/*
  第七題
  請參考以下程式碼後，選出 console.log() 註解 "錯誤" 的選項
  <h1 class="title">標題</h1>
  <button type="submit">送出</button>
  <input type="text" value="請填入帳號">
  <ul>
    <li>連結一</li>
  </ul>
  a.選項一
  const title = document.querySelector(".title");
  title.innerHTML = `<a href="#"></a>`;
  console.log(title); // <h1 class="title"><a href="#"></a></h1>
  b.選項二
  const button = document.querySelector("button");
  button.setAttribute("type", "button");
  console.log(button); // <button type="button">送出</button>
  c.選項三
  const list = document.querySelector("ul");
  list.innerHTML = "<li>連結二</li>";
  console.log(list); // <ul><li>連結一<li><li>連結二</li></ul>
  d.選項四
  絕對不會是這個選項。
  ans : c; <ul><li>連結二</li></ul>
*/

/*
  第八題
  以下敘述何者 "錯誤" ?
  a.由於程式碼會由上往下執行，所以 JavaScript 檔案如果要取 DOM，應該放置於 body 標籤的後方，確保網頁標籤載入完畢才執行。
  b.如果想監聽滑鼠 "點擊" 事件可以透過 addeventListener 去監聽 "change" 事件。
  c.e.target 會指向目前選取到的 DOM。
  d.表單的 type 屬性的值，如果是 submit ，會有預設傳資料到伺服器的效果。

  ans : b; "click。
*/

/*
  第九題
  以下敘述何者 "錯誤" ?
  a.querySelectorAll 選取後會回傳 nodeList 節點列表。
  b.preventDefault 可以取消預設的觸發行為，例如取消 a 連結轉址功能。
  c.Event 會顯示在 DOM 上所發生的事件，例如 ： 滑鼠點擊。
  d.addeventListener 只需要帶入一個參數 － 事件類型。

  ans : d; 需要帶兩個參數，第一個是觸發事件，第二個是調用函式。
*/

/*
  第十題
  筑子想監聽 list 的點擊事件，並使用 nodeName 監聽點擊到的是否為按鈕，請問以下哪個步驟 "有誤" ?
  const list = document.querySelector(".list"); // 步驟一
  list.addEventListener("click", function (e) { // 步驟二
    if (e.target.nodeName === "button") { // 步驟三
      console.log("我點擊到按鈕了");
    }
  }); 
  a.步驟一。
  b.步驟二。
  c.步驟三。
  d.沒有步驟四。

  ans : c; 大寫 "BUTTON"。
*/

/*
  第十一題
  請參考程式碼選出 "錯誤" 敘述的選項
  <h1 class="title">標題</h1>
  <ul class="list">
    <li>連結一</li>
    <li>連結二</li>
  </ul>
  <button type="submit">按鈕</button>
  a.如果想在 h1 標籤內插入 a 連結，可以使用 innerHTML 的方式。
  b.如果想監聽 list 的點擊事件可以使用 addeventListener 並註冊 'click' 事件類型。
  c.可以使用 preventDefault 取消表單元素預設的 submit 行為。
  d.如果想選取多個 li 可以使用 querySelector 的方式。

  ans : d; 使用 querySelectorAll。  
*/

/*
  第十二題
  珊珊想透過監聽按鈕點擊事件來寫一個加法器，請參考程式碼選出 "錯誤" 敘述的選項
  const button = document.querySelector("button");
  cost h1 = document.querySelector("h1");
  let count = 0;
  button.addEventListener("click", function (e) {
    e.preventDefault();
    count += 1;
    h1.textContent = conut;
  });
  a.可以將 let count = 0; 移進監聽函式內，不僅可以正常執行，還能減少全域變數。
  b.在不指定 button 按鈕 type 屬性的情況下，默認值是 submit。
  c.可以透過 e.preventDefault() 阻止 submit 的預設效果。
  d.透過 textContent 的方式將 count 變數的值賦予給 h1 標籤。

  ans : a; 不行，這樣 count 永遠會是 1。
*/

/*
  第十二題
  珊珊想透過監聽按鈕點擊事件來寫一個加法器，請參考程式碼選出 "錯誤" 敘述的選項
  const button = document.querySelector("button");
  cost h1 = document.querySelector("h1");
  let count = 0;
  button.addEventListener("click", function (e) {
    e.preventDefault();
    count += 1;
    h1.textContent = conut;
  });
  a.可以將 let count = 0; 移進監聽函式內，不僅可以正常執行，還能減少全域變數。
  b.在不指定 button 按鈕 type 屬性的情況下，默認值是 submit。
  c.可以透過 e.preventDefault() 阻止 submit 的預設效果。
  d.透過 textContent 的方式將 count 變數的值賦予給 h1 標籤。

  ans : a; 不行，這樣 count 永遠會是 1。
*/

/*
  第十三題
  請選出 "錯誤" 敘述的選項
  a.DOM 物件的根節點為 html 標籤。
  b.透過 .value 取出的表單欄位值，一定是字串型別。
  c.e.target 只會指向 document。
  d.querySelector 只會選取第一個節點，無法重複選取多個。

  ans : c; 
*/

/*
  第十四題
  請選出 "錯誤" 敘述的選項
  a.如果想選取 a 連結可以這樣撰寫 let link = document.querySelector('a');
  b.如果想在選項 A 選取的 link 內新增文字內容 "連結一" ，可以使用 link.textContent = 連結一;
  c.使用 textContent 、 innerHTML 時，也可以在想輸出的字串內帶入變數。
  d.addEventListener 傳入的第一個參數是事件類型，要記得使用單引號或雙引號包覆。

  ans : b; link.textContent = "連結一";(字串)
*/

/*
  第十五題
  小詩想監聽點擊按鈕 button 時，就在帶有 .list 類別的 ul 標籤內新增一筆 li ，卻發現每次都只能顯示一筆 "我是 li" 在畫面上，
  請選出 "正確""的原因
  const list = document.querySelector(".list");
  const button = document.querySelector("button");
  button.addEventListener("click", function (e) {
    e.preventDefault();
    let content = "我是 li";
    list.innerHTML = `<li>${content}</li>`;
  });
  a.她不應該監聽 "click" 事件，如果是點擊按鈕事件，應該使用 "change"。
  b.因為她使用了 e.preventDefault(); 取消預設效果，所以也取消了點擊事件。
  c.她的 querySelector 撰寫錯誤，應該要使用 querySelectorAll。
  d.其實有正常執行，但她使用 innerHTML 的方式，所以每次插入內容時都會覆蓋掉舊的。

  ans : d; 
*/