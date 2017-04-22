"use strict";
let h = require('./h/C_in_');
let C_inConsole = h.C_inConsole;
//************** MAIN ********
let TRK = "wbSample/main.js";
C_inConsole("< IN >" + TRK);

let cut = require('./CV/src/main_keyActions');
// document.addEventListener("keydown", keyActions, false);
h.C_inBoth((cut.x(13)))
;
C_inConsole(' OUT> ' + TRK);