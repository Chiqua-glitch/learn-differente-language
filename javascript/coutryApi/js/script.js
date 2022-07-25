function getApi() {
  return fetch("https://restcountries.com/v2/all")
    .then((response) => response.json())
    .then((data) => useApi(data));
}

getApi();

const main = document.querySelector("main");

function useApi(data) {
  for (let datas of data) {
    const paragraph = document.createElement("p");
    paragraph.innerHTML = datas.capital;
    main.appendChild(paragraph);
  }
  const inputText = document.querySelector("#text");
  inputText.addEventListener("input", () => {
    const allParagraph = document.querySelectorAll("p");
    allParagraph.forEach((e) => {
      if (e.textContent.toUpperCase().indexOf(inputText.value.toUpperCase()) > -1) {
        e.style.display = "block";
      } else {
        e.style.display = "none";
      }
    });
  });
}
