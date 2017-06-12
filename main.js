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

let invokeSelectorAll = R.invoker(1, 'querySelectorAll');
let verseNL;
verseNL = invokeSelectorAll('.chptr span')(document);
//verseNL = require('./CSpc/src/SELECT_ChptVerses')._spansNL(document);
// ...................... get the CVList of Chapter Verses

// CODE UNDER TEST
let STUB_CSD = {"opacity": "0.5", "color": "blue"};

let UPDATE_anElem = require('./CSpc/src/UPDATE_Elem').UPDATE_;

let CUT = pipe(UPDATE_anElem)(STUB_CSD);
let retElem = CUT(verseNL[2]);
C_in_Both(`elem.style.color: ${retElem.style.color}`);

C_in_Console(' OUT> ' + TRK);
