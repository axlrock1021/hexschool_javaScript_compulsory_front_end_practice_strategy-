/*
  第一題
  請問以下敘述何者 "錯誤" ?
  a.&& 是 and 的意思，代表要同時滿足所有條件。
  b.!= 、 !== 都是拿來比較是否不相等用， !== 比較嚴謹。
  c.比較運算子包含 > 、 < 、 >= 、 <= 、 == 、 != 等。
  d.比較運算子大於等於寫成 >= ，比較運算子不包含 =>。

  ans : c;
*/

/*
  第二題
  請問以下敘述何者 "錯誤" ?
  a.= 、 == 都是拿來比較是否相等用， == 比較嚴謹。
  b.|| 是 or 的意思，代表要滿足其中一個條件。
  c.if 、 else 只能有一組，如果要接續多組條件可以使用 else if。
  d.&& 、 || 可以設定多組條件，不限定一次只能一組。

  ans : a; 一個等於是賦值運算子。
*/

/*
  第三題
  小美心情指數高或是口渴指數高時會去買飲料來喝，而她的心情指數(mayMoodNum)、口渴指數(mayThirstNum)為 1 ~ 10 分，
  1 分最低 、 10 分最高，只要其中一項超過 8 分，她就會去買飲料喝，請幫她下判斷式的條件確認今天是否喝飲料 ?
  a.if (mayMoodNum > 8 && mayThirstNum > 8)。
  b.if (mayMoodNum >= 8 && mayThirstNum >= 8)。
  c.if (mayMoodNum > 8 || mayThirstNum > 8)。
  d.if (mayMoodNum >= 8 || mayThirstNum >= 8)。

  ans : c;
*/

/*
  第四題
  ABC 商店正在舉行活動，消費滿 500 元，並同時是該店的 VIP 客戶，符合兩項條件就打五折，ABC 商店宣告了一個 bill 變數代表帳單，
  並設定 isVIP 變數判斷是否為 VIP 客戶，請幫忙設定 if 條件式小括號內的條件。
  a.if (bill > 500 || isVIP === true)。
  b.if (bill >= 500 || isVIP = true)。
  c.if (bill >= 500 && isVIP = true)。
  d.if (bill >= 500 && isVIP === true)。

  ans : d;
*/

/*
  第五題
  以下關於流程圖的相關敘述何者為 "錯" ?
  a.菱形代表決策判斷。
  b.長方形代表的程式符號。
  c.圓角長方形代表起止符號，可用於開始、結束。
  d.長方形代表流程符號。

  ans : d; 代表的是程式符號。
*/

/*
  第六題
  小明畫了一個流程圖，判斷如果天氣好就不用收衣服，天氣差就要收衣服，以下為他畫的流程圖，請問哪裡 "錯了" ? (圖示一)
  a.是、否應該註解在流程符號的箭頭上，不是使用程式符號。
  b.開始跟結束不應該使用起止符號，使用程式符號即可。
  c.判斷是否為好天氣的符號應該使用長方形，不能用菱形。
  d.小明的流程圖很正確，沒有畫錯的地方。

  ans : a; 
*/

/*
  第七題
  小咪是一隻貓咪，她平常只要觀察主人出門超過 8 小時，或是主人今天餵的飼料她不喜歡，只要其中一項達成她就會在主人的床上吐，
  請問今天主人已經出門超過 8 小時，小咪也已經吐在主人床上了，如果依流程圖來判斷黃色區塊的地方還會執行嗎 ? (圖示二)
  a.會執行，因為她可以吐兩次。
  b.不會執行，因為流程圖跑到吐之後就連接到結束了。
  c.可以執行也可以不執行，看小咪心情。
  d.會執行，因為要一直判斷下去。

  ans : b; 
*/

/*
  第八題
  小花平常有量血壓的習慣，她知道收縮壓在 120 以內是正常，在 120 ~ 139 是高血壓前期，140 ~ 159 是第一期高血壓，
  在 160 以上是第二期高血壓，她打算繪製一張量測血壓的流程圖，請幫她填入黃色區塊的地方。 (圖示三)
  a.高血壓前期。
  b.判斷是在 160 以上。
  c.第一期高血壓。
  d.測量結束。

  ans : c; 
*/

/*
  第九題
  以下敘述何者為 "錯" ?
  a.陣列外層應該使用 [] 中括號包覆起來。
  b.物件外層應該使用 {} 大括號包覆起來。
  c.物件可以使用 push 新增值。
  d.陣列可以使用 push 新增值。

  ans : c; 陣列才可以。 
*/

/*
  第十題
  以下敘述何者為 "錯" ?
  a.陣列內層應該使用 ; 分號區隔每個值。
  b.物件內層應該使用 , 逗號區隔每個屬性。
  c.陣列是從 0 開始計算。
  d.物件內的值都會有對應的屬性。

  ans : a; 使用逗號區隔。  
*/

/*
  第十一題
  請問如果要在 flowers 陣列內的最後方塞入 "carnation" 該如何寫呢 ? 
  let flowers = ["rose", "lily", "violet"];
  a.flowers.pop()。
  b.flowers.shift('carnation')。
  c.flowers.unshift('carnation')。
  d.flowers.push('carnation')。

  ans : d; 
*/

/*
  第十二題
  請問如果要刪除 flowers 陣列內的 "lily" 該如何寫呢 ?
  let flowers = ["rose", "lily", "violet"];
  a.flowers.pop()。
  b.flowers.unshift('lily')。
  c.flowers.splice(2, 1)。
  d.flowers.splice(1, 1)。

  ans : d; 
*/

/*
  第十三題
  請根據下列程式碼選出 "錯誤" 敘述的答案。
  let flowers = [];
  flowers[0] = "rose";
  flowers.push("lily");
  flowers.pop();
  flowers.unshift("violet");
  flowers.splice(0, 1);
  a.陣列中僅存的值為 "rose"。
  b.使用 flowers[0] 為預設寫入的方式，在第零筆資料的地方寫入了 "rose"。
  c.使用 unshift 會刪除掉陣列中的第一筆資料。
  d.使用 pop 會刪除掉陣列中的最後一筆資料。

  ans : c; shift 才是刪除掉陣列中的第一筆資料。
*/

/*
  第十四題
  小明宣告了一個物件要紀錄台南美食的品名及售價，請問下列敘述何者 "錯誤" ?
  let tainanFood = {
    migao: 20,
    rouzaofun: 30
  }
  a.小明如果要新增一筆碗粿 25 元可以這樣寫 tainanFood.wagui = 25。
  b.小明如果要新增一筆油飯 40 元可以這樣寫 tainanFood['youfan'] = 40。
  c.小明如果想要讀取米糕可以這樣寫 console.log(migao)。
  d.小明如果想要刪除滷肉飯可以這樣寫 delete tainanFood.rouzaofun。

  ans : c; console.log(tainanFood.migao);
*/

/*
  第十五題
  小明宣告了一個物件要紀錄飲料的品名及售價，請問下列敘述何者 "錯誤" ?
  let drinks = {
    blackTea: 30,
    greenTea: 25
  }
  a.小明如果想更改紅茶售價為 35 元可以這樣寫 drinks.blackTea = 35。
  b.小明如果想新增一筆珍珠奶茶售價 60 元可以這樣寫 ['bubbleMilkTea'] = 60。
  c.如果要新增一筆屬性為糖度，值為陣列的資料進物件內可以這樣寫 drinks.sugar = ['全糖','半糖','無糖']。
  d.小明如果想刪除綠茶資料可以這樣寫 delete drinks.greenTea。

  ans : b;  drinks['bubbleMilkTea'] = 60。
*/