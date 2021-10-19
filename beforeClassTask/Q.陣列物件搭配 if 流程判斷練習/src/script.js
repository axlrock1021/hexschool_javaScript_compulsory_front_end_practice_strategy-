// 觀察客戶體溫，如果 37.5 以上(含)就不得進入餐廳

let peopleStatus = [
  {
    name: "Andy",
    age: 18,
    message: "",
  },
  {
    name: "Mark",
    age: 10,
    message: "",
  },
];

// 隨時可變動
peopleStatus[0].degreee = 38.5;

if (peopleStatus[0].degreee >= 37.5) {
  peopleStatus[0].message = "不得進入";
} else {
  peopleStatus[0].message = "可以進入";
}

console.log(peopleStatus);