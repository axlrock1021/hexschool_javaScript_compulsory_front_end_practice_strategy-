/*
  第一題
  以下關於 forEach 參數的敘述何者 "錯誤" ?
  a.第一個參數為當下陣列的值。
  b.第二個參數為迭代資料的索引值。
  c.第三個參數為執行的陣列本身。
  d.參數無法自定義名稱。

  ans : d; 參數可以自定義名稱。
*/

/*
  第二題
  以下關於 forEach 參數的敘述何者 "錯誤" ?
  let data = [8, 7, 6];
  let total = 0;
  data.forEach(function (item, index) {
    total += item;
    console.log(total); // 1
  });
  console.log(total); // 2
  a.註解 1 的 console.log(total);，總共會執行三次，分別印出 8、15、21。
  b.註解 2 的 console.log(total);，總共會執行一次，印出 21。
  c.將 let total = 0; 移至 forEach 的 {} 大括號內，數字依然可以正常累加。
  d.total += item; 的 item 指的是當下陣列的值。

  ans : c; 不行， total 的值不會累加，永遠會是 8、7、6。 
*/

/*
  第三題
  請參考以下程式碼，選出 "錯誤" 敘述的選項
  let data = [1, 2, 3, 4];
  let total = 0;
  let newData = [];
  data.forEach(function (item, index) {
    if (item % 2 === 0) {
      total += item;
      newData.push(item);
      console.log(total); // 1
    }
  });
  console.log(newData); // 2
  console.log(total); // 3
  a.註解 1 的 console.log(total);，總共會執行兩次，分別印出 2、6。
  b.註解 2 的 console.log(newData);，總共會執行一次，印出 [1, 2, 3, 4]。
  c.註解 3 的 console.log(total);，總共會執行一次，印出 6。
  d.if 判斷式的條件 item % 2 === 0 是為了判斷陣列當下的值，能不能被 2 整除。

  ans : b; 會印出 [2, 4]。 
*/

/*
  第四題
  請參考以下程式碼，選出 "錯誤" 敘述的選項
  let data = [
    {
      type: "水果",
      month: "1",
      crop: "椪柑",
      variety: "",
      county: "苗栗縣",
      town: "卓蘭鎮"
    },
    {
      type: "水果",
      month: "1",
      crop: "椪柑",
      variety: "",
      county: "台中市",
      town: "東勢區"
    }
  ];
  data.forEach(function (item, index) {
    // 請選出錯誤的敘述選項
    // A - D 選項程式碼放置位置
  });
  a.如果要讀取水果品種 type ，可以透過 console.log(item[i].crop); 的方式。
  b.如果要讀取月份 month ，可以透過 console.log(item.month); 的方式。
  c.如果要得知目前跑到第幾筆資料可以透過 console.log(index); 的方式。
  d.console.log(item); 會獲得整筆物件。

  ans : a;  console.log(item.crop);。
*/

/*
  第五題
  小美想根據 data 的種類 type 分類，去累加分類數量，卻發現一直無法累加，請幫她選出 "正確" 的原因
  let data = [
    {
      type: "水果",
      crop: "椪柑",
    },
    {
      type: "花卉",
      crop: "玫瑰",
    }
  ];
  let type = {
    fruits: 0,
    flowers: 0
  };
  data.forEach(function (item, index) {
    if (item === "水果") {
      type.fruits += 1;
    } else {
      type.flowers += 1;
    }
  });
  console.log(type); // {fruits: 0, flowers: 0}
  a.type.fruits += 1 、 type.flowers += 1 應該改成 type[0]fruits += 1 、 type[0]flowers += 1。
  b.條件式的 item 應該改成 index ，例如 if (index === "水果")。
  c.console.log(type) 放進去 forEach 的大括號 {} 內就能正常顯示。
  d.條件式的 item 忘了用點記法 . 選取 type ，應該改成 if (item.type === "水果")。

  ans : d;  
*/