# NDJS-API - Week 3 Project

API project from Nathalie, Dom, Simon & Jessie!

[Github pages site here!](https://fac-14.github.io/NDJS-API/)

To run our project locally:
```
git clone https://github.com/fac-14/NDJS-API.git
```
In order to run tests:

```
npm install
```
Then:

```
npm test
```

## hAPIness is a Gif and Top Trumps combo

![](https://media.giphy.com/media/3otPoUjeyRisIDxPhK/giphy.gif)

This week we used 2 APIs to give a 2000s throwback card game a 2018 giphy twist. Credit to Dom for this ingenious project idea.

### We used:
* Giphy API
* GitHub API
* Plus our own **proprietary algorithm** to calculate that evasive _"Employability factor"..._


### File structure

![](https://i.imgur.com/pUiKNqN.png)


We opted for an ambitiously-modular stucture which is summarised here. If you think this makes no sense, you are right.

dom.js is where all the action takes place. The other files are storage containers for functions to keep dom.js nice and tidy. In theory.

**data.js**
The functions in data.js...
*    compile the urls for the XHRs from user input
    *   run the XHRs

**logic.js**
The functions in logic.js...
* find the longest repo name for a user's data
* find the oldest repo in days for a user
* calculate total open issues for a user
* count total unique languages for a user
* calculate a user's "employability factor"
* aggregate the above functions into an object
* compare 2 objects to find a winner from a randomly selected category


**dom.js**


Dom.js...
* Adds event listener to the submit button.
* When triggered, the event listener:
    * Retrieves and stores user input from the DOM.
    * Calls 'fetch' - the XHR function defined in data.js, with filtering callbacks defined in logic.js and rendering callbacks from dom.js... 
* As mentionned above, dom.js also contains the rendering functions for all content: gifs, github stats and the winner.
    * the stats rendering function contains an if statement that will add an event listener to the fight button once the xhr has completed, and detemine a winner when fight is clicked.


Got all that? If you do, bravo.


## Key Learnings

* Adding functionality that is dependent on a completed XHR
* Constructing modular file structures!
* Calling callbacks through multiple layers of files


That's all for this week! 

![](https://media.giphy.com/media/Ov5NiLVXT8JEc/giphy.gif)
