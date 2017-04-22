"use strict";

//************** MAIN *************************
let TRK = "wbSample/main.js";
console.log("< IN >" + TRK);

let keyActions = require('./CV/src/main_keyActions');
document.addEventListener("keydown", keyActions, false);

keyActions(100);

console.log(' OUT> ' + TRK);