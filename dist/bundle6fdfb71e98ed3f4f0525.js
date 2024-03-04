/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "botom": () => (/* binding */ botom),
/* harmony export */   "createContactPage": () => (/* binding */ createContactPage),
/* harmony export */   "playGamePage": () => (/* binding */ playGamePage),
/* harmony export */   "playHomePage": () => (/* binding */ playHomePage),
/* harmony export */   "reStartBtn": () => (/* binding */ reStartBtn),
/* harmony export */   "removeContactPage": () => (/* binding */ removeContactPage),
/* harmony export */   "removeHomePage": () => (/* binding */ removeHomePage)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _playGame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playGame.js */ "./src/playGame.js");
/* harmony import */ var _players_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./players.js */ "./src/players.js");




var playHomePage = function playHomePage() {
  var gameHeader = document.createElement("h2");
  gameHeader.setAttribute("class", "game_header");
  gameHeader.appendChild(document.createTextNode("Tic Tac Toe"));
  var gameImg = document.createElement("img");
  gameImg.setAttribute("src", "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/tic-tac-toe-o-x-o-noughts-and-crosses-game-tom-hill.jpg");
  gameImg.setAttribute("class", "game_image");
  var playBtn = document.createElement("button");
  playBtn.setAttribute("type", "button");
  playBtn.appendChild(document.createTextNode("Play Now"));
  document.querySelector("body").appendChild(gameHeader);
  document.querySelector("body").appendChild(gameImg);
  document.querySelector("body").appendChild(playBtn);
  playBtn.addEventListener("click", function (vari1, vari2, vari3) {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.controllObject.playHomePage = false;
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.controllAction)();
  });
};

var removeHomePage = function removeHomePage() {
  document.querySelector("body").removeChild(document.querySelector("h2"));
  document.querySelector("body").removeChild(document.querySelector("img"));
  document.querySelector("body").removeChild(document.querySelector("button"));
};

var createContactPage = function createContactPage() {
  var firstText = "";
  var secondText = "";
  var startigHeader = document.createElement("h4");
  startigHeader.appendChild(document.createTextNode("Create Player's Profile"));
  var player1Lable = document.createElement("lable");
  player1Lable.appendChild(document.createTextNode("Player1's Name"));
  var player2Lable = document.createElement("lable");
  player2Lable.appendChild(document.createTextNode("Player2's Name"));
  var player1Input = document.createElement("input");
  player1Input.setAttribute("type", "text");
  player1Input.setAttribute("name", "player1");
  player1Input.addEventListener("input", function (e) {
    firstText = e.target.value;
    _players_js__WEBPACK_IMPORTED_MODULE_2__.player1.name = e.target.value;
    console.log(firstText);
  });
  var player2Input = document.createElement("input");
  player2Input.setAttribute("type", "text");
  player2Input.setAttribute("name", "player2");
  player2Input.addEventListener("input", function (e) {
    secondText = e.target.value;
    _players_js__WEBPACK_IMPORTED_MODULE_2__.player2.name = e.target.value;
    console.log(secondText);
  });
  var form1 = document.createElement("form");
  form1.setAttribute("class", "form1");
  form1.appendChild(player1Lable);
  form1.appendChild(player1Input);
  var form2 = document.createElement("form");
  form2.setAttribute("class", "form2");
  form2.appendChild(player2Lable);
  form2.appendChild(player2Input);
  var contactDiv = document.createElement("div");
  contactDiv.setAttribute("class", "contact_div");
  contactDiv.appendChild(form1);
  contactDiv.appendChild(form2);
  var startBtn = document.createElement("button");
  startBtn.innerHTML = "Start"; //console.log(player2.name);
  //console.log(player1.name);

  startBtn.addEventListener("click", function () {
    if (_players_js__WEBPACK_IMPORTED_MODULE_2__.player1.name.length > 3 && _players_js__WEBPACK_IMPORTED_MODULE_2__.player2.name.length > 3) {
      console.log(_players_js__WEBPACK_IMPORTED_MODULE_2__.player1.name.length);
      console.log(_players_js__WEBPACK_IMPORTED_MODULE_2__.player2.name.length);
      _index_js__WEBPACK_IMPORTED_MODULE_0__.controllObject.createContactPage = false;
      (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.controllAction)();
    }
  });
  document.querySelector("body").appendChild(startigHeader);
  document.querySelector("body").appendChild(contactDiv);
  document.querySelector("body").appendChild(startBtn);
};

