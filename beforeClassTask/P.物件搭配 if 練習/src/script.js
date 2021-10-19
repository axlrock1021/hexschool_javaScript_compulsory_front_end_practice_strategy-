// 觀察客戶體溫，如果 37.5 以上(含)就不得進入餐廳

let andyStatus = {
  name: "Andy",
  age: 18,
  message: "",
};

// 隨時可變動
andyStatus.degreee = 36.5;

if (andyStatus.degreee >= 37.5) {
  andyStatus.message = "不得進入";
} else {
  andyStatus.message = "可以進入";
}

console.log(andyStatus);