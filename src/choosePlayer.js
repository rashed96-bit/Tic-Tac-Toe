import { fillIndex } from "./fillIndex";
import { player1,player2 } from "./players";
import { calculateResult } from "./calculateResult";
import { controllObject } from "./index.js";

let choosePlayer = function (markSign, vari) {
    if (player1.chosen == controllObject.choose) {
      fillIndex(player1, vari);
      console.log(`Array of ${player1.name} is ${player1.hArray} and ${player1.vArray}`);
      markSign = player1.sign;
      calculateResult(player1);
    } else if (player2.chosen == controllObject.choose) {
      fillIndex(player2, vari);
      console.log(`Array of ${player2.name} is ${player2.hArray} and ${player2.vArray}`);
      markSign = player2.sign;
      calculateResult(player2);
    }
  };

  export {choosePlayer}