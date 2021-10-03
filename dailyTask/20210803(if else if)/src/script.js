/* 
  雅萱是上班族，每次領薪水時，都要再扣勞保費跟健保費，請幫雅萱算出她的薪資級距要扣減多少錢：
    級距一 ： 24000 ~ 25219，扣勞保 552 元、健保 372 元。
    級距二 ： 25200 ~ 26399，扣勞保 579 元、健保 391 元。
    級距三 ： 26400 ~ 27599，扣勞保 607 元、健保 409 元。
    級距四 ： 27600 ~ 28799，扣勞保 635 元、健保 428 元。
  請利用以下變數，規劃 if else if 判斷雅萱級距，並計算出雅萱實領金額
    步驟一 ： 建立 if() 判斷式，判斷雅萱金額是否在各級距內。
    步驟二 ： 將各個級距的勞保金額、健保金額放入 if 判斷式的大括號 {} 內。
    步驟三 ： 將雅萱薪水放入各級距大括號 {} 內，並用雅萱薪水扣除勞保金額、健保金額。
*/

let wangShuanMoney = 26800;
let laborIsurancePrice;  // 勞保金額
let healthIsurancePrice; // 健保金額

if (wangShuanMoney >= 24000 && wangShuanMoney <= 25219) {
     laborIsurancePrice = 552;
     healthIsurancePrice = 372;
     wangShuanMoney -= laborIsurancePrice + healthIsurancePrice;
} else if (wangShuanMoney >= 25200 && wangShuanMoney <= 26399) {
     laborIsurancePrice = 579;
     healthIsurancePrice = 391;
     wangShuanMoney -= laborIsurancePrice + healthIsurancePrice;
} else if (wangShuanMoney >= 26400 && wangShuanMoney <= 27599) {
     laborIsurancePrice = 607;
     healthIsurancePrice = 409;
     wangShuanMoney -= laborIsurancePrice + healthIsurancePrice;
} else if (wangShuanMoney >= 27600 && wangShuanMoney <= 28799) {
     laborIsurancePrice = 635;
     healthIsurancePrice = 428;
     wangShuanMoney -= laborIsurancePrice + healthIsurancePrice;
}

console.log(`雅萱實領薪水為 ${wangShuanMoney} 元`)