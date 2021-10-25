/*
  第一題
  請問以下敘述何者 "錯誤" ?
  a.在判斷 JSON 資料格式時要留意外層是 [] 中括號為陣列，外層為 {} 大括號為物件。
  b.安裝 Chrome 套件 JSONView 可以更容易觀看 JSON 資料。
  c.在函式內使用 let 宣告的變數，無法在函式外讀取到。
  d.return 回傳的值，無法被賦予到變數上。

  ans : d; 可以被賦予到變數上。
*/

/*
  第二題
  請問該如何取出學生小美 isPass 的值 false ?
  let studentsStatus = [
    {
      name: "小明",
      age: "21",
      male: "男",
      isPass: true
    },
    {
       name: "小美",
      age: "21",
      male: "女",
      isPass: false
    }
  ]
  a.studentsStatus.isPass。
  b.studentsStatus['isPass']。
  c.studentsStatus[2].isPass。
  d.studentsStatus[1].isPass。

  ans : d; 
*/

/*
  第三題
  請問該如何取出 flowers 陣列內的 "薄荷" 呢 ?
  let herbalTea = [
    {
      flowers: ["馬鞭草", "粉紅玫瑰", "迷迭香"],
      steepingTime: 5,
      aroma: "草香",
      seasoning: {
        sugar: "5g",
        milk: "100ml"
      }
    },
    {
      flowers: ["玫瑰果", "薰衣草", "薄荷"],
      steepingTime: 10,
      aroma: "花香",
      seasoning: {
        sugar: "5g",
      }
    }
  ]
  a.flowers[3]。
  b.herbalTea[1].flowers[2]。
  c.herbalTea.flowers[3]。
  d.herbalTea[1].flowers[3]。

  ans : b; 
*/

/*
  第四題
  請問該如何在 herbalTea 陣列的第二筆物件 seasoning 屬性內新增名為 milk 的屬性，值為 '100ml' 呢 ?
  let herbalTea = [
    {
      flowers: ["馬鞭草", "粉紅玫瑰", "迷迭香"],
      steepingTime: 5,
      aroma: "草香",
      seasoning: {
        sugar: "5g",
        milk: "100ml"
      }
    },
    {
      flowers: ["玫瑰果", "薰衣草", "薄荷"],
      steepingTime: 10,
      aroma: "花香",
      seasoning: {
        sugar: "5g",
      }
    }
  ]
  a.herbalTea[1].seasoning.push(milk:'100ml')。
  b.herbalTea[2].seasoning.unshift(milk:'100ml')。
  c.herbalTea[2].seasoning.milk = '100ml'。
  d.herbalTea[1].seasoning.milk = '100ml'。

  ans : d; 
*/

/*
  第五題
  為勞保投保薪資分級表的 JSON 檔案的其中幾筆資料，請問如果要撈出第 4 級的月投保薪資 "27600元" ，該如何撰寫呢 ?
  let data = [
    {
      "身分別": "一般勞工",
      "投保薪資等級": "第 1 級",
      "月薪資總額": "24000 以下",
      "月投保薪資": "24000 元"
    },
    {
      "身分別": "一般勞工",
      "投保薪資等級": "第 2 級",
      "月薪資總額": "24001 元至 25200 元",
      "月投保薪資": "25200 元"
    },
    {
      "身分別": "一般勞工",
      "投保薪資等級": "第 3 級",
      "月薪資總額": "25201 元至 26400 元",
      "月投保薪資": "26400 元"
    },
    {
      "身分別": "一般勞工",
      "投保薪資等級": "第 4 級",
      "月薪資總額": "26401 元至 27600 元",
      "月投保薪資": "27600 元"
    }
  ]
  a.data[4].月投保薪資。
  b.data[3].月投保薪資。
  c.data.月投保薪資。
  d.data[2].月投保薪資。

  ans : b; 
*/

/*
  第六題
  此為高雄銀髮族服務 - 銀髮家園的 JSON 檔案的資料，請問該如何撈取出 "text" 屬性的值 "北區銀髮家園" 呢 ?
  let data = {
    "orgs": {
      "frg": {
        "org": {
          "id": "89748",
          "lat": "22.6738893",
          "lan": "120.2903466",
          "informaddredd": "高雄市左營區海勝里翠華路601巷67號",
          "hlink": "http://m.facebook.com/PMFRE/",
          "informtel": "07-5828511\n",
          "servItem": "",
          "servTime": "",
          "dataOrg": "老人福利科",
          "doOrg": "",
          "text": "北區銀髮家園"
        },
        "id": "FRG0606"
      }
    }
  };
  a.data[0].orgs.frg.org[0].text。
  b.data[1].orgs.frg.org[1].text。
  c.data[1].orgs.frg.org.text。
  d.data.orgs.frg.org.text。

  ans : d; 
*/

