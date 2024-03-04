export function sameValueSort(arr) {
  let aArr = [];
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (aArr.includes(arr[i]) == false) {
      aArr.push(arr[i]);
      newArr.push(arr.filter((e) => e == arr[i]));
    }
  }

  let isResult=newArr.filter((ele)=>ele.length>2)
  return isResult.length != 0 ? true : false;
  
}

let findFirstDiagonal = function (player) {
  let result = false;
  let newArr = [];
  for (let i = 0; i < player.hArray.length; i++) {
    if (player.hArray[i] == player.vArray[i]) {
      newArr.push(player.hArray[i]);
    }
  }
  if (newArr.length == 3) {
    result = true;
  }
  return result;
};

let findSecDiagonal = function (player) {
  let result = false;
  let newArr = [];
  for (let i = 0; i < player.hArray.length; i++) {
    if (player.hArray[i] + player.vArray[i] == 2) {
      newArr.push(player.hArray[i]);
    }
  }
  if (newArr.length == 3) {
    result = true;
  }
  return result;
};

export {findFirstDiagonal,findSecDiagonal}