var removeContactPage = function removeContactPage() {
  document.querySelector("body").removeChild(document.querySelector("h4"));
  document.querySelector("body").removeChild(document.querySelector(".contact_div"));
  document.querySelector("body").removeChild(document.querySelector("button"));
};

var playGamePage = function playGamePage() {
  var gamePageHeader = document.createElement("h3");
  gamePageHeader.setAttribute("class", "game-page-header");
  document.querySelector("body").appendChild(gamePageHeader);
  var firstDiv;
  var secondDiv;
  var k = 0;

  for (var i = 1; i < 4; i++) {
    firstDiv = document.createElement("div");
    firstDiv.setAttribute("class", "three_div");

    for (var j = 1; j < 4; j++) {
      k = k + 1;
      secondDiv = document.createElement("div");
      secondDiv.setAttribute("class", "sub-div");
      secondDiv.setAttribute("data-value", "".concat(k));
      firstDiv.appendChild(secondDiv);
    }

    document.querySelector("body").appendChild(firstDiv);
  }
};

var botom = function botom(txt) {
  var botomTag = document.createElement("h3");
  botomTag.setAttribute("class", "botom_text");
  var botomText = txt;
  var textNode = document.createTextNode(botomText);
  botomTag.appendChild(textNode);
  document.querySelector("body").appendChild(botomTag);
};

var reStartBtn = function reStartBtn() {
  var btn = document.createElement("button");
  btn.innerHTML = "Restart";
  document.querySelector("body").appendChild(btn);
  btn.addEventListener("click", reStart);
};

var reStart = function reStart() {
  var sub_div = document.querySelectorAll(".sub-div");

  for (var i = 0; i < sub_div.length; i++) {
    sub_div[i].innerHTML = "";
  }

  _players_js__WEBPACK_IMPORTED_MODULE_2__.player1.eraseArray();
  _players_js__WEBPACK_IMPORTED_MODULE_2__.player2.eraseArray();
  _players_js__WEBPACK_IMPORTED_MODULE_2__.player1.changeWinProperty();
  _players_js__WEBPACK_IMPORTED_MODULE_2__.player2.changeWinProperty();
  _index_js__WEBPACK_IMPORTED_MODULE_0__.controllObject.start();
  removeBtn();
  (0,_playGame_js__WEBPACK_IMPORTED_MODULE_1__.playGame)();
};

var removeBtn = function removeBtn() {
  var botomTag = document.querySelector(".botom_text");
  document.querySelector("body").removeChild(botomTag);
  var btn = document.querySelector("button");
  document.querySelector("body").removeChild(btn);
};



/***/ }),

/***/ "./src/calculateResult.js":
/*!********************************!*\
  !*** ./src/calculateResult.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateResult": () => (/* binding */ calculateResult)
/* harmony export */ });
/* harmony import */ var _sortWinningCast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sortWinningCast */ "./src/sortWinningCast.js");
/* harmony import */ var _playGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playGame */ "./src/playGame.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI */ "./src/UI.js");




