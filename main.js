"use strict";
let C = require('./h/C_in_');
let _inConsole = C._inConsole;
// ************** MAIN ********
let TRK = "wbSample/main.js";
_inConsole("< IN  " + TRK);

let init_keyActions = require('./CV/src/main_keyActions').init_keyActions;
document.addEventListener("keydown", init_keyActions(8), false);

_inConsole(' OUT> ' + TRK);