// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

//I - html doc, data tree
//O - return array with list of elements that contain the class name
//C - none
//E - none

//Strategy
  //result variable starting as an empty array

  //inner function that searches elements with parameter nodes
  // create var for childNodes list.
    //base case
    //checking if the desired class is within the element (using class list)
    // if so push into the results variable
    //recursion case
    //
          //create variable allChildren
          // inner function(node)

          // var allChildren = node.childNodes



console.log(document.body);
var getElementsByClassName = function(className) {
  var result = [];

  var innerFunction = function (nodes) {
    var allChildren = nodes.childNodes;

    //base case
    if (_.contains()) {

    }
  }

  var allChildren =
};


