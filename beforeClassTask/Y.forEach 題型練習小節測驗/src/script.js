/*
  第一題
  以下敘述何者 "錯誤" ?
  a.可以透過 forEach 組字串後，在使用 innerHTML 渲染在網頁上。
  b.forEach 是物件的方法。
  c.forEach 會遍歷每一筆資料。
` d.在 forEach 大括號 {} 內用 let 宣告的變數為區域變數。

  ans : b; 是陣列的方法。
*/

/*
  第二題
  請問填空處該如何撰寫，才能顯示 data 陣列內對應的值 ?
  let data = [
    {
      month: "12",
      crop: "印度棗"
    },
    {
      month: "4",
      crop: "蝴蝶蘭"
    }
  ];
  const list = document.querySelector("ul");
  let str = "";
  data.forEach(function (item, index, array) {
    str += `<li>作物 : ${填空處一}、盛產月份 : ${填空處二}</li>`;
  });
  list.innerHTML = str;
  a.填空處一 ： item.crop 、 填空處二 ： item.month。
  b.填空處一 ： index.crop 、填空處二 ： index.month。
  c.填空處一 ： array.crop 、填空處二 ： array.month。
  d.絕對不會是這個選項。

  ans : a; 
*/

/*
  第三題
  小美在 HTML 寫了兩個 input 按鈕，分別為水果(value="水果")、花卉(value="花卉")，她想透過點擊按鈕來分辨是水果還是花卉，
  但寫到一半碰到判斷式時卡住了，請參考她的程式碼幫她選出判斷式該如何撰寫 ?
  let data = [
    {
      type: "水果",
      crop: "椪柑"
    },
    {
      type: "花卉",
      crop: "玫瑰"
    }
  ];
  // 此 div.typeFilter 內包含兩顆按鈕
  const typeFilter = document.querySelector("div");
  typeFilter.addEventListener("click", function (e) {
    if (e.target.nodeName === "INPUT") {
      data.forEach(function (item, index, array) {
        if ("請協助判斷點擊到的值是否跟 data 內的 type 值相同") {
      
        }
      });
    }
  });
  a.if (e.target.value === data.type)。
  b.if (e.target.value === index.type)。
  c.if (e.target.value === item.type)。
  d.if (e.target.value === item[i]type)。

  ans : c; 
*/

/*
  第四題
  承上題，小美寫完以下程式碼後，拿去給小明觀看，小明給了她一些優化的建議，請問哪個建議明顯是 "錯誤"的 ?
  let data = [
    {
      type: "水果",
      crop: "椪柑"
    },
    {
      type: "花卉",
      crop: "玫瑰"
    }
  ];
  const typeFilter = document.querySelector("div");
  typeFilter.addEventListener("click", function (e) {
    const list = document.querySelector("ul"); // 選項 A
    if (e.target.nodeName === "INPUT") {
      let str = ""; // 選項 B
      data.forEach(function (item, index, array) { // 選項 C
        if (e.target.value === item.type) {
          str += `<li>作物種類 : ${item.type}、作物名稱 : ${item.crop}</lli>`;
          list.innerHTML = str; // 選項 D
        }
      });
    }
  });
  a.如果選項 A 其他地方也會使用到，可以拉出監聽函式外。
  b.選項 B 會建議移至 forEach 大括號內，放在大括號外如果要取用該變數會比較麻煩。
  c.選項 C 不一定每個參數都要帶，可以帶會使用到的 item 即可。
  d.選項 D 可以拉出 forEach 大括號外，因為放在 forEach 內如果資料量大，會一直被執行，浪費效能。

  ans : b; 要放在函式外面，變成全域變數，才會紀錄儲存資料。
*/

/*
  第五題
  承上題，小美優化後，決定補一個全部(value="全部")的 input 按鈕，但她又不會寫判斷式了，請參考她的程式碼幫她選出判斷式該如何撰寫 ?
  let data = [
    {
      type: "水果",
      crop: "椪柑"
    },
    {
      type: "花卉",
      crop: "玫瑰"
    }
  ];
  const typeFilter = document.querySelector("div");
  const list = document.querySelector("ul");
  typeFilter.addEventListener("click", function (e) {
    if (e.target.nodeName === "INPUT") {
      let str = "";
      data.forEach(function (item) {
        if ("請幫小美撰寫此處邏輯") {
          str += `<li>作物種類 : ${item.type}、作物名稱 : ${item.crop}</lli>`;
        } else if (e.target.value === item.type) {
          str += `<li>作物種類 : ${item.type}、作物名稱 : ${item.crop}</lli>`;
          list.innerHTML = str; // 選項 D
        }
      });
    }
  });
  list.innerHTML = str;
  a.if (e.target.value === "全部")。
  b.if (e.target === "全部")。
  c.if (item.type === "全部")。
  d.if (item.value === "全部")。

  ans : a;
*/