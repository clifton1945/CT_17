"use strict";
let C = require('./h/C_in_');
let _inConsole = C._inConsole;

let R = require('ramda')
    // , curry = R.curry
    // , always = R.always
    // , map = R.map
    // , pipe = R.pipe
;
// ************** MAIN ********
let TRK = "wbSample/main.js";
_inConsole("< IN  " + TRK);

// get the CVList of Verses
/**
 *  _CVList:: Fn(DOC -> LIST)
 */
let _CVList = require('./CV/src/SELECT_ChptVerses')._CVList; //  Fn(DOC -> LIST)
// let CVList = _CVList(document);


// BUILD an new CSD
/**
 *  ..... EVOLVE_CSD:: ( OBJ_trnsfrms -> CSD_new )
 * @param OBJ_trnsfrms
 * @return CSD_new
 */
let EVOLVE_CSD = require('./STYLE/src/EVOLVE_Style').EVOLVE_CSD
; //  Fn( OBJ_trnsfrms -> CSD_new )

// now the CSD_OBJ_trnsfrms
/**
 *  ..... CSD_OBJ_trnsfrms
 * @type {{backgroundColor: *, opacity: *, fontSize: *}}
 */
let CSD_OBJ_trnsfrms = {
    backgroundColor: R.always('green')
    , opacity: R.always('0.50')
    , fontSize: R.always('70%')
}; // -> DICT.styleTransforms
/**
 * ..... UPDATE_ElemStyle:: OBJ.propertyCSD -> ( ELEM.elem -> ELEM.style.propertyCSD )
 * @param propertyCSD
 * @param elem
 * @return Fn:  ELEM.style.propertyCS
 */
let UPDATE_ElemStyle = require('./CV/src/main_UPDATE_anElement').UPDATE_ElemStyle
; //  OBJ.propertyCSD -> ( ELEM.elem -> ELEM.style.propertyCSD )

/**
 * ..... UPDATE_Elem::  ( ELEM.elem -> ELEM.elem w/ elem.style.propertyCSD )
 * @param elem
 * @return Elem w/new propertyObject
 */
let UPDATE_Elem = R.pipe(EVOLVE_CSD, UPDATE_ElemStyle)(CSD_OBJ_trnsfrms)
; // Fn( ELEM.elem -> ELEM.elem w/ elem.style.propertyCSD )


R.addIndex(R.map)(
    (el, ndx, lst) => {
        UPDATE_Elem(el)
    })
(_CVList(document))
;

let init_keyActions = require('./CV/src/main_keyActions').init_keyActions;
document.addEventListener("keydown", init_keyActions(8), false);


_inConsole(' OUT> ' + TRK);


