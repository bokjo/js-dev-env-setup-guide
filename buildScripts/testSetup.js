/**
 * Created by bstojchevski on 5/16/2017.
 */
//This file isn't transpiled, so must use Common JS and  ES6

//Register babel to transpile before out tests run

require("babel-register")();

//Disable webpack features that Mocha doesn't understand.
require.extensions[".css"] = function () {}
