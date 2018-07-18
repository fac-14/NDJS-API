/*
event listener for submit button
retrieves user input - stores.
then hides/disables input fields
calls XHR requests through data.js
renders returned gif to page
reders returned stats to page
*/

// General Logic
// 1. Dom.js requests API/XHR (Giphy, GitHub) which will be the output of data.js as an object
// 2. Logic.js will process the data.js object and return our filtered object containing stats, images...
// 3. Dom.js will use the processed object and fills the HTML

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
  // console.log(usernameOne, usernameTwo, animalOne, animalTwo);
  // make giphy requests
  var gifUrlOne = getGif(animalOne);
  var gifUrlTwo = getGif(animalTwo);
  // retrieve stats object
  var statsObjOne = getStatsAll(getGithub(usernameOne)); // logic.js, data.js
  var statsObjTwo = getStatsAll(getGithub(usernameTwo)); // logic.js, data.js
  // render gifs to page
  renderGif(gifUrlOne, gifDiv1);
  renderGif(gifUrlTwo, gifDiv2);
  // render stats
  renderStats(statsObjOne, statDiv1);
  renderStats(statsObjTwo, statDiv2);
});

function renderGif(url, element) {
  // set img source to url
}

function renderStats(obj, element) {
  // create html with object, render to element
}
