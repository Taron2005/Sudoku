const gamePage = document.querySelector(".game__page");
let board = document.querySelector(".board");
let row = document.querySelectorAll(".row");
let moves__number = document.querySelector(".moves__number");
let cube__for__number = document.querySelectorAll(".cube__for__number");
let num = document.querySelectorAll(".num");
let menu = document.querySelector(".menu");
let startBtn = document.querySelector(".menu .start");
let selectedNumber = 1;

let boardNumbers = [
  "--74916-5",
  "2---6-3-9",
  "-----7-1-",
  "-586----4",
  "--3----9-",
  "--62--187",
  "9-4-7---2",
  "67-83----",
  "81--45---",
];
let solution = [
  "387491625",
  "241568379",
  "569327418",
  "758619234",
  "123784596",
  "496253187",
  "934176852",
  "675832941",
  "812945763",
];
startBtn.addEventListener("click", () => {
  gamePage.classList.add("active");
  menu.classList.remove("active");
  game();
});
function game() {
  WriteNumber();
  selectNumber();
  putNumber();
}
function WriteNumber() {
  for (let i = 0; i < boardNumbers.length; i++) {
    for (let j = 0; j < boardNumbers[i].length; j++) {
      if (boardNumbers[i][j] != "-") {
        row[i].children[j].textContent = boardNumbers[i][j];
        row[i].children[j].style.backgroundColor = "rgba(128, 128, 128, 0.788)";
      }
    }
  }
}
for (let cube of cube__for__number) {
  cube.addEventListener("keydown", (e) => {
    console.log(e.key);
  });
}

function putNumber() {
  for (let i = 0; i < boardNumbers.length; i++) {
    for (let j = 0; j < boardNumbers[i].length; j++) {
      if (row[i].children[j].textContent == "") {
        row[i].children[j].addEventListener("click", function put() {
          moves__number.textContent++;
          if (selectedNumber == solution[i][j]) {
            row[i].children[j].textContent = selectedNumber;
          }
          if (row[i].children[j].textContent != "") {
            row[i].children[j].removeEventListener("click", put);
          }
          win();
        });
      }
    }
  }
}
function selectNumber() {
  document.addEventListener("keydown", (e) => {
    if (e.keyCode >= 49 && e.keyCode <= 57) {
      selectedNumber = e.key;
      for (d of num) {
        d.style.border = "1px solid white";
      }
      num[e.key - 1].style.border = "4px solid yellow";
    }
  });
  for (let selnum of num) {
    selnum.addEventListener("click", () => {
      for (d of num) {
        d.style.border = "1px solid white";
      }
      selectedNumber = selnum.textContent;
      selnum.style.border = "4px solid yellow";
    });
  }
}
function win() {
  let counter = 0;
  for (let cube of cube__for__number) {
    if (cube.textContent != "") {
      counter++;
    }
  }
  if (moves__number.textContent == 48) {
    alert("Դուք կորցրեցիք 50% զեղչ շահելու հնարավորությունը");
  }
  if (moves__number.textContent == 54) {
    alert("Դուք կորցրեցիք 24% զեղչ շահելու հնարավորությունը");
  }
  if (moves__number.textContent == 60) {
    alert("Դուք կորցրեցիք զեղչ շահելու հնարավորությունը");
  }
  if (counter == 81) {
    alert("You won");
    for (let cube of cube__for__number) {
      cube.textContent = "";
    }
    moves__number.textContent = 0;
    gamePage.classList.remove("active");
    menu.classList.add("active");
  }
}
