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
var fightButton = document.querySelector("#winnerBtn");

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

// find & render winner
// var winner = findWinner(statsObjOne, statsObjTwo);
// renderWinner(winner);

function renderGif(url, element) {
  var html = "<img src='" + url + "' alt='avatar gif'>";
  console.log(html);
  element.innerHTML = html;
}

function renderStats(obj, element) {
  var output = "<h2>";
  output += obj.name + "</h2><ul>";
  // console.log(obj);
  // get array of key names
  var keys = Object.keys(obj);
  console.log(obj);
  for (let i = 0; i < keys.length - 1; i++) {
    var list = "<li id=";
    list += keys[i].replace(/\s/g, "_") + ">";
    list += keys[i] + ": <span>";
    list += obj[keys[i]] + "</span></li>";
    output += list;
  }
  output += "</ul>";
  //   console.log(output);
  element.innerHTML = output;
}

// var testWinner = {
//   name: "dupreesi",
//   category: "longest-repo"
// };
console.log(fightButton);

var obj1 = {
  longestRepo: 35,
  oldestRepo: 189,
  "Total open issues": 2,
  languages: 3,
  employabilityFactor: 9,
  name: "virtualDOMinic"
};

var obj2 = {
  longestRepo: 40,
  oldestRepo: 100,
  "Total open issues": 4,
  languages: 5,
  employabilityFactor: 5,
  name: "dupreesi"
};

fightButton.addEventListener("click", function(e) {
  renderWinner(logic.compare(statsObjOne, statsObjTwo), winnerDiv);
});

function renderWinner(obj, element) {
  console.log(obj);
  console.log(obj.winner);
  console.log(obj.category);
  var output = "<h2>The Winner is ";
  output += obj.winner + "</h2>";
  return (element.innerHTML = output);
}

// The winner is... $username!
// with a $stat of $stat.value
// gif

/*  
    <ul>
        <li>Total Stars: <span>25</span></li>
    </ul> 
*/
