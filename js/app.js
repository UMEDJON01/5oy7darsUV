import words from "./data.js";

const randomWord = document.getElementById("random__word");
const randomWordInput = document.getElementById("random_word_input");

randomWordInput.focus();

const userScore = document.getElementById("user__score");
const userTime = document.getElementById("user__time");

let globalWord;
let score = 0;
let time = 10;
let level = `easy`;
userTime.parentElement.style.color = "blue";

function randomWordGenerator() {
  const randomNumber = Math.trunc(Math.random() * words.length);
  randomWord.textContent = words[randomNumber];
  globalWord = words[randomNumber];
}

randomWordGenerator();

randomWordInput.addEventListener("input", () => {
  if (randomWordInput.value == globalWord) {
    randomWordGenerator();
    randomWordInput.value = "";
    score++;
    userScore.textContent = score;

    if (level == `easy`) {
      time += 5;
    } else if (level == `medium`) {
      time += 3;
    } else {
      time += 2;
    }
  }
});

const timer = setInterval(() => {
  time--;
  userTime.textContent = `${time}s`;

  if (time >= 7) {
    userTime.parentElement.style.color = "blue";
  } else if (time < 7 && time >= 4) {
    userTime.parentElement.style.color = "yellow";
    document.body.style = `box-shadow: 0px 0px 25px 28px rgba(246,246,5,0.75) inset;
    -webkit-box-shadow: 0px 0px 25px 28px rgba(246,246,5,0.75) inset;
    -moz-box-shadow: 0px 0px 25px 28px rgba(246,246,5,0.75) inset;`;
  } else if (time < 4 && time >= 1) {
    userTime.parentElement.style.color = "red";
    document.body.style = `box-shadow: 0px 0px 25px 28px rgba(236,21,0,0.75) inset;
    -webkit-box-shadow: 0px 0px 25px 28px rgba(236,21,0,0.75) inset;
    -moz-box-shadow: 0px 0px 25px 28px rgba(236,21,0,0.75) inset;`;
  } else {
    userTime.parentElement.style.color = "black";
  }

  if (time == 0) {
    clearInterval(timer);
  }
}, 1000);

const changeLevel = document.getElementById("change__level");

changeLevel.addEventListener("change", () => {
  level = changeLevel.value;
});
