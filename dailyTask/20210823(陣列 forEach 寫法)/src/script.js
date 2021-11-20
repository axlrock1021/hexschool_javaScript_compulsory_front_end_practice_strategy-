/*
  觀念複習
  forEach() 是陣列的方法，會將陣列內的每個值都遍歷。
  可以帶入三個參數(item 當下陣列的值 、 index 迭代資料的索引值 、 array 執行的陣列本身)
  1.forEach 寫法介紹
    JavaScript ：
    let data = [30, 40, 50];
    data.forEach(function(item, index, array) {
      console.log(item, index, array);
    })
    執行後的結果 ：
    30, 0, [30, 40, 50]
    40, 1, [30, 40, 50]
    50, 2, [30, 40, 50]

  2.搭配 if，篩選出陣列裡面有幾個偶數
  forEach() 內可以搭配 if ，並透過在全域宣告變數 total ，累加計算陣列內偶數數字數目 ：
    JavaScript ：
    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let total = 0;
    data.forEach(function (item, index, array) {
      if (item % 2 == 0) {
        console.log(item) // 2, 4, 6, 8
        total += 1;
      }
    });
    console.log(total); // 4

  3.forEach 讀取資料
  如果陣列內有多筆物件，可以透過以下方法取出物件內的值 ：
    JavaScript ：
    let hexSchoolDiscord = [
      {
        channelName: "六角筆記王",
        teacher: "廖洧杰",
        teachingAssistant: "Vivian"
      },
      {
        channelName: "js-必修篇",
        teacher: "廖洧杰",
        teachingAssistant: "艾草"
      }
    ];
    hexSchoolDiscord.forEach(function (item) {
      console.log(item.channelName); 
      console.log(item.teachingAssistant);
    });
    執行後的結果 ：
    六角筆記王
    Vivian
    js-必修篇
    艾草
*/

// 題目一
// 情境題 ：「我跟你媽一起掉進水裡之咖哩飯到底要不要攪拌 ?」
// 自古以來有個問題很常出現，出現頻率大概跟「我跟你媽一起掉進水裡，你會先救誰 ?」一樣常見。
// 那就是：「咖哩飯到底要不要攪拌 ?」
// 筑子為了了解大家的喜好，特別市場調查，並作成紀錄，請幫她算出到底是攪拌派多 ? 還是不攪派多呢 ?
// 步驟一 請透過 data 陣列跑 forEach ，並至少帶入第一個參數
// 市場調查資料
let data = [
  {
    name: "艾草",
    stir: true,
  },
  {
    name: "Vivian",
    stir: false,
  },
  {
    name: "筑子",
    stir: false,
  },
  {
    name: "魚魚",
    stir: false,
  },
  {
    name: "鵬聖",
    stir: true,
  },
];

// 統計人數
let total = {
  stir: 0,
  noStir: 0,
};

// 統計名單
let peopleList = {
  stirName: [],
  noStirName: [],
};

// 步驟一 請透過 data 陣列跑 forEach ，並至少帶入第一個參數
data.forEach(function (item) {
  // 步驟二 以下步驟在 forEach {} 大括號內執行
  // 加入以下判斷式
  if (item.stir) {
    // total 物件內屬性 stir 的值加 1
    total.stir += 1;
    // 請將 data 陣列內的 name
    // 賦予到 peopleList 物件內屬性 stirName 的陣列上
    peopleList.stirName.push(item.name);
  } else {
    // total 物件內屬性 noStir 的值加 1
    total.noStir += 1;
    // 請將 data 陣列內的 name
    // 賦予到 peopleList 物件內屬性 noStirName 的陣列上
    peopleList.noStirName.push(item.name);
  }
});
console.log(`會攪拌咖哩飯人共有 ${total.stir} 人`);
console.log(`不會攪拌咖哩飯人共有 ${total.noStir} 人`);
console.log(peopleList);