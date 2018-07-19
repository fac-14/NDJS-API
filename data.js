if (typeof module !== "undefined")  {
    var logic = require("./logic.js");
}

/*
Compiles urls based on user input from dom.js

XHR 1
    * get single random gif from giphy, return url.gif

XHR 2
    * get data from github.com/username/repos
    * return parsed object
    * gets stats using functions from logic.js...
    * 
*/

// Variables for github name and search created in dom.js. Then will be passed in as arguments to the respective functions in this script
var giphyURL = "";
var githubURL = "";

// API keys
var giphy_api_key = "7cWhgewjrS2GSML9Sj3iCQZd24zYFLSh"; // Nathalie's API key! "Don't abuse it" (or try to! Nathalie DARES YOU)
var github_api_key = "4a06f2f722630ee8f37cafaa2caec3ec98fc6b91"; // "old" one getting 401: "7030c53467665997aca886181fcf200c3e9f80a0"; // Dom's API key!

var data = 
{
// Functions to make the above URLs
createGiphyURL: function  (searchTerm){
    var searchTermSanitised = searchTerm.replace(/[^A-Za-z0-9 ]/g,"").replace(" ","+").trim(); //WOOO
    giphyURL = "https://api.giphy.com/v1/gifs/random?tag=" + searchTermSanitised + "&api_key=" + giphy_api_key;
    console.log("gif url make function")
    return giphyURL;
},

createGithubURL: function (username){
    githubURL = "https://api.github.com/users/" + username + "/repos?access_token=" + github_api_key;
    console.log("git url make function")
    return githubURL;
},

// Reusable API request function
fetch: function (urlFunc, userInput, callback) {
    var xhr = new XMLHttpRequest();
  
    xhr.addEventListener('load', function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        var response = JSON.parse(xhr.responseText);
        console.log("data retrieved")
        console.log("type of callback:",typeof callback);
        console.log("callback:",callback);
        return console.log(callback(response));
      }
    });
  
    xhr.open('GET', urlFunc(userInput));
    xhr.send();
  },

}


//   function testCallBack(response){
//     console.log(response);
// }

if (typeof module !== "undefined")  {
    module.exports = data;
  }

// Example calling of functions (comment it out!):
    //   fetch(createGithubURL, "virtualDOMinic", testCallBack);
    // fetch(createGiphyURL, "cats", testCallBack);

