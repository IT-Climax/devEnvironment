// This file is not transpiled, so must use CommonJs and ES5

//Register babel to transpile before out test run.

require('babel-register')();

//Disable webpack features that Mocha doesn't understand.

require.extensions['.CSS'] = function(){};

