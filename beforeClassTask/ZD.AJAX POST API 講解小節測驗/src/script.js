/*
  第一題
  請問以下敘述何者 "錯誤" ?
  a.網路請求的方法只有 get 、 post 兩種而已。
  b.在接別人 API 服務時要留意文件，文件內會記載請求的方法。
  c.get 網路請求是向對方伺服器要求資料， post 網路請求是傳送資料給對方。
  d.發送 post 請求給對方時，要留意 API 路徑是否正確。

  ans : a; 還有 OPTIONS 、 HEAD 、 PUT 、 DELETE 、 TRACE 、 CONNECT ...。 
*/

/*
  第二題
  請問以下敘述何者 "錯誤" ?
  a.可以透過 form 表單發送 application/x-www-form-urlencoded 網路請求。
  b.application/json 表示傳遞的格式一律是 XML 格式。
  c.multipart/form-data 想上傳檔案、圖片格式時可以使用。
  d.text/plain 是記事本格式，比較少用。

  ans : b; json 格式。
*/

/*
  第三題
  小花想傳送資料給對方伺服器，但她不會寫網路請求，請參考以下半成品程式碼，選出填空處填寫 "錯誤" 的選項
  axiox."填空處一"("填空處二", "填空處三")
    .then(function (response) {
      console.log(response);
    })
    "填空處四"(function (error) {
      console.log(error);
    });
  a.因為小花是想傳送資料給對方，所以填空處一要填入 post。
  b.填空處二要填入對方的網址路徑，且要留意填寫正確。
  c.填空處三要填入物件格式，物件內要帶入什麼屬性，可以觀看對方提供的文件。
  d.填空處四要填入 then ，這樣就可以接收回傳錯誤訊息的物件。

  ans : d; catch。 
*/

/*
  第四題
  阿美想註冊帳號，她不確定是否成功，請參考(圖片一)，選出 "錯誤" 敘述的選項
  a.阿美可以透過 data 屬性內的 message 查看是否註冊成功。
  b.此次 Content-Type 夾帶的格式顯示 application/json ，代表傳遞的數據是 JSON 格式。
  c.statusText 顯示 "OK" ，代表阿美註冊帳號成功。
  d.status 200 代表此次網路請求發送成功。

  ans : c; 代表此次網路請求發送成功。
*/

/*
  第五題
  小啾想註冊帳密，卻發現網路請求雖然都發送成功，但不管怎麼輸入帳密，都會跳出錯誤訊息，請幫他選出 "正確" 的原因
  axios.post(`https://hexschool-tutorial.herouapp.com/api/signup`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  a.他應該使用 get 請求，改成 get 請求就能註冊帳密成功了。
  b.他承接訊息的函式寫錯了不能用 .then 要都改成 .catch。
  c.他忘記夾帶要傳送給對方的物件了，所以請求雖然成功，但對方無法比對資料。
  d.他網址外層不應該使用單引號包覆，改成雙引號就會成功。

  ans : c; 
*/