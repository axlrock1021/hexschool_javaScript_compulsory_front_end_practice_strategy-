/*
  觀念複習
  觀念一 ： querySelector
  我們可以透過 querySelector 選擇器，來選擇第一個符合的網頁元素，選取方式與 CSS 選擇器相同，以下示範如何選取 ：
  1.選取 HTML 元素
    透過 querySelector 選取 h1 Element :
    HTML ：
    <h1></h1>
    JavaScript ：
    const el = document.querySelector('h1');
  2.選取 class、id
    HTML：
    <h1 class="title"></h1>
    <div id="addOrder"></div>
    JavaScript ：
    const title = document.querySelector('.title');
    const addOrder = document.querySelector('#addOrder');
  3.也可以透過後代選擇器方式，選取節點 ：
    HTML ：
    <ul class="list">
      <li></li> 
    </ul>
    JavaScript ：
    const listContent = document.querySelector('.list li');

  觀念二 ： textContent
  當我們透過 querySelector 選擇到節點後，就能使用 textContent 來動態修改裡面的 Text 文字內容，以下將示範如何修改 ：
    HTML ：
    <h1></h1>
    JavaScript ：
    // 使用 querySelector 選取到 h1 Element
    const el = document.querySelector('h1');
    // 針對該 h1 元素 Element 去賦予文字內容
    el.textContent = "Hello World";
    最終 HTML 結果 ： Hello World

  觀念三 ： innerHTML
  當我們透過 querySelector 選擇到節點後，就能使用 innerHTML 來增加 HTML 網頁結構，
  innerHTML 會將選取到的結構內原有內容刪除，並重新寫入新增的內容，以下將示範如何修改 ：
    HTML ：
    <div class="header"></div>
    JavaScript ：
    // 使用 querySelector 選取到 class 
    const header = document.querySelector('.header');
    // 針對該 class 內去增加 HTML 網頁結構，結構內容為自行組出的字串資料(建議使用反引號 `` 包覆)
    header.innerHTML = `<h1 class="title">標題1</h1>`;
    最終 HTML 結果 ： 標題1
    
    innerHTML 加入變數 ：
    HTML：
    <ul class="list"></ul>
    JavaScript ：
    // 使用 querySelector 選取到 class 
    const list = document.querySelector('.list');
    let myLink = "https://www.hexschool.com/";
    let content = `<li><a href="${myLink}">連結</a></li>`;
    // 針對該 class 內去增加網頁的結構，亦可包含變數
    list.innerHTML = content;
    最終 HTML 結果 ： 連結

  觀念四 ：textContent 、 innerHTML 差異
    <ul class="list"></ul>
    textContent 針對純文字內容，範例如下 ：
    const list = document.querySelector('.list');
    list.textContent = "<li>我好棒</li>";
    最終 HTML 結果 ： <li>我好棒</li>   
    innerHTML 針對 HTML 網頁結構，範例如下 ：
    const list = document.querySelector('.list');
    list.innerHTML = "<li>我好棒</li>";
    最終 HTML 結果 ： 我好棒
*/

// 情境題 ： Vivian 想幫忙撰寫動物認養資訊，所以她寫了一個網站，但她不會選取網頁元素，請透過步驟引導一步一步幫助她完成此網站。
// 接著透過 data 資料撈出步驟二 、 步驟三想要的文字內容吧 !

let data = [
  {
    animal_id: 217398,
    animal_subid: "CAAAG1100811027",
    animal_area_pkid: 6,
    animal_shelter_pkid: 61,
    animal_place: "桃園市動物保護教育園區",
    animal_kind: "貓",
    animal_sex: "M",
    animal_bodytype: "SMALL",
    animal_colour: "黃虎斑色",
    animal_age: "",
    animal_sterilization: "F",
    animal_bacterin: "F",
    animal_foundplace: "海山中街",
    animal_title: "",
    animal_status: "OPEN",
    animal_remark: "",
    animal_caption: "",
    animal_opendate: "2021-08-11",
    animal_closeddate: "2999-12-31",
    animal_update: "2021/08/11",
    animal_createtime: "2021/08/11",
    shelter_name: "桃園市動物保護教育園區",
    album_file: "https://asms.coa.gov.tw/amlapp/upload/pic/9e888c99-60b0-4c8a-b257-833f101f4bed_org.jpg",
    album_update: "",
    cDate: "2021/08/11",
    shelter_address: "桃園市新屋區永興里3鄰藻礁路1668號",
    shelter_tel: "03-4861760",
  },
];

// 步驟一 請使用 querySelector 選取第一個節點 <h1 class="title"></h1>
const title = document.querySelector(".title");
// 請使用 textContent 的方式在 h1.title 放入文字內容 "動物認領資訊"
title.textContent = "動物認領資訊";

// 步驟二 請使用 querySelector 選取第二個節點 <h2 class="card-title"></h2>
const cardTitle = document.querySelector(".card-title");
// 請使用 textContent 的方式在 h2.card-title 放入文字內容 "ID：217398"
cardTitle.textContent = `ID：${data[0].animal_id}`;

// 步驟三 請使用 querySelector 選取第三個節點 <ul class="list"></ul>
const list = document.querySelector(".list");
// 請使用 innerHTML 的方式在 ul.list 放入以下三筆 li :
// <li class="animal-colour">毛色：黃虎斑色</li>
// <li class="animal-sex">性別：Ｍ</li>
// <li class="shelter-name">桃園市動物保護教育園區</li>
list.innerHTML = `
<li class="animal-colour">毛色：${data[0].animal_colour}</li>
<li class="animal-sex">性別：${data[0].animal_sex}</li>
<li class="shelter-name">${data[0].shelter_name}</li>`;