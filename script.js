const form = document.querySelector("form");

let playerScore = 0;
let computerScore = 0;

form.addEventListener("submit", saveName);

function saveName(event) {
  event.preventDefault();
  const name = document.querySelector("#name");
  form.remove();

  const gameDiv = document.createElement("div");
  document.body.append(gameDiv);
  gameDiv.style.display = "flex";
  gameDiv.style.justifyContent = "center";
  gameDiv.style.flexDirection = "column";
  gameDiv.style.margin = "10%";
  gameDiv.style.border = "1px solid hotpink";
  gameDiv.style.padding = "50px";
  gameDiv.style.textAlign = "center";

  const nameH1 = document.createElement("h1");
  gameDiv.appendChild(nameH1);
  nameH1.innerText = `Welcome ${name.value}!`;

  const descriptionP = document.createElement("p");
  gameDiv.appendChild(descriptionP);
  descriptionP.innerText =
    "These are the rules of the game: You must choose either rock paper or scissors by clicking on the image in an attempt to beat the computer. The first player that wins three times is the winner!";

  const choiceDiv = document.createElement("div");
  gameDiv.appendChild(choiceDiv);
  choiceDiv.style.display = "flex";
  choiceDiv.style.flexDirection = "row";
  choiceDiv.style.padding = "30px";
  choiceDiv.style.border = "1px solid hotpink";
  choiceDiv.style.flexWrap = "wrap";
  choiceDiv.style.gap = "50px";

  function createplayerDivs(div, player) {
    div = document.createElement("div");
    choiceDiv.appendChild(div);
    div.style.border = "1px solid hotpink";
    div.style.padding = "30px";
    div.style.display = "flex";
    div.style.flexDirection = "column";
    const playerName = document.createElement("h1");
    div.appendChild(playerName);
    playerName.innerText = player;
    const rockPaperDiv = document.createElement("div");
    div.appendChild(rockPaperDiv);
    rockPaperDiv.style.display = "flex";
    rockPaperDiv.style.flexDirection = "row";

    return div;
  }

  const playerDiv = createplayerDivs(null, name.value);
  const rockPaperDiv = document.createElement("div");
  playerDiv.appendChild(rockPaperDiv);
  rockPaperDiv.style.display = "flex";
  rockPaperDiv.style.flexDirection = "row";
  const scoreHead = document.createElement("h2");
  playerDiv.appendChild(scoreHead);

  const rockPaperSciss = ["rock", "paper", "scissors"];

  const computerDiv = createplayerDivs(null, "Computer");
  computerDiv.style.width = "40%";
  const computerChoice = document.createElement("img");
  computerChoice.src = "images/rock.jpg";
  computerDiv.appendChild(computerChoice);
  const scoreHeadComp = document.createElement("h2");
  computerDiv.appendChild(scoreHeadComp);

  const reset = document.createElement("button");
  gameDiv.appendChild(reset);
  reset.innerText = "New Player";
  reset.style.width = "200px";
  reset.style.height = "50px";
  reset.style.margin = "20px auto";
  reset.style.backgroundColor = "aquamarine";

  reset.addEventListener("click", function () {
    gameDiv.remove();
    document.body.append(form);
    name.value = "";
  });

  for (let i = 0; i < rockPaperSciss.length; i++) {
    const rps = document.createElement("img");
    rockPaperDiv.appendChild(rps);
    rps.src = `images/${rockPaperSciss[i]}.jpg`;
    rps.style.width = "100px";
    rps.style.height = "100px";
    rps.style.margin = "10px";

    rps.addEventListener("click", function () {
      const compSelect = Math.floor(Math.random() * rockPaperSciss.length);
      const computerTurn = rockPaperSciss[compSelect];
      computerChoice.src = `images/${computerTurn}.jpg`;

      if (
        (rockPaperSciss[i] == `rock` && computerTurn == `scissors`) ||
        (rockPaperSciss[i] == `paper` && computerTurn == `rock`) ||
        (rockPaperSciss[i] == `scissors` && computerTurn == `paper`)
      ) {
        playerScore++;
        scoreHead.innerText = `Score: ${playerScore}`;
      } else if (
        (computerTurn == `rock` && rockPaperSciss[i] == `scissors`) ||
        (computerTurn == `paper` && rockPaperSciss[i] == `rock`) ||
        (computerTurn == `scissors` && rockPaperSciss[i] == `paper`)
      ) {
        computerScore++;
        scoreHeadComp.innerText = `Score: ${computerScore}`;
      }

      function reset() {
        computerScore = 0;
        playerScore = 0;
        scoreHead.innerText = playerScore;
        scoreHeadComp.innerText = computerScore;
      }

      if (computerScore == 3) {
        alert(
          `You suuuuuuuck, ${name.value}! You just lost three games! Have another go!`
        );
        reset();
      } else if (playerScore == 3) {
        alert(
          `EYYYY! ${name.value}, You are awesome!! You just won three games! Another Game?`
        );
        reset();
      }
    });
  }
}
