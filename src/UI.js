import {controllAction,controllObject} from "./index.js"
import { playGame } from "./playGame.js";

import { player1,player2 } from "./players.js";

let playHomePage = function () {
    let gameHeader = document.createElement("h2");
    gameHeader.setAttribute("class", "game_header");
    gameHeader.appendChild(document.createTextNode("Tic Tac Toe"));
    let gameImg = document.createElement("img");
    gameImg.setAttribute(
      "src",
      "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/tic-tac-toe-o-x-o-noughts-and-crosses-game-tom-hill.jpg"
    );
    gameImg.setAttribute("class", "game_image");
    let playBtn = document.createElement("button");
    playBtn.setAttribute("type", "button");
    playBtn.appendChild(document.createTextNode("Play Now"));
    document.querySelector("body").appendChild(gameHeader);
    document.querySelector("body").appendChild(gameImg);
    document.querySelector("body").appendChild(playBtn);
    playBtn.addEventListener("click", function (vari1, vari2, vari3) {
      controllObject.playHomePage = false;
  
      controllAction();
    });
  };

  let removeHomePage = function () {
    document.querySelector("body").removeChild(document.querySelector("h2"));
    document.querySelector("body").removeChild(document.querySelector("img"));
    document.querySelector("body").removeChild(document.querySelector("button"));
  };


  let createContactPage = function () {
    let firstText = "";
    let secondText = "";
    let startigHeader = document.createElement("h4");
    startigHeader.appendChild(document.createTextNode("Create Player's Profile"));
  
    let player1Lable = document.createElement("lable");
    player1Lable.appendChild(document.createTextNode("Player1's Name"));
    let player2Lable = document.createElement("lable");
    player2Lable.appendChild(document.createTextNode("Player2's Name"));
    let player1Input = document.createElement("input");
    player1Input.setAttribute("type", "text");
    player1Input.setAttribute("name", "player1");
    player1Input.addEventListener("input", function (e) {
      firstText = e.target.value;
      player1.name = e.target.value;
      console.log(firstText);
    });
    let player2Input = document.createElement("input");
    player2Input.setAttribute("type", "text");
    player2Input.setAttribute("name", "player2");
    player2Input.addEventListener("input", function (e) {
      secondText = e.target.value;
      player2.name = e.target.value;
      console.log(secondText);
    });
    let form1 = document.createElement("form");
    form1.setAttribute("class", "form1");
    form1.appendChild(player1Lable);
    form1.appendChild(player1Input);
    let form2 = document.createElement("form");
    form2.setAttribute("class", "form2");
    form2.appendChild(player2Lable);
    form2.appendChild(player2Input);
    let contactDiv = document.createElement("div");
    contactDiv.setAttribute("class", "contact_div");
    contactDiv.appendChild(form1);
    contactDiv.appendChild(form2);
    let startBtn = document.createElement("button");
    startBtn.innerHTML = "Start";
    //console.log(player2.name);
    //console.log(player1.name);
    startBtn.addEventListener("click", function () {
      if (player1.name.length > 3 && player2.name.length > 3) {
         console.log(player1.name.length);
         console.log(player2.name.length);
         controllObject.createContactPage = false;
         controllAction();
      }
    });
    document.querySelector("body").appendChild(startigHeader);
    document.querySelector("body").appendChild(contactDiv);
    document.querySelector("body").appendChild(startBtn);
  };

  let removeContactPage = function () {
    document.querySelector("body").removeChild(document.querySelector("h4"));
    document.querySelector("body").removeChild(document.querySelector(".contact_div"));
    document.querySelector("body").removeChild(document.querySelector("button"));
  };


  let playGamePage = function () {
    let gamePageHeader = document.createElement("h3");
    gamePageHeader.setAttribute("class", "game-page-header");
    document.querySelector("body").appendChild(gamePageHeader);
    let firstDiv;
    let secondDiv;
    let k = 0;
    for (let i = 1; i < 4; i++) {
      firstDiv = document.createElement("div");
      firstDiv.setAttribute("class", "three_div");
      for (let j = 1; j < 4; j++) {
        k = k + 1;
        secondDiv = document.createElement("div");
        secondDiv.setAttribute("class", "sub-div");
        secondDiv.setAttribute("data-value", `${k}`);
        firstDiv.appendChild(secondDiv);
      }
      document.querySelector("body").appendChild(firstDiv);
    }
  };
  
  
  let botom = function (txt) {
    let botomTag = document.createElement("h3");
    botomTag.setAttribute("class", "botom_text");
    let botomText = txt;
    let textNode = document.createTextNode(botomText);
    botomTag.appendChild(textNode);
    document.querySelector("body").appendChild(botomTag);
  };


  let reStartBtn=function(){
    let btn=document.createElement("button")
    btn.innerHTML="Restart"
    document.querySelector("body").appendChild(btn)
    btn.addEventListener("click",reStart)
}


let reStart=function(){
    let sub_div=document.querySelectorAll(".sub-div")
    for(let i=0;i<sub_div.length;i++){
      sub_div[i].innerHTML=""
    }
    player1.eraseArray()
    player2.eraseArray()
    player1.changeWinProperty()
    player2.changeWinProperty()
    controllObject.start()
    removeBtn()
    playGame()
}

let removeBtn=function(){
  let botomTag=document.querySelector(".botom_text")
  document.querySelector("body").removeChild(botomTag)
  let btn=document.querySelector("button")
  document.querySelector("body").removeChild(btn)
}



  export {playHomePage,removeHomePage,createContactPage,removeContactPage,playGamePage,botom,reStartBtn}