const body = document.body;

const div = document.createElement("div");
div.style.display = "flex";
div.style.fontSize = "rem";
body.appendChild(div);

const h4 = document.createElement("h4");
h4.innerHTML = "Je fais du ";
div.appendChild(h4);

const target = document.createElement("h4");
target.classList.add("target");
div.appendChild(target);

const array = ["HTML", "CSS", "JS"];
let wordIndex = 0;
let letterIndex = -1;

function createLetter() {
    const letter = document.createElement("span");
    target.appendChild(letter);
    
    letter.classList.add("letter");
    letter.style.opacity = "0";
    letter.style.animation = "anim 5s ease forwards";
    letter.textContent = array[wordIndex][letterIndex];

    setTimeout(() => {
        letter.remove();
    }, 2000);
}

createLetter();

function addLetterAndWord() {
    setTimeout(() => {
        if (wordIndex >= array.length) {
            wordIndex = 0;  
            letterIndex = 0;
            addLetterAndWord();
        } else if (letterIndex < array[wordIndex].length) {
            createLetter();
            letterIndex++;
            addLetterAndWord();
        } else {
            letterIndex = 0;
            wordIndex++;
            setTimeout(() => {
                addLetterAndWord();
            }, 2000);
        }
    }, 80)
}

addLetterAndWord();

function createBird () {
    const bird = document.createElement("i");
    const rgbOneColor = Math.floor(Math.random() * 255);
    const rgbSecondColor = Math.floor(Math.random() * 255);
    const rgbThirdColor = Math.floor(Math.random() * 255);
    bird.classList.add("fas");
    bird.classList.add("fa-dove");
    bird.style.color = `rgb(${rgbOneColor}, ${rgbSecondColor}, ${rgbThirdColor})`;
    bird.style.fontSize = Math.random() * 20 + "px";
    bird.style.opacity = Math.random() + 0.4;
    bird.style.animationDuration = Math.random() + 2 + "s";
    bird.style.top = Math.random() * window.innerHeight + "px";
    body.appendChild(bird);

    setTimeout(() => {
        bird.remove();
    }, 2000);
}

setInterval(createBird, 100);

