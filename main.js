"use strict";
let C = require('./h/C_in_');
let _inConsole = C._inConsole;

let R = require('ramda')
    // , curry = R.curry
    // , always = R.always
    // , map = R.map
    , pipe = R.pipe
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
// get the transformsObj
let transformsObj = {
    backgroundColor: R.always('aqua ')
    , opacity: R.always('0.5')
};
/**
 *  ..... EVOLVE:: OBJ -> OBJ -> OBJ
 * @param dflt
 * @param transformsObj
 * @return CSD.new
 */
let EVOLVE = require('./STYLE/src/EVOLVE_Style').EVOLVE;
let EVOLVE_CSD = R.curry(EVOLVE(DfltCSD));
// let NewCSD = pipe(EVOLVE_CSD)(transformsObj);
/**
 * ..... UPDATE_Elem: ( propertyObject, elem) -> OBJ.new
 * @param propertyObject
 * @param elem
 * @return new propertyObject
 */
let UPDATE_Elem = require('./CV/src/main_UPDATE_anElement').UPDATE_Elem;

let STYLE_Elem = UPDATE_Elem(EVOLVE_CSD(transformsObj));


R.addIndex(R.map)(
    (el, ndx, lst) => {
        STYLE_Elem(el)
    })
(CVList)
;

_inConsole(' OUT> ' + TRK);


