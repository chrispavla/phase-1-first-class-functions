// let receivesAFunction = function(callback) {
//     callback()
// }

// let returnsANamedFunction = function() {
//     return returnsANamedFunction
// }

// let returnsAnAnonymousFunction = function() {
//     return function() {

//     }
// }

function receivesAFunction(cb) {
  cb();
}

function returnsANamedFunction() {
  return function namedF() {};
}

function returnsAnAnonymousFunction() {
  return function () {};
}
