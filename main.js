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


// BUILD an new CSD

/**
 *  ..... EVOLVE:: OBJ -> OBJ -> OBJ
 * @param dflt
 * @param transformsObj
 * @return CSD.new
 */
let EVOLVE = require('./STYLE/src/EVOLVE_Style').EVOLVE;
let DfltCSD = require('./STYLE/Dflt_Style').DfltCSD;
let EVOLVE_CSD = EVOLVE(DfltCSD);
// now the transformsObj
let transformsObj = {
    backgroundColor: R.always('pink')
    , opacity: R.always('0.75')
    , fontSize: R.always('70%')
};


let UPDATE_ElemStyle = require('./CV/src/main_UPDATE_anElement').UPDATE_ElemStyle;
/**
 * ..... UPDATE_ElemStyle: ( propertyObject, elem) -> OBJ.new
 * @param propertyObject
 * @param elem
 * @return new propertyObject
 */
let UPDATE_Elem = R.pipe(EVOLVE_CSD, UPDATE_ElemStyle)(transformsObj);

R.addIndex(R.map)(
    (el, ndx, lst) => {
        UPDATE_Elem(el)
    })
(CVList)
;

_inConsole(' OUT> ' + TRK);


