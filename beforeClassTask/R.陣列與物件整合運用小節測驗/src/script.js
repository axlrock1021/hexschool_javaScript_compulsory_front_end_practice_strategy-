/*
  第一題
  請問以下方法何者可以讀取出 "我是一間小小的衣服店"
  let store = [
    {
      storeName: "好漂亮的衣服店",
      clotherPrice: 100,
      pantsPrice: 200,
      isClose: true
    },
    {
      storeName: "我是一間小小的衣服店",
      clotherPrice: 500,
      pantsPrice: 600,
      isClose: false
    }
  ]
  a.store.storeName;
  b.store['storeName'];
  c.store[2].storeName;
  d.store[1].storeName;

  ans : d; 
*/

/*
  第二題
  以下 JSON 格式介紹何者為 "錯" ?
  s.JSON 格式為資料庫間可互相傳遞的共通格式。
  b.可以用來傳遞資料。
  c.JSON 格式只能應用在 JavaScript。
  d.JSON 格式的屬性會使用雙引號包覆。

  ans : c; 
*/

/*
  第三題
  此為每月盛產農產品產地 JSON 資料集內的其中兩筆資料，請問該如何讀取出 "柳橙" 呢 ?
  let data = [
    {
      "type": "水果",
      "month": "2",
      "crop": "柳橙",
      "variety": "",
      "county": "嘉義縣",
      "town": "番路鄉"
    },
    {
      "type": "水果",
      "month": "2",
      "crop": "蓮霧",
      "variety": "粉紅種及大粒種",
      "county": "高雄市",
      "town": "六龜區"
    }
  ]
  a.data.crop;
  b.data[1].crop;
  c.data[0]["crop"];
  d.crop[0];

  ans : c; 
*/

/*
  第四題
  關於 JSON 格式資料集的敘述何者 "錯誤" ?
  a.有可能是陣列或物件格式。
  b.最外層為 {} 大括號的為物件。
  c.最外層為 [] 中括號的為陣列。
  d.JSON 格式的資料集不能物件內包物件。

  ans : d; 可以。
*/

/*
  第五題
  小明撈取了一筆 JSON 資料集並賦予到 data 變數上，他發現此筆資料為陣列，而陣列內有相當多筆物件，
  如果他想確認裡面有幾筆物件並賦予到他宣告的變數 arrayLen 上，請問他可以如何撰寫 ?
  a.let arrayLen = data;
  b.let arrayLen = data['length'];
  c.let arrayLen = data[0];
  d.let arrayLen = data.length;

  ans : d; 
*/

/*
  第六題
  此為獨立音樂 JSON 資料集內的其中一筆資料，請問該如何讀取出 "臺北市中正區中山南路21-1號" 呢 ?
  let data = [
    {
      "version": "1.4",
      "UID": "607d50eed083a37388433563",
      "title": "{PAR表演藝術} 雜誌一年訂閱方案",
      "category": "5",
      "showInfo": [
        {
          "location": "臺北市中正區中山南路21-1號",
          "locationName": "商品熱賣"
        }
      ]
    }
  ]
  a.data.showInfo.location;
  b.data[1].showInfo.location;
  c.data[0].showInfo.location;
  d.data[0].showInfo[0].location;

  ans : d; 
*/