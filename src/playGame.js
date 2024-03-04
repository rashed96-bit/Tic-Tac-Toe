import { player1,player2 } from "./players";
import { choosePlayer } from "./choosePlayer";
import { controllObject } from "./index.js";

let playGame = function () {
    let sub_div = document.querySelectorAll(".sub-div");
    let player = controllObject.choose == player1.chosen ? player1.name : player2.name;
    document.querySelector(".game-page-header").innerText = `${player}'s turn`;
    for (let i = 0; i < sub_div.length; i++) {
      sub_div[i].addEventListener("click", function (e) {
        let vari = e.target.dataset.value;
        console.log('hi')
        if (
          e.target.innerText === "" &&
          player1.win == false &&
          player2.win == false
        ) {
          let markSign = controllObject.choose ? "X" : "O";
          e.target.innerText = markSign;
          choosePlayer(markSign, vari);
        }
      });
    }
  };

  export {playGame}
  