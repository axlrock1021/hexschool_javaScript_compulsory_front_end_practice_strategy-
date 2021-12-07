/*
  觀念複習
  四種常見的 POST 請求 content-type 介紹
  在想傳送資料給對方伺服器時，可以透過 POST 方法發送網路請求，發送時也需要讓對方知道我們傳過去的檔案格式會是什麼。
  所以我們會透過 headers 中的 Content-Type 告知對方我們要傳送的格式。

  1.application/x-www-form-urlencoded
    這種方法是屬於 <form> 表單的原生提交方式：
    <form> 標籤的屬性會包含 method 、method 可以使用 get 、 post 發送請求，當指定 post 請求後， 
    <form> 標籤的 enctype 的屬性值會默認使用此方式提交：
      <form action="/action_page_binary.asp" method="post" >
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname"><br><br>
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname"><br><br>
        <input type="submit" value="Submit">
    </form>

  2.application/json
    目前使用到的 API 都是使用這種 Content-Type ，基本上就是透過 JSON 格式來傳遞參數資料。
    透過 axios 套件發送網路請求時，默認的 Content-Type 也是此種類型。

  3.multipart/form-data
    如果我們想要上傳 「檔案 、 圖片 、 影片」 等，就必須使用這種 Content-Type。
    當我們使用表單標籤時，可以透過指定 enctype 屬性為 multipart/form-data 的方式來操作。
      <form action="/action_page_binary.asp" method="post" enctype="multipart/form-data">
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname"><br><br>
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname"><br><br>
        <input type="submit" value="Submit">
      </form>

  4.text/plain
    基本上就是純文本格式。
*/
 
/*
  題目一
  請問透過 `<form>` 預設方式發送 post 請求時會是何種 Content-Type ?
    <form action="/action_page_binary.asp" method="post" >
      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname"><br><br>
      <label for="lname">Last name:</label>
      <input type="text" id="lname" name="lname"><br><br>
      <input type="submit" value="Submit">
    </form>
  Content-Type : x-www-form-urlencoded

  題目二
  請問如果要使用 `<form>` 表單預設方法上傳圖片檔案，以下程式碼的 method 、 enctype 屬性該填入什麼值 ?
    <form action="/action_page_binary.asp" method="?" enctype="?">
      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname"><br><br>
      <label for="lname">Last name:</label>
      <input type="text" id="lname" name="lname"><br><br>
      <input type="submit" value="Submit">
    </form>
  method = "post"、enctype="multipart/form-data"

  題目三
  請問透過 axios 發送 post 請求時會是何種 Content-Type ?
    axios.post('/user', {
       firstName: 'Fred',
       lastName: 'Flintstone'
     })
     .then(function (response) {
       console.log(response);
     })
     .catch(function (error) {
       console.log(error);
     });
  Content-Type : application/json
*/