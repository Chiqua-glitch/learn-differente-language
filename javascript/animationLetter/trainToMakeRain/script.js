setInterval(getRain, 30);

const body = document.body;

function getRain() {
    const rain = document.createElement("i");
    rain.classList.add("fas");
    rain.classList.add("fa-tint");
    rain.style.fontSize = Math.random() * 7 + "px";
    rain.style.opacity = Math.random() + 0.4;
    rain.style.animationDuration = Math.random() + 1 + "s";
    rain.style.left = Math.random() * window.innerWidth + "px";


    body.appendChild(rain);

    setTimeout(() => {
        rain.remove();
    }, 2000);
}

const div = document.createElement("div");
div.style.animation = "cursor";
div.style.display = "flex";
div.style.alignItems = "center";
div.classList.add("Iam");
body.appendChild(div);

const h4 = document.createElement("h4");
h4.style.fontSize = "4rem";
h4.style.paddingRight = "10px";
h4.innerHTML = "Je suis";
div.appendChild(h4);

const addTitle = document.createElement("h4");
addTitle.style.animation = "color 30s alternate infinite"
addTitle.style.fontSize = "3.5rem";
addTitle.style.display = "flex"; 
div.appendChild(addTitle);

const cursor = document.createElement("p");
cursor.style.height = "3rem";
cursor.classList.remove("letter")
cursor.style.width = "3px";
cursor.style.backgroundColor = "black";
cursor.style.display = "inline-block";
cursor.style.animation = "flash 1s alternate infinite";
div.appendChild(cursor); 

let array = ["Developpeur", "Graphiste", "Photographe"];
let wordIndex = 0;
let letterIndex = -1;

const addLetter = () => {
    const span = document.createElement("span");
    span.classList.add("letter");
    addTitle.appendChild(span);
    span.textContent = array[wordIndex][letterIndex];

    setTimeout(() => {
            addTitle.removeChild(addTitle.lastElementChild);
    }, 2000)
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