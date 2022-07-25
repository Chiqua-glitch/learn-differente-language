const btn = document.querySelectorAll(".btn");
const result = document.getElementById("result");

btn.forEach(elements => {
    elements.addEventListener("click", () => {
        result.innerHTML += elements.textContent;
    })
})

const equal = document.getElementById("equal");

equal.addEventListener("click", () => {
    result.innerHTML = eval(result.textContent);
    setTimeout(() => {
        result.innerHTML = "";
    }, 5000)
})

const clear = document.getElementById("clear");

clear.addEventListener("click", () => {
    result.innerHTML = "";
})