const input = document.querySelector("input");

function getValue () {
    const allTd = document.querySelectorAll(" tbody td");
    for (let i = 0; i < allTd.length; i++) {
        if (allTd[i]) {
            if (allTd[i].textContent.toUpperCase().indexOf(input.value.toUpperCase()) > -1) {
                allTd[i].style.display = "";
            } else {
                allTd[i].style.display = "none";
            }
        }
    }
}

input.addEventListener("input", getValue);