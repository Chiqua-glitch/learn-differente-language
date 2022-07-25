const body = document.body;
body.style.margin = "0";

const main = document.createElement("main");
main.style.paddingTop = "3rem";
main.style.maxWidth = "1000px";
main.style.margin = "0 auto";
main.style.textAlign = "center";
body.appendChild(main);

const div = document.createElement("div");
div.style.margin = "2rem 0";
main.appendChild(div);

const inputText = document.createElement("input");
inputText.setAttribute("type", "text");
inputText.placeholder = "Veuillez entrer  la phrase ci-dessus";
inputText.style.width = "100%";
inputText.style.padding = "1rem";
main.appendChild(inputText);

const timerBar = document.createElement("span");
timerBar.style.animation = "timerBar 122s";
timerBar.style.height = "1rem";
timerBar.style.margin = "1rem 0";
timerBar.style.display = "block";

const numberOfResponse = document.createElement("p");
main.appendChild(numberOfResponse);
let score = 0;

const lose = document.createElement("p");

async function getSentence() {
    return fetch("https://api.quotable.io/random")
        .then((response) => response.json())
        .then((data) => data.content)
}

async function randomSentence() {
    const sentence = await getSentence();
    inputText.value = null;
    div.innerHTML = "";
    if (score > 1) {
        numberOfResponse.innerHTML = `Vous avez répondu à ${score} phrases`;
        lose.innerHTML = `Le timer est finit vous avez ${score} points`;
    } else {
        numberOfResponse.innerHTML = `Vous avez répondu à ${score} phrase`;
        lose.innerHTML = `Le timer est finit vous avez eux ${score} points`;
    }
    score++;
    sentence.split("").forEach(element => {
        const span = document.createElement("span");
        span.innerHTML = element;
        div.appendChild(span);
    })
}

randomSentence();

let counterTimeBar = 0;
let minute = 2;
let second = 0;
const spanMinute = document.createElement("span");
const spanText = document.createElement("span");
const spanSecond = document.createElement("span");

inputText.addEventListener("input", () => {
    const allSpan = div.querySelectorAll("span");
    let correct = true;
    const inputValue = inputText.value.split("");
    counterTimeBar++;
    if (counterTimeBar === 1) {
        const groupTimer = document.createElement("div");
        main.appendChild(timerBar);
        main.appendChild(groupTimer);
        spanMinute.innerHTML = minute;
        spanSecond.innerHTML = second;
        setTimeout(() => {
            main.appendChild(lose);
            inputText.disabled = true;
        }, 122000)
        if (timer === 0) {
            timer++;
        }
        time();
        groupTimer.appendChild(spanMinute);
        groupTimer.appendChild(spanText);
        spanText.innerHTML = ":";
        groupTimer.appendChild(spanSecond);
    }
    allSpan.forEach((character, index) => {
        const arrayValue = inputValue[index];
        if (arrayValue === character.textContent) {
            character.style.color = "green";
            character.style.textDecoration = "none";
        } else {
            character.style.color = "red";
            character.style.textDecoration = "underline";
            correct = false;
        }
    })
    console.log(correct)
    if (correct) randomSentence();
})

const retry = document.createElement("button");
retry.style.width = "7rem";
retry.style.height = "3rem";
retry.style.textTransform = "capitalize";
retry.innerHTML = "recommencer";
main.appendChild(retry);

retry.addEventListener("click", () => window.location.reload());

let timer = 0;

function time() {
    if (timer === 1) {
        setInterval(() => {
            const delInterval = setInterval(() => {
                if (minute === 0 && second === 0 && !spanText.innerHTML === "Vous avez perdu") {
                    second = 60;
                } else if (minute > 0 && second === 0) {
                    minute--;
                    second = 60;
                }
                if (second > 0) {
                    second--;
                }
                clearInterval(delInterval);
            });

            spanMinute.innerHTML = `${minute}`;
            spanSecond.innerHTML = `${second}`;

        }, 1000)
    }
}