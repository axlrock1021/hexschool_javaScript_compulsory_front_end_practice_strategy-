/*
  題目一
  餐廳正在提供九折促銷活動，只要滿足其中一項條件，就可以打折：
  以下兩個條件達成其中一項，可打九折：
  1.滿 500 元
  2.為 VIP
*/

let total = 200;
let isVIP = true;
if (total >= 500 || isVIP) {
  console.log(`你可以打九折`);
} else {
  console.log(`你沒有折扣`);
}

/*
  題目二
  小美進便利商店前要達成以下三項條件，三項條件皆需達成才可完成任務：
  1.掃描 QRCode
  2.用酒精消毒手部
  3.額溫大於 37.5 不能進去
*/

let scanQrCode = true;
let disinfectHand = true;
let temperature = 36;
if (scanQrCode && disinfectHand && temperature <= 37.5) {
  console.log(`你可以進便利商店！`);
} else {
  console.log(`你不能進便利商店！`);
}

/*
  題目三
  超商今日特賣，只要滿 300 元，就能打九折。
  1.協助算出客人 Tom 售價
  2.使用判斷式判斷 Tom 是否有打折
*/

const coffeePrice = 50;
const sandwichPrice = 40;
let sale = 0.9;
let tomTotal = coffeePrice * 3 + sandwichPrice * 4;
if (tomTotal >= 300) {
  tomTotal *= sale;
  console.log(`可以打折，打折後金額為 ${tomTotal} 元`);
} else {
  console.log(`不可以打折`);
}
