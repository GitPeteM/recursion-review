// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

//I - Primitive Data, Array and Objects
//O - Stringified Version of Input
//C - none
//E - If input is a function or undefined value return undefined

//Strategy -
// Base case if we have primitive data we add it to a array variable
// If we don't have primitive data, then we will have either an array or an object, which we will
// need to iterate over to find the primitive data.
// Recursive step will occur durring iteration of an array or object, to find the next primitive element
// and at the string variable.
// on each recursive invocation concat/join data to array variable.

// pseudocode
// declare var stringifiedObj set to empty array
// based on primitive data (obj) we will stringify it & push obj into array.
// if obj is an array
  // iterate through the array
    // take current element and call stringifyJSON with current element.
    // take returned value and concat/push to stringifiedObj
// if obj is an object
  // iterate through the object
    // take current value and call stringifyJSON with value.
    // take returned value and concat to stringifedObj.
// take stringifiedObj and return the joined together array.


var stringifyJSON = function(obj) {
  return '' + obj;
  // var stringifiedObj = [];
  // if (typeof obj === 'number') {
  //   stringifiedObj.push(obj);
  // }
  // if (obj === null) {
  //   stringifiedObj.push('null');
  // }
  // if (obj === true) {
  //   stringifiedObj.push('true');
  // }
  // if (obj === false) {
  //   stringifiedObj.push('false');
  // }
  // console.log(stringifiedObj);
  // return stringifiedObj.join('');



};




