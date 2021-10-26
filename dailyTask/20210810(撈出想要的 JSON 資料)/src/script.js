const title = document.querySelector("#name");
const categoryText = document.querySelector("#category");
const text = document.querySelector("#introduction");
const timeText = document.querySelector("#time");
let data = [
  {
    id: 5623,
    lang: "zh-tw",
    name: "林鳳營落羽松",
    summary: "",
    introduction:
      "落羽松在秋冬變色，景色優美浪漫，近幾年經網友瘋傳，在六甲林鳳營菁埔埤附近，一片有著千棵的落羽松森林，成為台南季節限定的浪漫場景。六甲落羽松林位於台一線省道旁，原本靜謐的菁埔埤，因為落羽松而顯得優美浪漫，環繞埤塘的親水步道，整齊排列種植的落羽松給人一種無盡的延伸感，搭配一旁的油菜花田，更豐富了菁埔埤濱的景色，尤其落羽松倒映湖面，朝陽穿透樹林，晨霧下的樹林，更是彷彿置身國外，美景剎是誘人。",
    open_time: "",
    district: "六甲區",
    address: "734 臺南市六甲區菁埔埤",
    tel: "",
    fax: "",
    lat: 23.23569,
    long: 120.31492,
    services: [],
    category: ["自然景觀"],
    update_time: "2019-09-17 10:47:16",
  },
];

// 請協助完成以下步驟
// 步驟一 : 請撈取出 data 內的 name 屬性的值，並賦予到以下 name 變數。
let name = data[0].name;
// 步驟二 : 請撈取出 data 內的 category 屬性的值 "自然景觀"，並賦予到以下 category 變數。
let category = data[0].category[0];
// 步驟三 : 請撈取出 data 內 introduction 屬性的值，並賦予到以下 introduction 變數。
let introduction = data[0].introduction;
// 步驟四 : 請撈取出 data 內 update_time 屬性的值，並賦予到以下 time 變數。
let time = data[0].update_time;
// 最後一個步驟 : 請打開以下註解觀看成品
title.textContent = name;
categoryText.textContent = category;
text.textContent = introduction;
timeText.textContent = time;