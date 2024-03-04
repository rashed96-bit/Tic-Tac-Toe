
let player1 = {
  name: "",
  hArray: [],
  vArray: [],
  chosen: true,
  win: false,
};
let player2 = {
  name: "",
  hArray: [],
  vArray: [],
  chosen: false,
  win: false,
};

Object.prototype.eraseArray=function(){
  this.hArray=[]
  this.vArray=[]
}

Object.prototype.changeWinProperty=function(){
  this.win=false
}

export {player1,player2}