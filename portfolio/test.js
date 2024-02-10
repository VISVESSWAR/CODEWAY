//const container = document.querySelector(".carousel");
const text = document.querySelector(".slider-text");
const photo = document.querySelector(".slider-img");
const buttons = document.querySelectorAll(".btn");
var index = 0;
const images = ["you", "myimage", "C,C++ certificate-CSC"];
const infos = [
  "This is first text afkljf lkjasklf k kjfdlkn fk sa kf jnlknlkn",
  "This is second text",
  "This is third text",
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
      photo.src = `${images[index]}.jpg`;
      console.log(photo.src);
      //container.style.background = `url("${images[index]}.jpg") center no-repeat`;
    } else {
      index++;
      if (index === images.length) {
        index = 0;
      }
      text.innerHTML = infos[index];
      console.log(infos[index], text.innerHTML);
      photo.src = `${images[index]}.jpg`;
      console.log(photo.src);
      //container.style.background = `url("${images[index]}.jpg") center no-repeat`;
    }
  });
});
