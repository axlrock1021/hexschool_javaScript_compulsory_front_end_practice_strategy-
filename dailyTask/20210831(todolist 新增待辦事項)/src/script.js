/*
  觀念複習
  todolist 拆分練習內的觀念複習，會著重在複習本日要達成的功能會用到哪些觀念 !
  1.data- 屬性妙用
    data-"自定義名稱"，可以拿來埋各種資料 :
    HTML：
      <input type="text" class="txt" placeholder="請輸入待辦事項">
      <input type="button" class="save" value="儲存待辦">
      <ul class="list">
        <li>123
        <input class="delete" type="button" data-num="1" value="刪除待辦">
        </li>
      </ul>
      接下來可以透過 getAttribute 取值 :
    JavaScript :
      const list = document.querySelector(".list");
      list.addEventListener("click", function (e) {
        if (e.target.getAttribute("class") !== "delete") {
          return;
        }
        let num = e.target.getAttribute("data-num");
        console.log(num);
      });
      補充另一個取值的方式： dataset
      const list = document.querySelector(".list");
      list.addEventListener("click", function (e) {
        if (e.target.getAttribute("class") !== "delete") {
          return;
        }
        let num = e.target.dataset.num;
        console.log(num);
      });
      此種方法也能順利取值 dataset. 的後方請帶入 data-"自定義名稱" 的自定義名稱，因為這邊 HTML 自定義名稱為 num ，
  所以是使用 dataset.num 的方式。
  需注意的是 假設你的 data 名稱為 data-xxx-xxx 在使用 dataset 獲取時需改成小駝峰寫法，舉例如下 ：
      <div data-todo-item="123">
        123
      </div>
      <script>
        const item = document.querySelector('div').dataset.todoItem;
        console.log(item);
        
        2.陣列 map 搭配箭頭函式寫法
    陣列方法 map 的箭頭函式寫法，這邊以 todolist 較常用到的組字串 forEach 舉例 :
    原本的寫法 :
      data = [10, 20, 30];
      total = 0;
      data.forEach(function (item) {
        total += item;
      });
      console.log(total); // 60
    
    箭頭函式的寫法 :
    function 拿掉，並在參數後補上 => 符號，就完成囉。
      data = [10, 20, 30];
      total = 0;
      data.forEach((item) => {
        total += item;
      });
      console.log(total); // 60
    雖然一個參數的情況下可以不用在參數外加 () 小括號，但兩個參數以上就會報錯，
    所以還是建議不管有幾個參數都習慣性加上小括號唷 ~

    箭頭函式再精簡 :
    把 {} 大括號拿掉後，縮成一行也是可以辦到的唷 !
    此種更精簡寫法適用於函式內程式碼不多時，程式碼較多的情況不建議使用。
      data = [10, 20, 30];
      total = 0;
      data.forEach((item) => total += item);
      console.log(total); // 60
    todolist 內會使用到 forEach 整合 innerHTML 去組字串並渲染到網頁上。

  觀念提醒
  addeventListener
  // 先透過 querySelector 選取 class btn
  const btn = document.querySelector('.btn');
  // 監聽 click 事件，點擊了按鈕，就會觸發函式的內容
  btn.addEventListener("click",function(e){
    console.log("你被點擊了 !!");
  })

  但直接放入一個函式的寫法也可以，該函式參數也能帶入 event。
  // 先透過 querySelector 選取 class btn
  const btn = document.querySelector(".btn");
  // 監聽 click 事件，點擊了按鈕，就會觸發函式的內容
  btn.addEventListener("click", btnClick);
  
  function btnClick(e) {
    console.log("你被點擊了 !!");
    console.log(e);
  }
  
  觀念補充
  Date 物件
  補充一個在埋 id 時，很常使用的方法 :
  Date 物件是基於世界標準時間（UTC） 1970 年 1 月 1 日開始的毫秒數值來儲存時間。
  所以可以透過 new Date().getTime() 的方式來當成 id 使用。
  // 建立 Date() 物件後使用 getTime() 取得時間 
  // getTime() 會取出 (由 1970 年 1 月 1 日零時零分計起到目前時間)
  let id = new Date().getTime();
  console.log(id) // 1629966889412 (每毫秒都不同)   
*/      

// 問題 待辦新增功能 重點提示：
// 1.註冊監聽點擊按鈕事件
//   必須選取 button。
//   必須監聽 button 點擊事件。
// 2.監聽函式內要先組物件，物件內包含
//   1.input 欄位的值(記得先取出)。
//   2.id (未來會需要透過 id 比對資料)。
//   3.紀錄完成狀態(ckeckbox 有沒有打勾勾)。
// 3.防呆，確認 input 欄位有值
//   1.有值的情況下，將剛組好的物件推到全域變數(記得宣告一個全域變數並賦予值為空陣列)。
// 4.確認 HTML 結構，看要渲染的資料要擺在哪
// 5.宣告一個函式 render 用來渲染資料
//   1.將剛組好的資料拿來跑 forEach。
//   2.將全域變數陣列內的 input 欄位值依需求擺放進要渲染的字串內。
//   3.id 、 紀錄完成狀態等資訊可以等後續用到時再來補埋。

const btn = document.querySelector(".btn_add");
const txt = document.querySelector(".txt");
const list = document.querySelector(".list");
let data = [];

btn.addEventListener("click", function (e) {
  if (txt.value === "") {
    alert("請輸入代辦事項");
    return;
  }
  let obj = {};
  obj.content = txt.value;
  obj.id = new Date().getTime();
  obj.checked = "";
  data.push(obj);
  txt.value = "";
  render();
});

function render() {
  let str = "";
  data.forEach((item) => {
    str += `<li data-id=${item.id}>
          <label class="checkbox" for="">
            <input type="checkbox" ${item.checked}/>
            <span>${item.content}</span>
          </label>
          <a href="#" class="delete"></a>
        </li>`;
  });
  list.innerHTML = str;
}

list.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("delete")) {
    let num = e.target.closest("li").dataset.id;
    let index = data.findIndex((item) => item.id == num);
    data.splice(index, 1);
    render();
  }
});