/*
  第七題
  此為 iTaiwan 中央行政機關室內公共區域免費無線上網熱點查詢服務的 JSON 檔案其中一筆資料，請問以下敘述何者 "錯誤" ?
  let data = [
    {
      "SITE_ID": "ITW0000001",
      "AGENCY": "中央選舉委員會",
      "NAME": "中央聯合辦公大樓南棟",
      "ADDR": "100臺北市中正區徐州路5號1樓",
      "LATITUDE": "25.04221",
      "LONGITUDE": "121.51947"
    }
  ]
  a.最外層是一個陣列，陣列內包含一個物件，物件內有 "SITE_ID"、"AGENCY"、"NAME"、"ADDR"、"LATITUDE"、"LONGITUDE" 屬性，
  屬性的值分別為 "ITW0000001"、"中央選舉委員會"、"中央聯合辦公大樓南棟"、"100臺北市中正區徐州路5號1樓"、"25.04221"、"121.51947"
  b.因為最外層為 [] 中括號包覆，所以是陣列。
  c.如果想要撈取 ADDR 屬性的值可以使用 data.ADDR 的方式撈取。
  d.陣列內可以放多個物件。

  ans : c; data[0].ADDR。 
*/

/*
  第八題
  此為天氣分析與預測圖 - 地面天氣圖的 JSON 檔案資料，請問以下敘述何者 "錯誤" ?
  let data = {
    "cwbopendata": {
      "@xmlns": "urn:cwb:gov:tw:cwbcommon:0.1",
      "identifier": "11b61881-4ef3-e580-b499-235877b00b73",
      "sender": "weather@cwb.gov.tw",
      "sent": "2021-08-10T12:09:59+08:00",
      "status": "Actual",
      "mshType": "Issue",
      "dataid": "C0035-001",
      "dataset": {
        "resource": {
          "resourceDesc": "中文彩色合成地面天氣圖",
          "mimeType": "image/jpeg",
          "url": "https://opendata.cwb.gov.tw/fileapi/opendata/MFC/F-C0035-001.jpg"
        }
      }
    }
  };
  a.因為最外層使用 {} 大括號包覆，所以是物件。
  b.如果想要取出 "中文彩色合成地面天氣圖" ，可以使用 data[0].dataset.resource.resourceDesc。
  c.物件裡面還可以包覆物件。
  d.如果想要取出 "status" 屬性的值，可以使用 data.cwbopendata.status。

  ans : b; data.cwbopendata.dataset.resourceDesc。
*/

/*
  第九題
  以下敘述何者為 "錯" ?
  a.很多程式語言都支援 JSON 格式資料。
  b.函式的參數在大括號外 {} 也可以使用 console.log 印出。
  c.函式可以多次呼叫。
  d.return 會中斷函式。

  ans : b; 會印出 undefined ，因為函式的參數生命週期只存在大括號裡。
*/

/*
  第十題
  請問以下 console.log() 會印出什麼值 ?
  function minus(num1, num2) {
    console.log(num1);
    console.log(num2);
    let total = num2 - num1;
    return total;
  }
  let mayTotal = minus(20, 40);
  console.log(mayTotal);
  a.20、40、20。
  b.40、20、40。
  c.40、20、20。
  d.20、40、40。

  ans : a;
*/

/*
  第十一題
  小明寫了一個測量腰圍的函式，如果為男性且腰圍在 90 以上為過胖，如果為女性且腰圍在 80 以上為過胖，請問以下敘述何者 "錯誤" ?
  function measureWaist (sex, size) {
    if (sex === "male") {
      if (size >= 90) {
        console.log("男生體型過胖");
      } else {
        console.log("男生體型正常");
      }
    } else if (sex === "woman") {
      if (size >= 80) {
        console.log("女生體型過胖");
      } else {
        console.log("女生體型正常");
      }
    } else {
      console.log("您輸入錯誤");
    }
  }
  measureWaist("woman", 80);
  measureWaist("male", 70);
  measureWaist("sex", 70);
  a.console.log 會依序回傳：女生體型過胖、男生體型正常、您輸入錯誤。
  b.measureWaist 為函式的名稱，可以自定義。
  c.函式最多只能有一個參數。
  d.measureWaist 這個函式有兩個參數，分別為 sex 、 size。

  ans : c; 可以多個。
*/

