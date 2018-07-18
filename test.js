// Use tape
var test = require('tape');
//Link to both data.js and logic.js:
var logic = require('./logic.js');
var data = require('./data.js');

// test that tape is working:
test('Testing Tape is working', function(t) {
  t.equal(1, 1, 'One should equal one');
  t.end();
});

//Write the following tests
// 1. test if each XHR request is returning an object (logic.js)
// write code here...

// 2. test if individual functions are returning the expected data from APIs (data.js)
// write code here...

// 3. test if expected winner (once parameters are set) (data.js)
// write code here...

//...feel free to add other tests that make sense along the way
