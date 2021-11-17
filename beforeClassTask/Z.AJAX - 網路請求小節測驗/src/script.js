/*
  第一題
  請問以下敘述何者 "錯誤" ?
  a.在瀏覽器上輸入網址也算一種發出網路請求的方式。
  b.AJAX 是一種非同步 JavaScript 技術。
  c.AJAX 可以只更改想變更的資訊，而不是整個網頁。
  d.只能透過瀏覽器發出網路請求。

  ans : d; 還有很多方法可以發出請求。 
*/

/*
  第二題
  請問以下敘述何者 "錯誤" ?
  a.如果想觀看網路請求狀況可以透過 Google Chrome 的 Network 觀看。
  b.不管 HTML 檔內引入多少資料，網路請求 get 都只會發送一筆。
  c.瀏覽器解析到圖片時，會去跟本地端伺服器請求圖片檔案。
  d.網路請求有先後順序，並不是一次全部請求。

  ans : b; 會發送多筆。
*/

/*
  第三題
  關於網頁請求狀態碼的敘述何者 "錯誤" ?
  a.200 代表請求成功。
  b.404 代表伺服器找不到請求的資源(找不到檔案)。
  c.304 代表被請求的資源已永久移動到新位置。
  d.500 代表伺服器端發生未知或無法處理的錯誤。

  ans : c; 已讀取過的圖片或網頁，由瀏覽器緩存 (cache) 中讀取。
*/

/*
  第四題
  以下關於 request、response 的敘述何者 "錯誤" ?
  a.網頁請求可以透過 request headers 觀看， request headers 內會夾帶個人資訊。
  b.瀏覽器發送 request 給伺服器，伺服器驗證完資料後，會回傳 response。
  c.response 只會回傳 response data。
  d.response headers 內會有檔案格式 content-type。

  ans : c; 還有 response headers。
*/

/*
  第五題
  請參考圖片一後，選出 "錯誤" 敘述的選項
  a.304 代表已經有載入過，不會再跟伺服器要資料，會使用暫存的檔案。
  b.Status 顯示 200 代表請求成功。
  c.紅色字體 404 的部分代表找不到檔案，可能要確認一下檔案路徑是否有誤。
  d.如果想查看該檔案格式，可以點擊檔案後觀看 request headers 內的 content-type。

  ans : d; response headers。
*/