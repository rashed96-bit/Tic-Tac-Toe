import { sameValueSort,findFirstDiagonal,findSecDiagonal } from "./sortWinningCast";
import { playGame } from "./playGame";
import { botom,reStartBtn } from "./UI";

let calculateResult = function (player) {
    console.log("Checking result for", player.name);
    console.log("Horizontal Array:", player.hArray);
    console.log("Vertical Array:", player.vArray);
  
    if (
      sameValueSort(player.hArray) == true ||
      sameValueSort(player.vArray) == true ||
      findFirstDiagonal(player) == true ||
      findSecDiagonal(player) == true
    ) {
      player.win = true;
      console.log(`${player.name} is winner`);
      let text = `${player.name} is winner`;
      botom(text);
      document.querySelector(".game-page-header").innerText = "";
      reStartBtn()
  
      //break;
    } else if (player.win == false && player.hArray.length == 5) {
      console.log("This match is draw");
      let text = "This match is draw";
      botom(text);
      document.querySelector(".game-page-header").innerText = "";
      reStartBtn()
      //break;
    } else {
      playGame();
    }
  };

  export {calculateResult}