//const container = document.querySelector(".carousel");
const text = document.querySelector(".slider-text");
const photo = document.querySelector(".slider-img");
const buttons = document.querySelectorAll(".btn");
var index = 0;
const images = [
  "Advantageous positions",
  "Opening Improver",
  "Visualization and Intution Trainer",
  "Blunder preventer",
  "Puzzles and Tactics",
  "Endgame",
  "Defender",
  "checkmate",
];
const infos = [
  "Advantage Capitalisation Trainer",
  "Opening Improver",
  "Visualization and Intution Trainer",
  "Blunders and Mistakes",
  "Puzzles and Tactics",
  "Endgames",
  "Defender",
  "Checkmate patterns",
];

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("clicked");
    if (button.classList.contains("btn-left")) {
      index--;
      if (index < 0) {
        index = images.length - 1;
      }
      text.innerHTML = infos[index];
      console.log(infos[index], text.innerHTML);
      photo.src = `images/${images[index]}.jpg`;
      console.log(photo.src);
      //container.style.background = `url("${images[index]}.jpg") center no-repeat`;
    } else {
      index++;
      if (index === images.length) {
        index = 0;
      }
      text.innerHTML = infos[index];
      console.log(infos[index], text.innerHTML);
      photo.src = `images/${images[index]}.jpg`;
      console.log(photo.src);
      //container.style.background = `url("${images[index]}.jpg") center no-repeat`;
    }
  });
});

const questions=document.querySelectorAll('.qn');

questions.forEach((question)=>{
  question.addEventListener('click',()=>{
    question.classList.toggle('active');
  })
})
