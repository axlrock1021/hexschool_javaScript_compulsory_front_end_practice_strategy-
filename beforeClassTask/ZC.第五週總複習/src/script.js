/*
  第一題
  請問以下關於 forEach 的敘述何者 "錯誤" ?
  a.forEach 的第三個參數代表執行的陣列本身。
  b.三個參數都必須帶入才能執行 forEach。
  c.第一個參數代表當下陣列的值。
  d.forEach 的參數可以自定義名稱。

  ans : b;   
*/

/*
  第二題
  請問以下敘述何者 "錯誤" ?
  a.可以透過 axios 套件發送 AJAX get 網路請求。
  b.forEach 是一種陣列方法，且無法被中斷。
  c.AJAX 是一種非同步技術。
  d.forEach 最多可以帶入兩個參數。

  ans : d; 三個參數。   
*/

/*
  第三題
  請參考以下程式碼，選出 "錯誤" 敘述的選項
  let data = [1, 3, 5, 7, "10", "13"];
  let newData = [];
  data.forEach(function (item, index) {
    console.log(item); // 1
    if (typeof item === "number") {
      newData.push(item);
      console.log(item); // 2
    }
  })
  console.log(newData); // 3
  a.if(typeof item === "number") 可以拿來判斷當下陣列的值是否為數字型別。
  b.編號一的 console.log 總共會執行 6 次，分別印出 1 、 3 、 5 、 7 、 "10" 、 "13"。
  c.編號二 、 編號三的 console.log 不論執行次數與印出值都相同。
  d.可以透過陣列方法 forEach 的方式整理出想要的值。

  ans : c; 編號三只會印出一次。 
*/

/*
  第四題
  小美想將 data 內的奇數偶數分類出來，並放到 number 物件內，請參考以下未完成的程式碼，選出 "錯誤" 敘述的選項
  let data = [1, 2, 3, 4, 5, 6, 7];
  let number = {
    oddNum: [], // 奇數
    evenNum: [] // 偶數
  };
  data.forEach(function (item, index) {
    if ("選項 A : 判斷是否為偶數") {
      // 選項 B
    } else {
      // 選項 C
    }
  })
  a.選項 A 可以填入 item % 2 === 0 可以判斷陣列當下的值，是否能被 2 整除，可以整除為偶數。
  b.選項 B 可以填入 number.evenNum.push(item) 將值放進 evenNum 的陣列內。
  c.選項 C 可以填入 number.oddNum.push(index) 將值放進 oddNum 的陣列內。
  d.想確認結果，可以在 forEach 的大括號外透過 console.log(number) 印出 number 物件。

  ans : c; 改成 number.oddNum.push(item)。
*/

/*
  第五題
  請問以下敘述何者 "錯誤" ?
  a.除了透過瀏覽器發出網路請求外，也可以透過 JavaScript 發出網路請求。
  b.innerHTML 放在 forEach 內跟 forEach 外執行次數與成果都一樣。
  c.Fetch 比 XMLHttpRequest 新，在使用前要注意瀏覽器支援度。
  d.304 代表該筆資料已經有載入過，不會再跟伺服器要資料，會使用暫存的檔案。

  ans : b;   
*/

/*
  第六題
  請問填空處該如何撰寫，才能透過 data 陣列的值組出正確的資訊 ?
  let data = [
    {
      name: "小花冰果部",
      category: ["飲料冰品"],
    },
    {
      name: "六角咖哩飯",
      category: ["中式美食"],
    }
  ];
  const list = document.querySelector(`ul`);
  let str = "";
  data.forEach(function (item, index, array) {
    str += `<li> 店名 : ${填空處一}、食物種類 : ${填空處二}</li>`;
  });
  list.innerHTML = str;
  a.填空處一 ： item.name 、 填空處二 ： item.category。
  b.填空處一 ： index.name 、 填空處二 ： index.category。
  c.填空處一 ： array.name 、 填空處二 ： array.category[0]。
  d.填空處一 ： item.name 、 填空處二 ： item.category[0]。

  ans : d;   
*/

/*
  第七題
  小美在 HTML 寫了兩個 input 按鈕，分別為飲料冰品(value = "飲料冰品") 、 中式美食(value = "中式美食")，
  她想透過點擊按鈕來分辨是飲料冰品還是中式美食，但寫到一半卡住了，請參考以下未完成的程式碼，選出 "錯誤" 敘述的選項
  let data = [
    {
      name: "小花冰果部",
      category: ["飲料冰品"],
    },
    {
      name: "六角咖哩飯",
      category: ["中式美食"],
    }
  ];
  const filter = document.querySelector(`div`);
  const list = document.querySelector(`ul`);
  filter.addEventListener("click", function (e) {
    if ("選項一 : 判斷是否為 input") {
      let str = "";
      data.forEach(function (item, index, array) {
        if ("選項二 : 判斷點擊的值是否跟 category 內的值相同") {
          str += `<li> 店名 : ${item.name}、食物種類 : ${item.category[0]}</li>`;
        }
      });
      list.innerHTML = str;
    }
  });
  a.選項一應該填入 e.target.nodeName === "INPUT"。
  b.選項二應該填入 e.target.value === item.category[0]。
  c.選項一應該填入 e.target.nodeName === index.category[0]。
  d.可以透過 forEach 組字串。

  ans : c;   
*/