var calculateResult = function calculateResult(player) {
  console.log("Checking result for", player.name);
  console.log("Horizontal Array:", player.hArray);
  console.log("Vertical Array:", player.vArray);

  if ((0,_sortWinningCast__WEBPACK_IMPORTED_MODULE_0__.sameValueSort)(player.hArray) == true || (0,_sortWinningCast__WEBPACK_IMPORTED_MODULE_0__.sameValueSort)(player.vArray) == true || (0,_sortWinningCast__WEBPACK_IMPORTED_MODULE_0__.findFirstDiagonal)(player) == true || (0,_sortWinningCast__WEBPACK_IMPORTED_MODULE_0__.findSecDiagonal)(player) == true) {
    player.win = true;
    console.log("".concat(player.name, " is winner"));
    var text = "".concat(player.name, " is winner");
    (0,_UI__WEBPACK_IMPORTED_MODULE_2__.botom)(text);
    document.querySelector(".game-page-header").innerText = "";
    (0,_UI__WEBPACK_IMPORTED_MODULE_2__.reStartBtn)(); //break;
  } else if (player.win == false && player.hArray.length == 5) {
    console.log("This match is draw");
    var _text = "This match is draw";
    (0,_UI__WEBPACK_IMPORTED_MODULE_2__.botom)(_text);
    document.querySelector(".game-page-header").innerText = "";
    (0,_UI__WEBPACK_IMPORTED_MODULE_2__.reStartBtn)(); //break;
  } else {
    (0,_playGame__WEBPACK_IMPORTED_MODULE_1__.playGame)();
  }
};



/***/ }),

/***/ "./src/choosePlayer.js":
/*!*****************************!*\
  !*** ./src/choosePlayer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "choosePlayer": () => (/* binding */ choosePlayer)
/* harmony export */ });
/* harmony import */ var _fillIndex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fillIndex */ "./src/fillIndex.js");
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./players */ "./src/players.js");
/* harmony import */ var _calculateResult__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculateResult */ "./src/calculateResult.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.js */ "./src/index.js");





var choosePlayer = function choosePlayer(markSign, vari) {
  if (_players__WEBPACK_IMPORTED_MODULE_1__.player1.chosen == _index_js__WEBPACK_IMPORTED_MODULE_3__.controllObject.choose) {
    (0,_fillIndex__WEBPACK_IMPORTED_MODULE_0__.fillIndex)(_players__WEBPACK_IMPORTED_MODULE_1__.player1, vari);
    console.log("Array of ".concat(_players__WEBPACK_IMPORTED_MODULE_1__.player1.name, " is ").concat(_players__WEBPACK_IMPORTED_MODULE_1__.player1.hArray, " and ").concat(_players__WEBPACK_IMPORTED_MODULE_1__.player1.vArray));
    markSign = _players__WEBPACK_IMPORTED_MODULE_1__.player1.sign;
    (0,_calculateResult__WEBPACK_IMPORTED_MODULE_2__.calculateResult)(_players__WEBPACK_IMPORTED_MODULE_1__.player1);
  } else if (_players__WEBPACK_IMPORTED_MODULE_1__.player2.chosen == _index_js__WEBPACK_IMPORTED_MODULE_3__.controllObject.choose) {
    (0,_fillIndex__WEBPACK_IMPORTED_MODULE_0__.fillIndex)(_players__WEBPACK_IMPORTED_MODULE_1__.player2, vari);
    console.log("Array of ".concat(_players__WEBPACK_IMPORTED_MODULE_1__.player2.name, " is ").concat(_players__WEBPACK_IMPORTED_MODULE_1__.player2.hArray, " and ").concat(_players__WEBPACK_IMPORTED_MODULE_1__.player2.vArray));
    markSign = _players__WEBPACK_IMPORTED_MODULE_1__.player2.sign;
    (0,_calculateResult__WEBPACK_IMPORTED_MODULE_2__.calculateResult)(_players__WEBPACK_IMPORTED_MODULE_1__.player2);
  }
};



/***/ }),

/***/ "./src/fillIndex.js":
/*!**************************!*\
  !*** ./src/fillIndex.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fillIndex": () => (/* binding */ fillIndex)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


var fillIndex = function fillIndex(player, vari) {
  var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  var variable = Number(vari);

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === variable) {
        player.hArray.push(i);
        player.vArray.push(j);
      }
    }
  }

  _index_js__WEBPACK_IMPORTED_MODULE_0__.controllObject.choose = !_index_js__WEBPACK_IMPORTED_MODULE_0__.controllObject.choose;
};



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "controllAction": () => (/* binding */ controllAction),
/* harmony export */   "controllObject": () => (/* binding */ controllObject)
/* harmony export */ });
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI.js */ "./src/UI.js");
/* harmony import */ var _playGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playGame */ "./src/playGame.js");



