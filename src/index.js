
import "./styles/main.scss";
import {playHomePage,removeHomePage,createContactPage,removeContactPage,playGamePage} from "./UI.js";
import {playGame} from "./playGame";


let controllObject = {
  choose:true, 
  playHomePage: true,
  createContactPage: true,
  
};

controllObject.start=function(){
    let condition = Math.round(Math.random() * 10)
    this.choose=condition%2==0?true:false;
}

controllObject.start()


let controllAction = function () {
  if (controllObject.playHomePage == true) {
    playHomePage();
  } else if (
    controllObject.playHomePage == false &&
    controllObject.createContactPage == true
  ) {
    console.log("nothing");
    removeHomePage();
    createContactPage();
  } else {
    removeContactPage();
    playGamePage();
    playGame();
  }
};

controllAction();

export {controllObject,controllAction}


