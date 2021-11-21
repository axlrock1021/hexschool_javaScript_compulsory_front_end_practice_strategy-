/*
  第一題
  以下敘述何者 "錯誤" ?
  a.發出網路請求的 JavaScript 原生寫法包含 ： XMLHttpRequest 、 Fetch。
  b.XMLHttpRequest 是較傳統的寫法，寫法較冗長。
  c.可透過 axios 套件發出網路請求， axios 的程式碼較簡短。
  d.Fetch 比 XMLHttpRequest 舊，所以不用擔心瀏覽器支援度。

  ans : d;  
*/

/*
  第二題
  請參考以下程式碼選出 "錯誤" 敘述的選項
  axios.get(`http://hexschool.github.io/ajaxHomework/data.json`)
  .then(function (response) {
    console.log(response);
    console.log(response.data);
    console.log(response.status);
    console.log(response.headers);
  })
  a.response 為物件格式。
  b.response.status 會印出 HTTP 狀態碼，例如 200。
  c.response.data 的值為實際上撈回來的 JSON 資料。
  d.通常會拿 response.headers 的資料來做 forEach。

  ans : d;  會拿 response.data 的資料來做 forEach。
*/

/*
  第三題
  小美想利用 axios.get 去撈取遠端資料，卻發現無法正確顯示，請幫她選出 "正確" 的原因
  axios.get(http://hexschool.github.io/ajaxHomework/data.json)
  .then(function (res) {
    console.log(res);
  })
  a.不能將參數命名為 res ，必須使用 response。
  b.不能使用 axios.get 要使用 axios.post。
  c.她帶入的網址外層忘了使用單引號或雙引號包覆。
  d.axios.get 的參數只能帶入物件。

  ans : c;  
*/

/*
  第四題
  請參考以下程式碼，選出 "錯誤" 敘述的選項 ?
  let ary = [];
  axios.get(http://hexschool.github.io/ajaxHomework/data.json)
  .then(function (response) {
    ary = response.data;
    console.log(ary); // 1
  });
  console.log(ary); // 2
  a.console.log 的執行順序會是 2 、 1。
  b.axios.get 發送請求後等待回覆時程式碼會先繼續往下執行。
  c.兩個 console.log 印出資訊是相同的。
  d.第一個 console.log(ary) 會印出 response.data 回傳的結果。

  ans : c; 不一樣，第一個會印出 response.data 回傳的結果，第二個會印出空陣列。
*/

/*
  第五題
  請參考以下程式碼，選出 "錯誤" 敘述的選項 ?
  let ary = [];
  axios.get("https://hexschool.github.io/ajaxHomework/data.json")
  .then(function (response) {
    ary = response.data;
    renderData();
  });
  function renderData() {
    console.log(ary);
  }
  console.log(ary);
  a.執行到 axios.get 時會發出網路請求，等待回覆前會繼續往下執行程式碼。
  b.函式要等到被呼叫時，才會去註冊。
  c.當資料回傳後才會去執行 .then 的函式，並將回傳結果帶到該函式的參數 response 上。
  d.要確保非同步的情況拿到回傳的資料，可以註冊函式後，等資料回傳在呼叫該函式。

  ans : b; 先註冊函式，再呼叫函式。
*/