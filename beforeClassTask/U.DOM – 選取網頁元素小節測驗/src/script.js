/*
  第一題
  請問以下敘述何者 "錯誤" ?
  a.網頁會將 HTML 檔案解析成 DOM tree 節點樹狀圖。
  b.網頁瀏覽器打開時會自動產生 document。
  c.如果想載入 JavaScript 檔案，可以只加 src 屬性後將檔案放在 HTML 的 head 標籤內，一樣可以順利讀取 body 標籤的節點。
  d.HTML 標籤為 document 的根元素 （Root element）。

  ans : d; 要放在 body 最後面，前面的 Dom 元素才讀取的到。 
*/

/*
  第二題
  請問以下 querySelector 選取網頁上元素的方式何者 "錯誤" ?
  <h1 class="logo" id="title"></h1>
  a.const el = document.querySelector('h1');
  b.const logo = document.querySelector('.logo');
  c.const title = document.querySelector('#title');
  d.const h1 = document.querySelector(h1);

  ans : d; 需要雙引號包覆。 
*/

/*
  第三題
  請問以下 textContent 的敘述何者 "錯誤" ?
  a.textContent 會覆蓋掉原本的文字內容。
  b.使用 textContent 能修改文字節點。
  c.textContent 可以在文字中插入 HTML 標籤，並且在網頁上正確顯示。
  d.要選取網頁上的 h1 元素，並改寫文字內容，可以透過 document.querySelector('h1').textContent = "修改後的文字內容"; 的方式。

  ans : c; 不能，只能修改文字內容。  
*/

/*
  第四題
  請問以下 innerHTML 的敘述何者 "錯誤" ?
  a.innerHTML 可以插入 HTML 標籤元素，並且在網頁上正確顯示。
  b.innerHTML 不會覆蓋掉原標籤內容。
  c.innerHTML 帶入的字串內容也可以插入變數。
  d.innerHTML 會覆蓋掉原標籤的內容。

  ans : b; 會覆蓋掉原標籤的內容。  
*/

/*
  第五題
  請參考以下程式碼，選出 "錯誤" 敘述的答案
  // 選項一
  const a = document.querySelector('a');
  // 選項二
  a.setAttribute('href', 'https://www.google.com.tw/');
  // 選項三
  const el = document.querySelector('h1');
  el.textContnet = `<a href="#">連結</a>`;
  // 選項四
  const myLinks = document.querySelector('a');
  myLinks.setAttribute('href', 'https://www.google.con.tw/');
  a.選項一是透過 querySelector 選取了a 連結節點。
  b.選項二是透過 setAttribute 將 href 屬性改寫為 'https://www.google.com.tw/'。
  c.選項三應該要改成使用 innerHTML 的方式才能順利插入 a 標籤。
  d.選項四是透過 setAttribute 可以將多個 a 元素的 href 屬性值改為 'https://www.google.com.tw/'。

  ans : d; setAttribute 只會選取到第一個元素。
*/