/*
  第十二題
  承上題，小明另外又設定了一個可以累計自己計算腰圍次數的變數 count ， 請問以下敘述何者 "錯誤" ?
  let count = 0;
  function measureWaist (sex, size) {
    count += 1;
    if (sex === "male") {
      if (size >= 90) {
        console.log("男生體型過胖");
      } else {
        console.log("男生體型正常");
      }
    } else if (sex === "woman") {
      if (size >= 80) {
        console.log("女生體型過胖");
      } else {
        console.log("女生體型正常");
      }
    } else {
      console.log("您輸入錯誤");
    }
  }
  measureWaist("woman", 80);
  measureWaist("male", 70);
  console.log(count); // ?
  a.因為目前函式被呼叫了 2 次，所以 count 結果應該為 2。
  b.let count = 0 也可以移至函式裡，一樣可以累加，且移至函式裡面運算可以減少全域變數。
  c.let count = 0 如果移至函式內，在全域的 console.log 會因為找不到 count 而報錯。
  d.count 之所以可以累加是因為每呼叫一次 measureWaist 函式就會執行 count += 1;。

  ans : b; 如果移至函式內，在全域的 console.log 會因為找不到 count 而報錯。
*/

/*
  第十三題
  如果小明希望結果能回傳到全域的變數 mingWaist 上，所以在判斷式內設定了 return ，請問以下敘述何者 "錯誤" ?
  let count = 0;
  function measureWaist (sex, size) {
    count += 1;
    if (sex === "male") {
      if (size >= 90) {
        return "男生體型過胖";
      } else {
        return "男生體型正常";
      }
    } else if (sex === "woman") {
      if (size >= 80) {
        return "女生體型過胖";
      } else {
        return "女生體型正常";
      }
    } else {
      return "您輸入錯誤";
    }
      console.log("123");
  }
  let mingWaist = measureWaist("male", 60);
  a.mingWaist 變數的值會被賦予字串型別的 "男生體型正常"。
  b.底下 console.log('123') 會因為被 return 中斷函式而無法執行。
  c.let mingWaist = measureWaist("male", 60); 也可以縮寫為 let mingWaist = ("male", 60);。
  d.return 會回傳值到呼叫函式的地方。

  ans : c; 
*/

/*
  第十四題
  小明寫了兩個函式要拿來計算客人的金額是否有折扣， checkout 函式會計算並回傳客人折扣後的總金額，
  而 getDiscount 函式會針對客人金額判斷打幾折，但他的函式有幾個地方還沒寫好，請依照下列程式碼，幫小明選出 "不正確" 的修改內容
  // 名稱對照
  // 參數 : totalPrice 總價 (尚未打折)
  // 參數 : discount 折扣
  // 參數 : pay 顧客應支付的金額
  // 參數 : price 價錢
  function checkout (totalPrice) {
    let discount = // 1.填空處
    let pay = totalPrice * discount;
    return // 2.填空處
  }
  function getDiscount(price) {
    if (price >= 2000) {
      return 0.7;
    } else if (price >= 1000) {
      return 0.8;
    } else if (price >= 500) {
      return 0.9;
    } else {
      // 3.填空處
    }
  }
  console.log(checkout(600)); // 期望回傳結果是 540 元
  a.第 1 個填空處填入 getDiscount(totalPrice) ，透過呼叫獲取打折函式並帶入 totalPrice 參數，來確認打折數。
  b.第 2 個填空處應該填入 return pay ，因為要透過 return 回傳要支付多少錢。
  c.第 3 個填空處沒有優惠可以填入 return 1 ，return 1 代表沒有打折。
  d.第 2 個填空處應該填入return discount ，可以不經呼叫直接將 discount 回傳到 getDiscount 函式內。

  ans : d; 
*/

/*
  第十五題
  承上題，小明寫了兩個函式要拿來計算客人的金額是否有折扣， 請問以下敘述何者 "錯誤" ?
  // 名稱對照
  // 參數 : totalPrice 總價 (尚未打折)
  // 參數 : discount 折扣
  // 參數 : pay 顧客應支付的金額
  // 參數 : price 價錢
  function checkout (totalPrice) {
    let discount = getDiscount(totalPrice);
    let pay = totalPrice * discount;
    return pay;
  }
  function getDiscount(price) {
    if (price >= 2000) {
      return 0.7;
    } else if (price >= 1000) {
      return 0.8;
    } else if (price >= 500) {
      return 0.9;
    } else {
      return 1;
    }
  }
  a.當呼叫 checkout 函式時，需要將未折扣前的總金額做為參數傳入該函式。
  b.discount 變數的值為 getDiscount 函式回傳出來的數字，例如：當客人消費滿 500 元，會打 9 折。
  c.pay 變數會將未折扣前的總金額 totalPrice 參數乘上計算後的打折數。
  d.函式內無法呼叫另一個函式。

  ans : d; 
*/