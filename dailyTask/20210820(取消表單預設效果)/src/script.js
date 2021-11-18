/*
  觀念複習
  preventDefault
  取消 HTML 標籤的預設行為，以下為示範 ：
   HTML ：
   <a class="myLink" href="https://www.hexschool.com/">連結</a>
   JavaScript ：
   // 先透過 querySelector 選取 class myLink
   const myLink = document.querySelector(".myLink");
   // 監聽使用者點擊就會執行大括號的內容
   myLink.addEventListener('click', function(e) {
    e.preventDefault(); // 阻止 a 標籤默認行為，所以不會轉址
    console.log("有被點擊到");
   })
  
  觀念補充
  表單預設行為
  如果使用 <input type="submit"> submit ，或是使用 <button></button> 但不指定 type 屬性時預設也會是 submit，
  而 submit 會將表單提交到伺服器。我們通常不會使用這個方式提交表單給伺服器，所以會使用 preventDefault 取消它的預設行為，
  範例如下 ：
   HTML ：
    <form action="#">
      帳號 :
      <input type="text" name="email"> 
      <br>
      密碼 :
      <input type="text" name="passward"> 
      <input type="submit" value="送出">
    </form>
   JavaScript ：
   // 先透過 querySelector 選取 form
   const form = document.querySelector("form");
   // 監聽使用者點擊就會執行大括號的內容
   form.addEventListener("click", function (e) {
    e.preventDefault(); // 阻止 submit 屬性默認行為，所以不會提交資料
   });
*/

// 情境題 ： 小龜在路上走著走著，被熱情的艾草給攔住了。
// 艾草 ： 「同學，請問你信教嗎 ?」。
// 小龜 ： 「. . . ?」。
// 艾草 ： 「現在信教就能立刻擁有能吃的肥皂，真是太神奇了 #*$&@8(#&(下略一萬字)」。
// 小龜 ： 「好了，你別說話了。我信還不行嗎 ? 我信 ! 我信 !」。
// 艾草 ： 「來這個是入教申請表格，填寫完後，我們就可以頒發證書給您囉 !」。
// 小龜拿起來表格，標題上大大的寫著 ： 「你該轉職成可愛鳥鳥教徒的一萬種理由」。
// 請依以下步驟指引完成表單，讓小龜擺脫傳教士的威脅吧！

// 步驟一
// 請透過 querySelector 選取下方 5 個 HTML 標籤
// 1.<input type="text" class="form-control" id="input-name" value="小龜">
// 2.<input type="numbr" class="form-control" id="input-age" value="1987年2月30日">
// 3.<span class="name"></span>
// 4.<p class="birthday border-bottom pb-1"></p>
// 5.<button type="submit" class="send btn btn-light btn-lg">送出</button>
const inputName = document.querySelector("#input-name");
const inputAge = document.querySelector("#input-age");
const spanName = document.querySelector(".name");
const birthday = document.querySelector(".birthday");
const send = document.querySelector(".send");
// 步驟二
// 請利用步驟一選取的 button 送出按鈕
// 透過 addEventListener 監聽 'click' 事件
send.addEventListener("click", function (e) {
  // 步驟三
  // 請注意 ： 以下步驟皆在步驟二監聽函式的 {} 大括號內處理
  // 使用 e.preventDefault() 阻止 submit 效果
  // 使用 .value 的方式取出步驟一選取的 input id="input-name" 欄位值
  // 將 input 欄位的值，使用 textContent 的方式，賦予到步驟一選取的 ： <span class="name"></span>
  e.preventDefault();
  spanName.textContent = inputName.value;
  // 使用 .value 的方式取出步驟一選取的 input id="input-age" 欄位值
  // 將步驟一選取的 <p class="birthday border-bottom pb-1"></p>
  // 使用 innerHTML 輸出 ： <span class="birthday">出生日期 ： ${id="input-age 欄位值}</span>
  birthday.innerHTML = `<span class="birthday">出生日期：${inputAge.value}</span>`;
});