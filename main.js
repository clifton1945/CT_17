"use strict";
let C = require('./h/C_in_');
let _inConsole = C._inConsole;

let R = require('ramda')
    , curry = R.curry
    , map = R.map
    // , pipe = R.pipe
    // , compose = R.compose
;
// ************** MAIN ********
let TRK = "wbSample/main.js";
_inConsole("< IN  " + TRK);

let init_keyActions = require('./CV/src/main_keyActions').init_keyActions;
document.addEventListener("keydown", init_keyActions(8), false);

// get the CVList of Verses
let _CVList = require('./CV/src/SELECT_ChptVerses')._CVList;
let CVList = _CVList(document);
// now get the Dflt_Style to EVOLVE
let dfltCSD = require('./STYLE/Dflt_Style');
// get the EVOLVER
let EVOLVE_Style = require('./STYLE/src/EVOLVE_Style');

// let style_backgroundColor = curry(
//     el => el.style.backgroundColor = 'green'
// );
let ret = map(EVOLVE_Style(), CVList);

_inConsole(' OUT> ' + TRK);


