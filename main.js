"use strict";
let h = require('./h/C_in_');
let C_inConsole = h.C_inConsole;
//************** MAIN ********
let TRK = "wbSample/main.js";
C_inConsole("< IN >" + TRK);

let cut = require('./CV/src/main_keyActions');
document.addEventListener("keydown", cut.keyActions, false);
// h.C_inBoth((cut.x(13))); // this is a test stub if keyActions DO NOT WORK
C_inConsole(' OUT> ' + TRK);