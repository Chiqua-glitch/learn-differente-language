const play = document.querySelector(".play");
const app = document.querySelector("#app");

let counter = 1000;

play.addEventListener("click", () => {
  setInterval(() => {
    const covid = document.createElement("img");
    covid.src = "img/corona.png";
    covid.style.top = Math.random() * app.clientHeight + "px";
    covid.style.left = Math.random() * app.clientWidth + "px";
    app.appendChild(covid);
    const allCovid = document.querySelectorAll("img");

    counter--;
    allCovid.forEach((e) => {
      e.addEventListener("click", () => {
        e.remove();
      });
    });
  }, counter);
  play.remove();
});
