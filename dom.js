if (typeof module !== "undefined") {
  var logic = require("./logic.js");
  var data = require("./data.js");
}

var form = document.querySelector("#form");

var gifDiv1 = document.querySelector("#avatar-output-1");
var gifDiv2 = document.querySelector("#avatar-output-2");

var statDiv1 = document.querySelector("#stats-output-1");
var statDiv2 = document.querySelector("#stats-output-2");

var winnerDiv = document.querySelector("#winner-div");

var fightButton = document.querySelector("#fight-btn");
var submitButton = document.querySelector("#submit-btn");


var statsObjOne_g = null;
var statsObjTwo_g = null;

// Extract input variables from form variable and create cards
form.addEventListener("submit", function(event) {
  event.preventDefault();
  // grab form inputs
  var usernameOne = event.target[0].value;
  var animalOne = event.target[1].value;
  var usernameTwo = event.target[2].value;
  var animalTwo = event.target[3].value;
  //   console.log(usernameOne, usernameTwo, animalOne, animalTwo);
  // make giphy requests
  var gifUrlOne = data.fetch(
    data.createGiphyURL,
    animalOne,
    logic.getGifSrc,
    renderGif,
    gifDiv1
  );
  var gifUrlTwo = data.fetch(
    data.createGiphyURL,
    animalTwo,
    logic.getGifSrc,
    renderGif,
    gifDiv2
  );
  // retrieve stats object

  var statsObjOne = data.fetch(
    data.createGithubURL,
    usernameOne,
    logic.getAllStats,
    renderStats,
    statDiv1
  );
  var statsObjTwo = data.fetch(
    data.createGithubURL,
    usernameTwo,
    logic.getAllStats,
    renderStats,
    statDiv2
  );
});


function renderGif(url, element) {
    var html = "<img src='" + url + "' alt='avatar gif'>";
    element.innerHTML = html;
}

function renderStats(obj, element) {
    if (element == statDiv1) {
        statsObjectOne_g = obj;
        console.log('stats 1:',statsObjectOne_g)
    } else {
    // console.log(statsObjectTwo_g)
        statsObjectTwo_g = obj;
        console.log('stats 2:',statsObjectTwo_g)
    }  
    // create stats ul of lis
    var output = "<h2>";
    output += obj.name + "</h2><ul>";
    var keys = Object.keys(obj);
    for (let i = 0; i < keys.length - 1; i++) {
        var list = "<li id=";
        list += keys[i].replace(/\s/g, "_") + ">";
        list += keys[i] + ": <span>";
        list += obj[keys[i]] + "</span></li>";
        output += list;
    }
    output += "</ul>";
    element.innerHTML = output;
    // once objects stored globally, add event listener to fight button to render winner
    if (statsObjectOne_g !== null && statsObjectTwo_g !== null) {
        fightButton.addEventListener("click", function(e) {
            renderWinner(logic.compare(statsObjectOne_g,statsObjectTwo_g), winnerDiv);
        });
        
    }
}

function renderWinner(obj, element) {
    var output = "<h2>The winner is <strong>";
    output += obj.winner + "</strong> with: "
    output += obj.category +"!</h2>";
    return (element.innerHTML = output);
}
