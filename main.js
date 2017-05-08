"use strict";
let C = require('./h/C_in_');
let _inConsole = C._inConsole;

let R = require('ramda')
    , curry = R.curry
    // , always = R.always
    // , map = R.map
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
let DfltCSD = require('./STYLE/Dflt_Style').DfltCSD;
let transformations = {
    backgroundColor: R.always('yellow')
    , opacity: R.always('0.5')
};
/**
 *  ..... EVOLVE:: OBJ -> OBJ -> OBJ
 * @param transformations
 * @param dflt
 */
let EVOLVE = require('./STYLE/src/EVOLVE_Style').EVOLVE;
let NewCSD = EVOLVE(transformations, DfltCSD);

let UPDATE = require('./CV/src/main_UPDATE_anElement').UPDATE;

UPDATE(CVList[2], NewCSD);

_inConsole(' OUT> ' + TRK);


