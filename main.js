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

let UPDATE_anElement = curry(
    /**
     *
     * @param elem
     * @param propertyObject
     */
    (elem, propertyObject) => {
        for (let property in propertyObject)
            elem.style[property] = propertyObject[property];
    });

UPDATE_anElement(CVList[1], {'fontSize': '12px', 'backgroundColor': 'pink'});

_inConsole(' OUT> ' + TRK);


