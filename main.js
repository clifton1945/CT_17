"use strict";
let C = require('./h/C_in_')
    , _inConsole = C._inConsole
;
let R = require('ramda')
    // , curry = R.curry
    // , always = R.always
    // , map = R.map
    // , pipe = R.pipe
;
// ************** MAIN ********
let TRK = "wbSample/main.js";
_inConsole("< IN  " + TRK);

// ...................... get the CVList of Chapter Verses
/**
 *  _CVList:: Fn(DOC -> LIST)
 */
let _CVList = require('./CV/src/SELECT_ChptVerses')._CVList
; //  Fn(DOC -> LIST)

// ..................... BUILD a new Verse Property CSD
// DfltCSD ->  {backgroundColor: '', opacity: '1.0', fontSize: '100%'};

/**
 *  ..................... now the Heart of the App: Each Verse.style.Attribute  IS BE EVOLVED
 *  BY a function that depends on its (1) RSpace and its relative position in that RSpace.
 */
/**
 *  ..... EVOLVE_CSD:: ( OBJ_trnsfrms -> CSD_new )
 * @param OBJ_trnsfrms
 * @return CSD_new
 * USAGE: a Default CSD is already partialled into EVOLVE. The Arg transforms returns CSD_new.
 * e.g. Fn:(CSD_Trnsfrms = {
    , opacity: R.always('0.50')
    , fontSize: R.always('70%')
    },
 */
let EVOLVE_CSD = require('./STYLE/src/EVOLVE_Style').EVOLVE_CSD
; //  Fn( OBJ_trnsfrms -> CSD_new ) IS EVOLVE() w/ already partialed DfltCSD

/**
 *  ..... CSD_Trnsfrms
 * @type {{backgroundColor: *, opacity: *, fontSize: *}}
 */
let CSD_Trnsfrms = {
    backgroundColor: R.always('lavender')
    , opacity: R.always('0.50')
    , fontSize: R.always('70%')
    }
; // -> DICT.styleTransforms

// ..................... UPDATE Elements
/**
 * ..... UPDATE_ElemStyle:: OBJ.propertyCSD -> ( ELEM.elem -> ELEM.style.propertyCSD )
 * @param propertyCSD
 * @param elem
 * @return Fn:  ELEM.style.propertyCS
 */
let UPDATE_ElemStyle = require('./CV/src/main_updateElementStyle').updateStyle
; //  OBJ.CSD_Trnsfrms -> ( ELEM.elem -> ELEM.style.propertyCSD )
/**
 * ..... UPDATE_anElem::  ( ELEM.elem -> ELEM.elem w/ elem.style.propertyCSD )
 * @param elem
 * @return Elem w/new propertyObject
 */
let UPDATE_anElem = R.pipe(EVOLVE_CSD, UPDATE_ElemStyle)(CSD_Trnsfrms)
; // Fn( ELEM.elem -> ELEM.style.propertyCSD )

const UPDATE_allElems =
    R.addIndex(R.map)(
        el => {
            UPDATE_anElem(el)
        })
    (_CVList(document))
;// Functor f => (a -> b ) -> f a -> f b


let init_keyActions = require('./CV/src/main_keyActions').init_keyActions;

let f = n => _inConsole(' >>>> ' + n);

let x = document.addEventListener("keydown", init_keyActions(f), false);


_inConsole(' n is now: ' + x);
_inConsole(' OUT> ' + TRK);
