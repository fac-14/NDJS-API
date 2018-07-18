
// This file is a group of functions that will generate individual stats for a github user.
// All should return a stat value e.g. numberOfRepos(obj) // > 25
// The final function will aggregate & call all the other functions and return an OBJECT with key value pairs for each stat:

// e.g
// userStats = {
//   longestRepo: 25,
//   numberOfStars: 6
// }

// e.g
// function longestRepoName(obj) {
//    loop through repos, look for longest name
//    return "Longest repo: " + length + " letters";
// }


// function getAllStats(data) {
//   var output = {};
//   output.logestRepo = longestRepoName(data);
//   ...
//   return output;
// }

if (typeof module !== "undefined")  {
  module.exports = getAllStats;
}
