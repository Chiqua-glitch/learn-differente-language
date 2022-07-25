/*function getApi() {
  return fetch(
    "https://api.sampleapis.com/coffee/hot"
  )
    .then((response) => response.json())
    .then((data) => data);
}

getApi();

async function useApi() {
  const api = await getApi();
  console.log(api[11]);
}

useApi();
*/

//show different menu in burger menu

const showMenu = document.querySelectorAll(".showMenu");

showMenu.forEach((e) => {
  e.addEventListener("click", (event) => {
    const getMenu = e.parentElement.parentElement.parentElement.children[1];
    if (getMenu) {
      if (getMenu.classList.contains("hide")) {
        getMenu.classList.replace("hide", ["show"]);
      } else {
        getMenu.classList.replace("show", ["hide"]);
      }
    }
    if (!event.target.classList.contains("selected")) {
      e.classList.replace("fa-chevron-down", ["fa-angle-up"]);
      e.classList.add("selected");
    } else {
      e.classList.replace("fa-angle-up", ["fa-chevron-down"]);
      e.classList.remove("selected");
    }
  });
});

// hide / show the menu

const activeMenuBurger = document.querySelector(".activeMenuBurger");
const menuBurger = document.querySelector(".menuBurger");

activeMenuBurger.addEventListener("click", () => {
  menuBurger.classList.replace("hideMenuBurger", ["showMenuBurger"]);
});

const hideMenuBurger = document.querySelector(".hideMenu");

hideMenuBurger.addEventListener("click", () => {
  menuBurger.classList.replace("showMenuBurger", ["hideMenuBurger"]);
});

//slider for coffe time

const items = document.querySelectorAll(".slider img");
const nbSlide = items.length;
const suivant = document.querySelector(".arrowRight");
const precedent = document.querySelector(".arrowLeft");
let count = 0;

function slideSuivante() {
  items[count].classList.remove("active");
  contBtn[count].style.color = "";
  if (count < nbSlide - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add("active");
  contBtn[count].style.color = "white";
}
suivant.addEventListener("click", slideSuivante);

const contBtn = document.querySelectorAll(".cont-btn span");
contBtn[0].style.color = "white";

function slidePrecedente() {
  items[count].classList.remove("active");
  contBtn[count].style.color = "";
  if (count > 0) {
    count--;
  } else {
    count = nbSlide - 1;
  }

  items[count].classList.add("active");
  contBtn[count].style.color = "white";
}
precedent.addEventListener("click", slidePrecedente);

setInterval(() => {
  
  items[count].classList.remove("active");
  contBtn[count].style.color = "";
  if (count < nbSlide - 1) {
    count++;
  } else {
    count = 0;
  }
  contBtn[count].style.color = "white";
  items[count].classList.add("active");
}, 10000);
