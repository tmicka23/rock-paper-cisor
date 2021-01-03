const rockElem = document.getElementById("rock");
const paperElem = document.getElementById("paper");
const scissorsElem = document.getElementById("scissors");
const resultsElem = document.getElementById("results");
const playerElem = document.querySelector(".player");

const objects = [
  {
    name: "rock",
    win: "scissors",
    loose: "paper",
  },
  {
    name: "paper",
    win: "rock",
    loose: "scissors",
  },
  {
    name: "scissors",
    win: "paper",
    loose: "rock",
  },
];

let computer = {};

const shuffle = (arr) => {
  return arr[Math.floor(Math.random() * Math.floor(arr.length))];
};

const endPlay = () => {
  resultsElem.classList.contains("show") &&
    resultsElem.classList.remove("show");
  resultsElem.innerHTML = "";
  resultsElem.classList.contains("loose") &&
    resultsElem.classList.remove("loose");
  playerElem.classList.contains("loose") &&
    playerElem.classList.remove("loose");
  resultsElem.classList.contains("win") && resultsElem.classList.remove("win");
  playerElem.classList.contains("win") && playerElem.classList.remove("win");
};

const startPlay = (playerChoice) => {
  endPlay();
  const playerObject = objects.find((o) => o.name === playerChoice);
  const computerObject = shuffle(objects);

  if (playerObject.name === computerObject.name) {
    resultsElem.innerHTML = `<div class="alert">${playerObject.name} is equal to ${computerObject.name}</div>`;
  } else if (playerObject.loose === computerObject.name) {
    resultsElem.classList.add("loose");
    playerElem.classList.add("loose");
    resultsElem.innerHTML = `<div class="alert">${playerObject.name} looses to ${computerObject.name}</div>`;
  } else {
    resultsElem.classList.add("win");
    playerElem.classList.add("win");
    resultsElem.innerHTML = `<div class="alert">${playerObject.name} wins to ${computerObject.name}</div>`;
  }

  resultsElem.classList.add("show");

  setTimeout(() => {
    endPlay();
  }, 3000);
};

rockElem.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  startPlay("rock");
});

paperElem.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  startPlay("paper");
});

scissorsElem.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  startPlay("scissors");
});
