const body = document.body;

const div = document.createElement("div");
div.style.display = "flex";
body.appendChild(div);

const h4 = document.createElement("h4");
h4.style.fontSize = "2.3rem";
h4.style.paddingRight = "10px";
h4.innerHTML = "Je suis";
div.appendChild(h4);

const addTitle = document.createElement("h4");
addTitle.style.fontSize = "2.3rem";
div.appendChild(addTitle);

let array = ["Developpeur", "Graphiste", "Photographe"];
let wordIndex = 0;
let letterIndex = 0;

const addLetter = () => {
    const span = document.createElement("span");
    addTitle.appendChild(span);
    span.textContent = array[wordIndex][letterIndex];

    setTimeout(() => {
        span.remove();
    }, 2800)
}

addLetter();

const addAndRemove = () => {
    setTimeout(() => {
        if (wordIndex >= array.length) {
            letterIndex = 0;
            wordIndex = 0;
            addAndRemove();
        } else if (letterIndex < array[wordIndex].length) {
            addLetter();
            letterIndex++;
            addAndRemove();
        } else {
            wordIndex++;
            letterIndex = 0;
            setTimeout(() => {
                addAndRemove();
            }, 2800);
        }
    }, 70)
}

addAndRemove(); 	