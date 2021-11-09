/*
  觀念複習
  觀念一 ： setAttribute
  我們可以透過 setAttribute 來設定指定元素上的屬性，以下為範例 ：
    HTML：
    <a href="#"></a>
    JavaScript：
    // 先透過 querySelector 選取 a Element
    const myLink = document.querySelector('a');
    // 設定該 Element 的 href 屬性
    myLink.setAttribute("href","https://www.hexschool.com");
    // 設定該 Element 的 class 屬性
    myLink.setAttribute("class","red");

  觀念二 ： getAttribute
  我們可以透過 getAttribute 來取出指定元素上的屬性，以下為範例 ：
    HTML：
    <a href="https://www.hexschool.com" class="red"></a>
    JavaScript：
    // 先透過 querySelector 選取 a Element
    const myLink = document.querySelector('a');
    // 取出該 Element 的 href 屬性
    console.log(myLink.getAttribute("href")); // "https://www.hexschool.com"
    // 取出該 Element 的 class 屬性
    console.log(myLink.getAttribute("class")); // "red"
*/

// 題目
// 步驟一 : <a class="error" src="https://is.gd/iOmM7A"></a>
// a 連結的 src 屬性放錯了， 是要用在步驟二 img 上，請協助取值
// 請透過 querySelector 選取上方 HTML 標籤後
// 使用 getAttribute 取出 src 屬性的網址 "https://is.gd/iOmM7A"
// 並透過下方 console.log 印出
const error = document.querySelector(".error");
console.log(error.getAttribute("src"));
// 步驟二 : <img class="picture" src="" alt="">
// 請透過 querySelector 選取上方 HTML 標籤後
// 將剛剛 a 連結 console.log() 印出的網址，使用 setAttribute 設定於上方 img src 屬性上
const picture = document.querySelector(".picture");
picture.setAttribute("src", error.getAttribute("src"));
console.log(picture);
// 步驟三 :
// <button type="button" class="btn btn-danger btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal">阿姨我不想努力了</button>
// 請透過 querySelector 選取上方 HTML 標籤後
// 使用 setAttribute("disabled", "") 的方式禁用該按鈕
const button = document.querySelector("button");
button.setAttribute("disabled", "");

// 底下為小彩蛋，非解答 ： 請註解掉上方 button.setAttribute("disabled", "");，並點擊按鈕觀看彩蛋
button.addEventListener("click", () => {
  picture.setAttribute("style", "filter: grayscale(80%)");
  button.setAttribute("style", "filter: grayscale(80%)");
});