/*
  第八題
  以下敘述何者 "錯誤" ?
  a.想跟伺服器要資料可以透過 AJAX 方法發送 get 請求。
  b.request headers 內通常會夾帶發送請求方的個人資訊。
  c.response headers 內通常會夾帶發送請求方的個人資訊。
  d.透過 AJAX 方法發送 get 請求，當資料還沒回傳時，程式碼還是會繼續往下執行。

  ans : c;   
*/

/*
  第九題
  小花想透過 axios 套件發出 get 請求撈取資料，請參考程式碼，選出 "錯誤" 敘述的選項
  axios."選項一"("選項二")
    .then(function ("選項三") {

    })
  a.選項一要帶入 get。
  b.選項二要帶入想發送請求的網址。
  c.選項三可以帶入兩個參數，分別為 item 、 index。
  d.get 請求發送後並不會立刻執行 .then 的內容，會等到資料回傳後才會執行。

  ans : c; 一個參數 response。 
*/

/*
  第十題
  請參考以下程式碼，選出 "錯誤" 敘述的選項
  axios.get(`https://hexschool.github.io/ajaxHomework/data.json`)
    .then(function (response) {
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);
    })
  a.response 會回傳一個物件，裡面包含很多屬性。
  b.statusText 會印出 HTTP 狀態碼消息，例如 ： 'OK'。
  c.response.headers 可以看到檔案的詳細資訊，例如：['content-type']。
  d.撈取到的資料會放在 response.config。

  ans : d;  response.data。
*/

/*
  第十一題
  請問以下敘述何者 "錯誤" ?
  a.在瀏覽器輸入網址時等同於對方伺服器傳送了一個網路請求給瀏覽器。
  b.response headers 內通常會夾帶檔案的格式。
  c.狀態碼 500 代表伺服器端發生未知或無法處理的錯誤。
  d.可以透過 CDN 的方式載入 axios 套件。

  ans : a; 顛倒，是瀏覽器送了一個網路請求給伺服器。
*/

/*
  第十二題
  小美想印出回傳的值，卻發現怎麼印都印出空陣列，請幫她選出 "正確" 的原因
  let ary = [];
  axios.get(`https://hexschool.github.io/ajaxHomework/data.json`)
    .then(function (response) {
      ary = response.data
    });
  function renderData () {
    console.log(ary);
  }
  renderData();  
  a.let ary = []; 要移入 .then 的大括號 {} 內。
  b."https://hexschool.github.io/ajaxHomework/data.json" 網址外不用包覆引號。
  c.renderData() 應該放在 .then 的大括號內程式碼 ary = response.data 的下方。
  d.參數名稱 response 應該命名成 request。

  ans : c;  
*/

/*
  第十三題
  承上題，小美將調整後，發現可以印出回傳的值了，她很好奇原因，請選出 "正確" 的原因
  let ary = [];
  axios.get(`https://hexschool.github.io/ajaxHomework/data.json`)
    .then(function (response) {
      ary = response.data;
      renderData();  
    });
  function renderData () {
    console.log(ary);
  }
  a.因為程式碼是由下往上執行，所以先執行了 renderData() 導致印不出來。
  b.因為 axios.get 請求會比較久，所以一率先跳過先不發送請求，等全部程式碼執行完，才執行。
  c.因爲 AJAX 非同步的關係，所以 renderData () 要在確認接收回傳結果後才呼叫。
  d.因為 renderData() 放在全域的情況下會呼叫不到，所以只能印出空陣列。

  ans : c;  
*/

/*
  第十四題
  請參考以下程式碼，選出 "錯誤" 敘述的選項
  axios.get(`https://soweb.kcg.gov.tw/webapi/api/Category`)
    .then(function (response) {
      data = response.data;
      renderData();  
    });
  function renderData () {
    let str = "";
    data.forEach(function (item) {
      str += `<li>${item.kind_name}</li>`
    });
    list.innerHTML = str;
  }
  a.可以透過包裝函式，並於資料確認回傳後，再去呼叫該函式，確保能撈到資料。
  b.如果將 list.innerHTML = str 移進 forEach 大括號內，也能正常執行，但效能較差。
  c.renderData() 內會去執行組字串並渲染在網頁上。
  d.將 let str = "" 移進 forEach 內也能正常執行。

  ans : d;  
*/

/*
  第十五題
  小花有好幾處填空處不會寫，請幫她選出填空處填寫 "正確" 的解答
  const list = document.querySelector("ul");
  let data = [];
  axios.get(`https://hexschool.github.io/ajaxHomework/data.json`)
    .then(function (response) {
      data = "選項一";
      renderData();  
    });
  function renderData () {
    let str = "";
    data."選項二"(function ("選項三") {
      str += `<li>${item.name}</li>`
    });
    list."選項四" = str;
  }
  a.選項一 ： response 、 選項二 ： map 、 選項三 ： item 、 選項四 ： textContent。
  b.選項一 ： response.data 、 選項二 ： forEach 、 選項三 ： index 、 選項四 ： innerHTML。
  c.選項一 ： response、選項二 ： findIndex、選項三 ： item 、 選項四 ： textContent。
  d.選項一 ： response.data、選項二 ： forEach、選項三 ： item 、 選項四 ： innerHTML。

  ans : d;  
*/