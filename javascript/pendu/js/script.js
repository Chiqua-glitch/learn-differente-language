const app = document.querySelector("#app");

function getApi() {
  fetch("https://random-word-api.herokuapp.com/word")
    .then((response) => response.json())
    .then((data) => useApi(data));
}

getApi();

const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function useApi(data) {
  const wordGroup = document.createElement("div");
  app.appendChild(wordGroup);

  const dataGood = data.join("").split("");

  for (let i = 0; i < dataGood.length; i++) {
    const groupPara = document.createElement("div");
    groupPara.classList.add("groupPara");
    wordGroup.appendChild(groupPara);

    const paragraph = document.createElement("p");
    paragraph.innerHTML = dataGood[i];
    groupPara.appendChild(paragraph);

    const border = document.createElement("span");
    groupPara.appendChild(border);
  }

  const allDiv = document.querySelectorAll(".groupPara");
  allDiv[0].classList.add("firstWord");
  allDiv[allDiv.length - 1].classList.add("lastWord");

  for (let m = 0; m <= 9; m++) {
    const incorrect = document.createElement("img");
    incorrect.classList.add("incorrect");
    app.appendChild(incorrect);
  }

  const allImg = document.querySelectorAll("img");

  allImg[0].src = "img/bottomBar.png";
  allImg[1].src = "img/rightBar.png";
  allImg[2].src = "img/topBar.png";
  allImg[3].src = "img/downBar.png";
  allImg[4].src = "img/head.png";
  allImg[5].src = "img/body.png";
  allImg[6].src = "img/leftArms.png";
  allImg[7].src = "img/rightArms.png";
  allImg[8].src = "img/leftFoot.png";
  allImg[9].src = "img/rightFoot.png";

  const allButton = document.querySelectorAll("button");

  for (let o = 0; o < allDiv.length; o++) {
    if (
      !allDiv[o].classList.contains("firstWord") &&
      !allDiv[o].classList.contains("lastWord")
    ) {
      allDiv[o].children[0].style.visibility = "hidden";
    }

    allButton.forEach((e) => {
      e.addEventListener("click", () => {
        if (e.textContent === allDiv[o].children[0].textContent) {
          allDiv[o].children[0].style.visibility = "visible";
          allDiv[o].children[0].classList.add("correct");
        } else {
          allDiv[o].children[0].classList.remove("correct");
        }
      });
    });
  }

  allButton.forEach((e) => {
    e.addEventListener("click", () => {
      const correct = document.querySelector(".correct");
      const incorrect = document.querySelector(".incorrect");
      if (!correct) {
        incorrect.classList.remove("incorrect");
      }
    });
  });
}

for (let i = 0; i <= 25; i++) {
  const button = document.createElement("button");
  app.appendChild(button);
  for (let o = 0; o < alphabet.length; o++) {
    button.innerHTML = alphabet[i];
  }
}