var controllObject = {
  choose: true,
  playHomePage: true,
  createContactPage: true
};

controllObject.start = function () {
  var condition = Math.round(Math.random() * 10);
  this.choose = condition % 2 == 0 ? true : false;
};

controllObject.start();

var controllAction = function controllAction() {
  if (controllObject.playHomePage == true) {
    (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.playHomePage)();
  } else if (controllObject.playHomePage == false && controllObject.createContactPage == true) {
    console.log("nothing");
    (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.removeHomePage)();
    (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.createContactPage)();
  } else {
    (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.removeContactPage)();
    (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.playGamePage)();
    (0,_playGame__WEBPACK_IMPORTED_MODULE_2__.playGame)();
  }
};

controllAction();


/***/ }),

/***/ "./src/playGame.js":
/*!*************************!*\
  !*** ./src/playGame.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playGame": () => (/* binding */ playGame)
/* harmony export */ });
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./players */ "./src/players.js");
/* harmony import */ var _choosePlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./choosePlayer */ "./src/choosePlayer.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./src/index.js");




var playGame = function playGame() {
  var sub_div = document.querySelectorAll(".sub-div");
  var player = _index_js__WEBPACK_IMPORTED_MODULE_2__.controllObject.choose == _players__WEBPACK_IMPORTED_MODULE_0__.player1.chosen ? _players__WEBPACK_IMPORTED_MODULE_0__.player1.name : _players__WEBPACK_IMPORTED_MODULE_0__.player2.name;
  document.querySelector(".game-page-header").innerText = "".concat(player, "'s turn");

  for (var i = 0; i < sub_div.length; i++) {
    sub_div[i].addEventListener("click", function (e) {
      var vari = e.target.dataset.value;
      console.log('hi');

      if (e.target.innerText === "" && _players__WEBPACK_IMPORTED_MODULE_0__.player1.win == false && _players__WEBPACK_IMPORTED_MODULE_0__.player2.win == false) {
        var markSign = _index_js__WEBPACK_IMPORTED_MODULE_2__.controllObject.choose ? "X" : "O";
        e.target.innerText = markSign;
        (0,_choosePlayer__WEBPACK_IMPORTED_MODULE_1__.choosePlayer)(markSign, vari);
      }
    });
  }
};



/***/ }),

/***/ "./src/players.js":
/*!************************!*\
  !*** ./src/players.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "player1": () => (/* binding */ player1),
/* harmony export */   "player2": () => (/* binding */ player2)
/* harmony export */ });
var player1 = {
  name: "",
  hArray: [],
  vArray: [],
  chosen: true,
  win: false
};
var player2 = {
  name: "",
  hArray: [],
  vArray: [],
  chosen: false,
  win: false
};

Object.prototype.eraseArray = function () {
  this.hArray = [];
  this.vArray = [];
};

Object.prototype.changeWinProperty = function () {
  this.win = false;
};



/***/ }),

/***/ "./src/sortWinningCast.js":
/*!********************************!*\
  !*** ./src/sortWinningCast.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findFirstDiagonal": () => (/* binding */ findFirstDiagonal),
/* harmony export */   "findSecDiagonal": () => (/* binding */ findSecDiagonal),
/* harmony export */   "sameValueSort": () => (/* binding */ sameValueSort)
/* harmony export */ });
function sameValueSort(arr) {
  var aArr = [];
  var newArr = [];

  var _loop = function _loop(i) {
    if (aArr.includes(arr[i]) == false) {
      aArr.push(arr[i]);
      newArr.push(arr.filter(function (e) {
        return e == arr[i];
      }));
    }
  };

  for (var i = 0; i < arr.length; i++) {
    _loop(i);
  }

  var isResult = newArr.filter(function (ele) {
    return ele.length > 2;
  });
  return isResult.length != 0 ? true : false;
}

var findFirstDiagonal = function findFirstDiagonal(player) {
  var result = false;
  var newArr = [];

  for (var i = 0; i < player.hArray.length; i++) {
    if (player.hArray[i] == player.vArray[i]) {
      newArr.push(player.hArray[i]);
    }
  }

  if (newArr.length == 3) {
    result = true;
  }

  return result;
};

