// General Logic
// 1. Dom.js requests API/XHR (Giphy, GitHub) which will be the output of data.js as an object
// 2. Logic.js will process the data.js object and return our filtered object containing stats, images...
// 3. Dom.js will use the processed object and fills the HTML
if (typeof module !== "undefined")  {
    var logic = require("./logic.js");
    var data = require("./data.js");
}

var form = document.querySelector("#form");

var gifDiv1 = document.querySelector("#avatar-output-1");
var gifDiv2 = document.querySelector("#avatar-output-2");

var statDiv1 = document.querySelector("#stats-output-1");
var statDiv2 = document.querySelector("#stats-output-2");

// Extract input variables from form variable and send them to data.js
form.addEventListener("submit", function(event) {
  event.preventDefault();
  // grab form inputs
  var usernameOne = event.target[0].value;
  var animalOne = event.target[1].value;
  var usernameTwo = event.target[2].value;
  var animalTwo = event.target[3].value;
  //   console.log(usernameOne, usernameTwo, animalOne, animalTwo);
  // make giphy requests
  var gifUrlOne = data.fetch(data.createGiphyURL, animalOne,logic.getGifSrc);
  var gifUrlTwo = data.fetch(data.createGiphyURL, animalTwo, logic.getGifSrc);
  // retrieve stats object
  var statsObjOne = data.fetch(data.createGithubURL, usernameOne, logic.getAllStats);
  var statsObjTwo = data.fetch(data.createGithubURL, usernameTwo, logic.getAllStats);
  // render gifs to page
  
  renderGif(gifUrlOne, gifDiv1);
  renderGif(gifUrlTwo, gifDiv2);
//   // render stats
  renderStats(statsObjOne, statDiv1);
  renderStats(statsObjTwo, statDiv2);
//   // find & render winner
//   var winner = findWinner(statsObjOne, statsObjTwo);
//   renderWinner(winner);
});

function renderGif(url, element) {
  var html = "<img src='" + url + "' alt='avatar gif'>";
  console.log(html);
  element.innerHTML = html;
}

// var testObj = {
//   name: "simon",
//   age: 24
// };

function renderStats(obj, element) {
  var output = "<ul>";
  // get array of key names
  var keys = Object.keys(obj);
  //   console.log(keys);
  for (let i = 0; i < keys.length; i++) {
    var list = "<li>";
    list += keys[i] + ": <span>";
    list += obj[keys[i]] + "</span></li>";
    output += list;
  }
  output += "</ul>";
  //   console.log(output);
  element.innerHTML = output;
}

var testWinner = {
  winner: 1,
  stat: "longest-repo"
};

function renderWinner(obj) {
  if (obj.winner == 1) {
    declare(usernameOne);
  }
}

// The winner is... $username!
// with a $stat of $stat.value
// gif

/*  
    <ul>
        <li>Total Stars: <span>25</span></li>
    </ul> 
*/

// add winner area to html

// logic function to find winner:
//    select random stat
//    compare objects and determine winner
//    output winner object { winner: 1 , stat: longest }

// dom function to parse and display winner object
