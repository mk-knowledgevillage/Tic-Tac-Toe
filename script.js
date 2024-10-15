let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];

let turnO=true;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.textContent="O";
      turnO=false;
    } else {
      box.textContent="X";
      turnO=true;
    }
    box.disabled =true;
    checkWinner();
    });
});

const disabledBtn = () => {
  boxes.forEach((box) => 
    box.disabled = true);
};

const newGame = () => {
  resetGame();
  msgContainer.classList.add("hide");
};

const showWinners = (winner) => {
  msg.style.color = "green";
  msg.innerText =`Congratulations, winner is ${winner}`;
  msgContainer.classList.remove("hide");
};

const checkWinner = () => {
  for(let pattern of winPatterns) {

    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    
    if(pos1Val!=="" && pos2Val!=="" && pos3Val!=="") {
      if(pos1Val===pos2Val && pos2Val===pos3Val) {
        console.log("winner",pos1Val);
        showWinners(pos1Val);
        disabledBtn();
      }
    }
  }
    
}

const resetGame =() => {
  boxes.forEach((box) => {
    box.textContent = "";
    box.disabled = false;
  });
  msgContainer.classList.add("hide");
  turnO = true;
};


newGameBtn.addEventListener("click", newGame);
resetBtn.addEventListener("click", resetGame);
