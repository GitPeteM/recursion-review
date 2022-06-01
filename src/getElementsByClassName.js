// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

//I - html doc, data tree
//O - return array with list of elements that contain the class name
//C - none
//E - none

//pseudodoce
  //result variable starting as an empty array

  //inner function that searches elements with parameter nodes
  // create var for childNodes list.
    //base case
    //checking if the desired class is within the element (using class list)
    // if so push into the results variable
    //recursion case
    // iterater over the childNodes list for current node(s).
      //take current child and recursively call innerFunction with the child.

  //call the innerFunction with the document.body
  // return the result.



console.log(document.body);
var getElementsByClassName = function(className) {
  var result = [];

  var innerFunction = function (nodes) {
    var allChildren = nodes.childNodes;
    // console.log('currentNode:' + nodes);
    // console.log('className' + className);

    //base case
    if (_.contains(nodes.classList, className)) {
      result.push(nodes);
    }
    //recursive case
    _.each(allChildren, function(child) {
      // result = result.concat(innerFunction(child));
      innerFunction(child);
    });
  };
  innerFunction(document.body);
  console.log(result);
  return result;
};


