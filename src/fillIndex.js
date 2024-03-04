
import { controllObject } from "./index.js";


let fillIndex = function (player, vari) {
    let arr = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    let variable = Number(vari);
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === variable) {
          player.hArray.push(i);
          player.vArray.push(j);
        }
      }
    }
    controllObject.choose = !controllObject.choose;
  };

  export {fillIndex}

  