"use strict";
let C = require('./h/C_in_')
    , _inConsole = C._inConsole
;
let R = require('ramda')
    , evolve = R.evolve
;
let mocha = require('mocha');
let chai = require('chai');
let should = require('chai').should();
// ************** MAIN ********
let TRK = "wbSample/main.js";


_inConsole("< IN  " + TRK);

// ...................... get the CVList of Chapter Verses
/**
 *  _chptVersesNL:: Fn(DOC -> LIST)
 */
let _chptVersesNL = require('./CSpc/src/SELECT_ChptVerses')._spansNL
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
 * @verseNLurn CSD_new
 * USAGE: a Default CSD is already partialled into EVOLVE. The Arg transforms verseNLurns CSD_new.
 * e.g. Fn:(CSD_Trnsfrms = {
    , opacity: R.always('0.50')
    , fontSize: R.always('70%')
    },
 */
// let EVOLVE_CSD = require('./SSpc/src/EVOLVE_CSD').EVOLVE_CSD
// ; //  Fn( OBJ_trnsfrms -> CSD_new ) IS EVOLVE() w/ already partialed DfltCSD
// /**
//  *  ..... CSD_Trnsfrms
//  * @type {{backgroundColor: *, opacity: *, fontSize: *}}
//  */
// let CSD_Trnsfrms;
// CSD_Trnsfrms = {
//     backgroundColor: R.always('lavender')
//     , opacity: R.always('0.50')
//     , fontSize: R.always('70%')
// }; // -> DICT.styleTransforms
// ..................... UPDATE Elements
/**
 * ..... UPDATE_ElemStyle:: OBJ.propertyCSD -> ( ELEM.elem -> ELEM.style.propertyCSD )
 * @param propertyCSD
 * @param elem
 * @verseNLurn Fn:  ELEM.style.propertyCS
 */
// let UPDATE_ElemStyle = require('./CSpc/src/main_updateElementStyle').updateStyle
// ; //  OBJ.CSD_Trnsfrms -> ( ELEM.elem -> ELEM.style.propertyCSD )
// /**
//  * ..... UPDATE_anElem::  ( ELEM.elem -> ELEM.elem w/ elem.style.propertyCSD )
//  * @param elem
//  * @verseNLurn Elem w/new propertyObject
//  */
// let UPDATE_anElem = R.pipe(EVOLVE_CSD, UPDATE_ElemStyle)(CSD_Trnsfrms)
// ; // Fn( ELEM.elem -> ELEM.style.propertyCSD )
//
//
// let init_keyActions = require('./CSpc/src/SELECT_ChptVerses').init_keyActions;
//
// // let x = document.addEventListener("keydown", init_keyActions(()=>{}), false);//BREAKS

// CODE UNDER TEST
// invokeSelectorAll does get a NL
let invokeSelectorAll = R.invoker(1, 'querySelectorAll');
let verseNL = invokeSelectorAll('.chptr span')(document);
// mocha.describe(`:: `, () => {
//     it(`should.BREAK.`, () => {
//         (1).should.equal(0);
//     });
// });
// do same using evolve and trnsfrm ??

_inConsole(`sizeCspc: ${R.length(verseNL)}`);

_inConsole(' OUT> ' + TRK);
