const slides = document.querySelector(".slides");
const img = document.querySelectorAll(".slides img");

slides.style.width = img.length * 500 + "px";

let count = 0;

const right = document.querySelector(".right");
const left = document.querySelector(".left");

right.addEventListener("click", () => {
  if (count < img.length - 1) {
    count++;
    slides.style.transform = `translate(-${count * 500}px)`;
  }
  disabledArrow();
});

left.addEventListener("click", () => {
  if (count > 0) {
    count--;
    slides.style.transform = `translate(-${count * 500}px)`;
  }
  disabledArrow();
});

function disabledArrow() {
  if (count == 0) {
    left.style.opacity = ".5";
  } else {
    left.style.opacity = "1";
  }

  if (count == img.length - 1) {
    right.style.opacity = ".5";
  } else {
    right.style.opacity = "1";
  }
}
