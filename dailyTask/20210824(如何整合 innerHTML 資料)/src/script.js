/*
  觀念複習
  1.整合 innerHTML 資料
  可以透過 forEach 與 innerHTML 整合，一次渲染多筆資料在網頁上，以下為示範 ：
    HTML ：
    <ul class="list"></ul>
    JavaScript ：
    let data = [
      {
        name: "艾草",
        stir: true
      },
      {
        name: "Vivian",
        stir: false
      },
      {
        name: "鵬聖",
        stir: true
      },
      {
        name: "雅萱",
        stir: true
      }
    ];
    // 透過 querySelector 選取 class list
    const list = document.querySelector(".list");
    // 透過在全域宣告 str 累加內文
    let str = "";
    data.forEach(function (item) {
    // 判斷是否會攪拌
      if (item.stir) {
        str += `<li>會攪拌咖哩飯的人有${item.name}</li>`;
      } else {
        str += `<li>不會攪拌咖哩飯的人有${item.name}</li>`;
      }
    });
    // 將結果透過 innerHTML 的方式渲染在網頁上
    list.innerHTML = str;
    執行後的結果：
    會攪拌咖哩飯的人有艾草
    不會攪拌咖哩飯的人有Vivian
    會攪拌咖哩飯的人有鵬聖
    會攪拌咖哩飯的人有雅萱

  2.innerHTML 位置
  嘗試將觀念複習的範例 innerHTML 移至 forEach 內並觀察畫面上的差異性 ：
    let str = "";
    data.forEach(function (item) {
    // 判斷是否會攪拌
      if (item.stir) {
        str += `<li>會攪拌咖哩飯的人有${item.name}</li>`;
      } else {
        str += `<li>不會攪拌咖哩飯的人有${item.name}</li>`;
      }
    // 將結果透過 innerHTML 的方式渲染在網頁上
    list.innerHTML = str;
    });
  會發現將 innerHTML 放至 forEach 內，或 forEach 外網頁上渲染的結果是一樣的，那為何要放在 forEach 外呢 ?
  可透過開發人員工具觀察差異：
  放置於 forEach 內
  <li>會攪拌咖哩飯的人有艾草</li>
  <li>會攪拌咖哩飯的人有艾草</li><li>不會攪拌咖哩飯的人有Vivian</li>
  <li>會攪拌咖哩飯的人有艾草</li><li>不會攪拌咖哩飯的人有Vivian</li><li>會攪拌咖哩飯的人有鵬聖</li>
  <li>會攪拌咖哩飯的人有艾草</li><li>不會攪拌咖哩飯的人有Vivian</li><li>會攪拌咖哩飯的人有鵬聖</li><li>會攪拌咖哩飯的人有雅萱</li>
  放置於 forEach 外
  <li>會攪拌咖哩飯的人有艾草</li><li>不會攪拌咖哩飯的人有Vivian</li><li>會攪拌咖哩飯的人有鵬聖</li><li>會攪拌咖哩飯的人有雅萱</li>  
  放至 forEach 內時 innerHTML ，其實是不斷的被執行的，而放置於迴圈外 innerHTML 僅會執行一次，可以更節省效能。
*/

// 植栽資料
let data = [
  {
    flowerName: "月桃",
    flowerImg:
      "http://bgip.tfri.gov.tw/tpbg2012/upload/file/20150514_月桃_1.jpg",
  },
  {
    flowerName: "台灣山菊",
    flowerImg: "http://bgip.tfri.gov.tw/tpbg2012/upload/file/TBG_3654.jpg",
  },
  {
    flowerName: "菲律賓紫檀",
    flowerImg: "http://bgip.tfri.gov.tw/tpbg2012/upload/file/DSC_2792a.jpg",
  },
  {
    flowerName: "高良薑",
    flowerImg: "http://bgip.tfri.gov.tw/tpbg2012/upload/file/GR2Q5915.jpg",
  },
];

// 步驟一
// 請透過 querySelector 選取 class list
// 請宣告一個變數 str 並賦予值為字串型別的空字串
// 請透過 data 陣列跑 forEach ，並至少帶入第一個參數
let list = document.querySelector(".list");
let str = "";
data.forEach((item) => {
  // 步驟二
  // 以下步驟在 forEach {} 大括號內執行
  // 請將以下內容賦予給 str
  // 填空處需填入資料 :
  // 1.data 陣列內多筆物件之屬性 flowerImg 的值
  // 2.data 陣列內多筆物件之屬性 flowerName 的值
  let content = `<li class="card col-md-3 mb-2">
      <img src="${item.flowerImg}" class="mt-2 rounded" alt="...">
      <div class="card-body">
        <p class="card-text text-center fs-2">${item.flowerName}</p>
      </div>
    </li>`;
  str += content;
});
// 步驟三
// 請在步驟一的 list 節點上，透過 innerHTML 賦予值為變數 str
list.innerHTML = str;