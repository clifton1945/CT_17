/**
 *  main.js
 * NEXT: implement a EVOLVE_frmTrnsfrm FN with a partialed default CSD to always be acted upon by the Trnsfrm
 */
"use strict";

let C_in = require('./h/C_in_')
    , C_in_Console = C_in.Console
    , C_in_Both = C_in.Both
;
let R = require('ramda')
    // , pipe = R.pipe
    // , evolve = R.evolve
;
// let mocha = require('mocha');
// let chai = require('chai');
// let should = require('chai').should();

// ************** MAIN ********
let TRK = "wbSample/main.js";
C_in_Console('  IN> ' + TRK);


// GET SOME DATA
let select_ChptVerses = require('./CSpc/src/SELECT_ChptVerses').SELECT_DivSpans;
let verseNL = select_ChptVerses(document);

// CODE UNDER TEST:CUT   MODIFY a Verse USING a STUB Style Transformer DCT
let STUB_TRNSFRMR = {color: R.always('green'), opacity: R.always('0.75')};

let CUT = require('./CSpc/src/UPDATE_Elem')._byStyleTrnfrm;
let RET = CUT(STUB_TRNSFRMR);
let retElem = RET(verseNL[3]);

C_in_Both(`elem.style.color: ${retElem.style.color}`);

C_in_Console(' OUT> ' + TRK);
