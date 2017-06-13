/**
 *  main.js
 * TODO  I am ready to implement a pipe of(EVOLVE_Csd, UPDATE_Elem) (TRNSFRM_Attr) -> new Elem.style.
 * NEXT: implement a EVOLVE_frmTrnsfrm FN with a partialed default CSD to always be acted upon by the Trnsfrm
 */
"use strict";

let C_in = require('./h/C_in_')
    , C_in_Console = C_in.Console
    , C_in_Both = C_in.Both
;
let R = require('ramda')
    , pipe = R.pipe
    // , evolve = R.evolve
;
// let mocha = require('mocha');
// let chai = require('chai');
// let should = require('chai').should();

// ************** MAIN ********
let TRK = "wbSample/main.js";
C_in_Console('  IN> ' + TRK);

let verseNL;
let CV_Selector_Dflt = require('./CSpc/src/Dflt_CV_Selector');
let invokeSelectorAll = R.invoker(1, 'querySelectorAll');
verseNL = invokeSelectorAll(CV_Selector_Dflt)(document);

let select_ChptVerses = require('./CSpc/src/SELECT_ChptVerses').SELECT_DivSpans;
verseNL = select_ChptVerses(document);
// ...................... get the CVList of Chapter Verses

// CODE UNDER TEST
let STUB_CSD = {"opacity": "0.5", "color": "pink"};
let Dflt_CSD = require('./SSpc/Dflt_CSD');
let STUB_TRNSFRMR = {backgroundColor: R.always('yellow'), opacity: R.always('0.5')};
let EVOLVE_aStyle = require('./SSpc/src/EVOLVE_Style').EVOLVE_Style(Dflt_CSD);
let UPDATE_aVerse = require('./CSpc/src/UPDATE_Elem').UPDATE_;

let CUT = pipe(EVOLVE_aStyle, UPDATE_aVerse)(STUB_TRNSFRMR);
let retElem = CUT(verseNL[1]);

C_in_Both(`elem.style.color: ${retElem.style.color}`);

C_in_Console(' OUT> ' + TRK);
