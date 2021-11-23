/*
  觀念複習
  1.axios 環境安裝
    透過 axios 套件連結 CDN 的方式，載入套件，並將程式碼放置於個人 JavaScript 檔案上方。
  
  2.axios - 嘗試串接外部資料
    axios.get 範例程式碼 ：
    axios.get('放入想撈取的 JSON 連結(url)')
      .then(function (response) {
      // 回傳的結果
      console.log(response);
      // 抓回來的 JSON 資料
      console.log(response.data);
      // 回傳的狀態碼
      console.log(response.status);
    });
*/

// 情境題 ： 六角學院內舉行了第一屆程式碼發問大賽。
// 龜人 : 「那個，我想問寫完程式後，身體是不是會有磁力 ?」
// 魚魚 : 「那個，我想問 Ray 助教，請問他被稱為六角吉祥物針對這件事他有什麼看法 ?」
// 艾草發現同學發問題目越來越天馬行空後，決定參考高雄市市政 FAQ 的分類，讓同學依據類型去發揮。

// JSON 檔案網址
const url = "https://soweb.kcg.gov.tw/webapi/api/Category/";
const list = document.querySelector(".list");
let data = [];

// 步驟一
// 於 HTML 貼上 axios CDN 連結
// 將撈取回來的資料賦予在變數 data 上
// 透過 console.log 觀看是否正確撈取資料
axios.get(url).then((res) => {
  data = res.data;
  console.log(data);
  // 以下步驟皆於 axios {} 大括號內執行
  // 步驟二
  // 請宣告一個變數 str 並賦予值為字串型別的空字串
  // 請透過 data 陣列跑 forEach ，並至少帶入第一個參數
  let str = "";
  data.forEach((item) => {
    // 步驟三
    // 以下步驟在 forEach {} 大括號內執行
    // 請將以下內容賦予給 str
    // str += `<li>${填空處：請填入 kind_name 的值}</li>`;
    let content = `<li>${item.kind_name}</li>`;
    str += content;
  });
  // 步驟四
  // 以下步驟在 forEach {} 大括號外執行
  // 請透過 innerHTML 給 list 變數賦予值
  // 該值為變數 str
  list.innerHTML = str;
});