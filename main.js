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

// CODE UNDER TEST
let STUB_TRNSFRMR = {color: R.always('blue'), opacity: R.always('0.5')};
let CUT = require('./CSpc/src/UPDATE_Elem')._byStyleTrnfrm(STUB_TRNSFRMR);
let retElem = CUT(verseNL[1]);

C_in_Both(`elem.style.color: ${retElem.style.color}`);

C_in_Console(' OUT> ' + TRK);
