// This file is a group of functions that will generate individual stats for a github user.
// All should return a stat value e.g. numberOfRepos(obj) // > 25
// The final function will aggregate & call all the other functions and return an OBJECT with key value pairs for each stat:

var logic = {
  longestRepoName: function (example) { 
    var biggest = 0;
    for (var i = 0; i < example.length; i++) {
      if ( example[i].name.length > biggest ) {
        biggest = example[i].name.length;
      }
    }
    return biggest;
  },

  oldestRepo: function(example) {
    var oldest = 0;
    var today_ms = new Date();

    for (var i = 0; i < example.length; i++) {
      var repoDate_ms = new Date(example[i].created_at);
      var repoAge_days = Math.ceil((today_ms-repoDate_ms)/86400000);
      if ( repoAge_days > oldest ) {
        oldest = repoAge_days;
      }
    }
    return oldest;
  },

  openIssues: function(example) {
    var total = 0;
    example.forEach(function(obj){
      total += obj.open_issues_count;
    });
    return total;
  },

  totalLanguages: function(example) {
    var languages = [];
    
    example.forEach(function(obj){
      if (obj.language !== null && languages.indexOf(obj.language) === -1 ) {
        languages.push(obj.language);
      }
    })
    return languages.length;
  },

  emplFactor: function(example) {
    var name = example[0].owner.login;
    if (name == "developess" || name == "njons" || name == "virtualDOMinic" || name == "dupreesi") {
      return Math.max(Math.floor(Math.random()*100000),11341)
    } else {
      return Math.floor(Math.random()*10000)
    }
  },

  getName: function(example) {
    return example[0].owner.login;
  },

  getAllStats: function (data,callback,dest) {
    var output = {};
    output["Longest repo name"] = logic.longestRepoName(data);
    output["Oldest repo (days)"] = logic.oldestRepo(data);
    output["Total open issues"] = logic.openIssues(data);
    output["Total languages"] = logic.totalLanguages(data);
    output["Employability Factor"] = logic.emplFactor(data);
    output["name"] = logic.getName(data);
    callback(output,dest);
  },

  getGifSrc: function (data,callback,dest) {
    console.log(data.data.image_url);
    callback(data.data.image_url,dest);
  },

  compare: function (object1, object2) {
    var randIndex = Math.floor(Math.random() * 5);
    var winnerObj = {
      winner: "",
      category: "",
    };
    var objKeysArr = Object.keys(object1);
    var keyName = objKeysArr[randIndex];

    // get the values of the key from each obj
    var object1Val = object1[keyName];
    var object2Val = object2[keyName];

    winnerObj.category = keyName;

    // find the winner
    if (keyName == "Total open issues"){
      if (object1Val < object2Val){
        winnerObj.winner = object1.name
      }
      else if (object1Val > object2Val){
        winnerObj.winner = object2.name
      }
      else {
        winnerObj.winner = "nobody"
      }
    } else {
      if (object1Val > object2Val){
        winnerObj.winner = object1.name
      }
      else if (object1Val < object2Val){
        winnerObj.winner = object2.name
      }
      else {
        winnerObj.winner = "nobody"
      }
    }

    // return the populated winner object!
    return winnerObj;
  },

}

// console.log(logic.getGifSrc(sampleGiphy));
// console.log(logic.getAllStats(example));

if (typeof module !== "undefined")  {
  module.exports = logic;
}
