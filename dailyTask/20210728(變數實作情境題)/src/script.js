// 第一題 媽媽請小明買水果，至少要三樣水果，最多不可超過 150 元，並印出水果金額。
// 近期水果售價
let applePrice = 50;
let mangoPrice = 30;
let guavaPrice = 30;
let bananaPrice = 20;
let papayaPrice = 40;
let cost;

cost = (papayaPrice * 1) + (applePrice * 1) + (bananaPrice * 2);
console.log(`小明總共買了 ${cost} 元`);


// 第二題 媽媽請小明回程的路上記得去雜貨店買醬油 1 瓶、鹽 1 包，雜貨店老闆心血來潮幫小明打了九折，小明有 200 元。
// 醬油、鹽售價
const soySaucePrice = 80;
const saltPrice = 40;
let sale = 0.9;
let mingMoney = 200;

mingMoney -= (soySaucePrice + saltPrice) * sale;
console.log(`小明還剩 ${mingMoney} 元`);


// 第三題 小明回家後，媽媽為了獎勵小明順利完成跑腿，打算給小明增加下個月零用錢，但在這之前媽媽想先考考小明數學，算對了才願意調漲，以下是媽媽出的題目，請大家一起協助小明。
/*
  農夫種了 12 顆高麗菜
  早上賣掉了 2 顆高麗菜
  中午賣掉了 3 顆高麗菜
  晚上又種了 1 顆高麗菜
*/
let cabbageNum = 12;

cabbageNum -= 2;
cabbageNum -= 3;
cabbageNum += 1;
console.log(`農夫的高麗菜剩下 ${cabbageNum} 顆`);