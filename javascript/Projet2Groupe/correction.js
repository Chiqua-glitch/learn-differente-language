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

async function getSentence() {
    return fetch("https://api.quotable.io/random")
        .then((response) => response.json())
        .then((data) => data.content)
}

async function randomSentence() {
    const sentence = await getSentence();
    inputText.value = null;
    div.innerHTML = "";
    sentence.split("").forEach(element => {
        const span = document.createElement("span");
        span.innerHTML = element;
        div.appendChild(span);
    })
}

randomSentence();

inputText.addEventListener("input", () => {
    const allSpan = div.querySelectorAll("span");
    const inputValue = inputText.value.split("");
    let correct = true;
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
    if (correct) randomSentence();
})