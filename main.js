/* Variáveis */

const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const btnOpen = document.querySelector("#btnOpen");
const btnAgain = document.querySelector("#btnAgain");

const yourLuck = document.querySelector("#yourLuck");

const randomNumber = Math.round(Math.random() * 10);
const phrasesOfCookie = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  " Procure acender uma vela em vez de amaldiçoar a escuridão",
];

let xAttempts = 1;

/* Eventos */

btnOpen.addEventListener('click', toggleScreen);
btnAgain.addEventListener('click', handleResetClick);

// openFortuneCookie.addEventListener("click", openCookieEvent);
// openFortuneCookieAgain.addEventListener("click", closedCookieEvent);

/* Funções */

function getFortune() {
  const index = (Math.floor(Math.random() * phrasesOfCookie.length));
  return (phrasesOfCookie[index]);
}


function openFortuneCookie() {
  const phrasesOfCookie = getFortune();
  yourLuck.innerText = phrasesOfCookie
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
  openFortuneCookie();
}

function handleResetClick() {
  toggleScreen()
}
