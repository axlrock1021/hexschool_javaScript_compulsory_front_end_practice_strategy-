/*
  情境題
  小美發送網頁請求時，發現網頁怪怪的，她打開 Network 後觀察到以下情況 ：
  她很想知道到底為什麼有這個狀況，還有 Network 上那些 200 、 304 、 404 又是什麼東西，請透過註解的方式，
  幫助她了解網頁請求狀態碼，並告訴她錯誤原因。
*/

// 1.資訊回應 (Informational responses, 100 – 199)。
// 2.成功回應 (Successful responses, 200 – 299)。
// 3.重新定向 (Redirects, 300 – 399)。
// 4.用戶端錯誤 (Client errors, 400 – 499)。
// 5.伺服器端錯誤 (Server errors, 500 – 599)。

// 101 Switching Protocol
// 用戶端發出請求，伺服器收到請求且正在切換請求內容所需的通訊協定中。

// 200 OK
// 請求成功。成功的意義依照 HTTP 方法而定 ：
// GET ： 資源成功獲取並於訊息主體中發送。
// HEAD ： entity 標頭已於訊息主體中。
// POST ： 已傳送訊息主體中的 resource describing the result of the action。
// TRACE ： 伺服器已接收到訊息主體內含的請求訊息。

// 304 Not Modified
// 用戶端的快取區已有資料，快取區的資料與伺服器相同，伺服器回應快取區資料可繼續沿用。

// 404 Not Found
// 用戶端發出請求，伺服器找不到請求的資源。

// 500 Internal Server Error
// 伺服器端發生未知或無法處理的錯誤(接後端資訊時，可能會遇到)。