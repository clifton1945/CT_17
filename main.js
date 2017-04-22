"use strict";
let h = require('./h/C_in_');
let C_inConsole = h.C_inConsole;
let C_inDoc = h.C_inDoc;
//************** MAIN *************************
let TRK = "wbSample/main.js";
C_inConsole("< IN >" + TRK);


let cut = require('./CV/src/main_keyActions');
// document.addEventListener("keydown", keyActions, false);

cut.x(10.0);

C_inConsole(' OUT> ' + TRK);