var findSecDiagonal = function findSecDiagonal(player) {
  var result = false;
  var newArr = [];

  for (var i = 0; i < player.hArray.length; i++) {
    if (player.hArray[i] + player.vArray[i] == 2) {
      newArr.push(player.hArray[i]);
    }
  }

  if (newArr.length == 3) {
    result = true;
  }

  return result;
};



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: Arial, sans-serif;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 80vh;\n  margin: 0;\n}\n\n.three_div {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  width: 320px;\n  height: 100px;\n  margin: 5px;\n}\n\n.sub-div {\n  width: 100px;\n  height: 100px;\n  border-radius: 5px;\n  background-color: yellow;\n  margin: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.game_image {\n  height: 200px;\n  border-radius: 5px;\n  margin-top: 0px;\n  margin-bottom: 10px;\n}\n\n.game_header {\n  margin-bottom: 5px;\n}\n\n.form1 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-right: 25px;\n  margin-bottom: 30px;\n}\n\n.form2 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-left: 30px;\n  margin-bottom: 30px;\n}\n\n.contact_div {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\nh4 {\n  margin-bottom: 30px;\n}\n\n@media screen and (max-width: 600px) {\n  .three_div {\n    flex-direction: column;\n    align-items: center;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAMA;EACE,sBAAA;AAJF;;AAOA;EAEE,8BAAA;EAEA,aAAA;EAEA,uBAAA;EAEA,mBAAA;EAEA,sBAAA;EAEA,YAAA;EAEA,SAAA;AAXF;;AAcA;EAEE,aAAA;EAEA,mBAAA;EAEA,6BAAA;EAEA,YAAA;EAEA,aAAA;EAEA,WAAA;AAjBF;;AAoBA;EAEE,YAAA;EAEA,aAAA;EAEA,kBAAA;EAEA,wBAAA;EAEA,WAAA;EAEA,aAAA;EAEA,uBAAA;EAEA,mBAAA;AAzBF;;AA4BA;EACE,aAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;AAzBF;;AA2BA;EACE,kBAAA;AAxBF;;AA0BA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;AAvBF;;AAyBA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,iBAAA;EACA,mBAAA;AAtBF;;AAwBA;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;AArBF;;AAuBA;EACC,mBAAA;AApBD;;AAuBA;EAEE;IAEI,sBAAA;IAEA,mBAAA;EAvBJ;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\n\n$primary-color: #2fa8cc;\n$secondary-color: #f4f4f4;\n$box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n\n  font-family: Arial, sans-serif;\n\n  display: flex;\n\n  justify-content: center;\n\n  align-items: center;\n\n  flex-direction: column;\n\n  height: 80vh;\n\n  margin: 0;\n\n}\n.three_div {\n\n  display: flex;\n\n  flex-direction: row;\n\n  justify-content: space-around ;\n\n  width: 320px;\n\n  height: 100px;\n\n  margin: 5px;\n\n}\n.sub-div {\n\n  width: 100px;\n\n  height: 100px;\n\n  border-radius: 5px;\n\n  background-color: yellow;\n\n  margin: 5px;\n\n  display: flex;\n\n  justify-content: center;\n\n  align-items: center;\n\n}\n.game_image{\n  height:200px;\n  border-radius:5px;\n  margin-top:0px;\n  margin-bottom:10px;\n}\n.game_header{\n  margin-bottom:5px;\n}\n.form1{\n  display:flex;\n  flex-direction:column;\n  align-items:center;\n  margin-right:25px;\n  margin-bottom:30px;\n}\n.form2{\n  display:flex;\n  flex-direction:column;\n  align-items:center;\n  margin-left:30px;\n  margin-bottom:30px;\n}\n.contact_div{\n  display:flex;\n  flex-direction:row;\n  justify-content:space-between;\n}\nh4{\n margin-bottom:30px\n}\n\n@media screen and (max-width: 600px) {\n\n  .three_div {\n\n      flex-direction: column;\n\n      align-items: center;\n\n  }\n\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle6fdfb71e98ed3f4f0525.js.map