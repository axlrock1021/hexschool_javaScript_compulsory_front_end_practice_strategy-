/*
  觀念複習
  觀念一 ： axios - 非同步觀念
  執行 AJAX 發送網路請求後，須等待對方回傳資料，在對方尚未回傳資料時，會繼續往下執行程式碼，
  等對方回傳後再回去執行 .then 函式大括號的內容。
  let ary = [];
  // 發送請求
  axios.get('https://hexschool.github.io/ajaxHomework/data.json')
    .then(function (response) {
    // 等待對方回傳資料後執行
      ary = response.data;
      console.log(ary) // 印出 response.data 回傳結果
  });
  //先執行，所以會印出空陣列
  console.log(ary) // []
  
  觀念二 ： 透過函式設計處理非同步
  函式處理非同步好處 ： 可以確保資料有回傳後才執行函式。
  let ary = [];
  axios.get('https://hexschool.github.io/ajaxHomework/data.json')
    .then(function (response) {
      ary = response.data;
      console.log(ary) // 印出 response.data 回傳結果
      // 資料回傳後，才去呼叫函式
      renderData();
  });
  function renderData() {
    console.log(ary); // 印出 response.data 回傳結果
  }
  console.log(ary); // []
*/

// 題目一
// 請問以下程式碼的 console.log() 執行順序分別為何 ? 印出結果分別為何 ?
let array = [];
axios
  .get("https://hexschool.github.io/ajaxHomework/data.json")
  .then(function (response) {
    array = response.data;
    console.log(array); // 後印出 response.data 回傳結果
  });
console.log(array); // 先印出空陣列

// 題目二
let ary = [];
axios
  .get("https://hexschool.github.io/ajaxHomework/data.json")
  .then(function (response) {
    ary = response.data;
    console.log(ary); // 接著印出 response.data 回傳結果
    renderData();
  });

function renderData() {
  console.log(ary); // 最後印出 response.data 回傳結果
}
console.log(ary); // 先印出空陣列

// 題目三
// 請依步驟指引將臺中市夜間急診或 24 小時急診動物醫院名冊 JSON 檔案資料渲染在網頁上。
// 步驟一 透過底下 axios.get 撈取 url 資料，透過 console.log 觀看是否正確撈取資料，將撈取回來的資料賦予在變數 data 上。
const url = "https://datacenter.taichung.gov.tw/swagger/OpenData/d7fbd4a8-0116-4a38-bfed-dbdbfe313e82";
const card = document.querySelector(".js-body");
let data = [];
axios.get(url).then((res) => {
  data = res.data;
  console.log(data);
  renderData();
});

// 定義一個函式命名為 renderData ()
// 以下步驟皆在函式內執行
// 請宣告一個變數 str 並賦予值為字串型別的空字串
// 請透過 data 陣列跑 forEach ，並至少帶入第一個參數
function renderData() {
  let str = "";
  data.forEach(function (item) {
    // 步驟三
    // 請將以下內容賦予給 str
    let content = `<div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
  <div class="card-header">${item.醫院名稱}</div>
  <div class="card-body">
     <h5 class="card-title">${item.醫院電話}</h5>
     <p class="card-text">${item.急診服務}</p>
   </div>
 </div>`;
    str += content;
  });
  // 步驟四
  // 以下步驟在 forEach {} 大括號外執行
  // 請透過 innerHTML 給 card 變數賦予值
  // 該值為變數 str
  card.innerHTML = str;
}
// 步驟五 在步驟一的 axios.get 內呼叫 renderData()