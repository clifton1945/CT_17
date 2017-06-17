/**
 *  main.js
 * NEXT: implement a EVOLVE_frmTrnsfrm FN with a partialed default CSD to always be acted upon by the Trnsfrm
 */
"use strict";

let C_in = require('./h/C_in_')
    , C_in_Console = C_in.Console
    , C_in_Doc = C_in.Doc
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

// let select_ChptVerses = require('./CSpc/src/SELECT_ChptVerses').SELECT_DivSpans;
// let UPDATE_Elem = require('./CSpc/src/UPDATE_Elem')._byStyleTrnfrm;
//
// // GET SOME DATA
// let verseNL = select_ChptVerses(document);
// let SelectedVerse = verseNL[1];
// let STUB_TRNSFRMR = {color: R.always('blue'), opacity: R.always('0.4')};
// // CODE UNDER TEST:  MODIFY a Verse USING a Style Transformer
// let UPDATE_Verse = UPDATE_Elem(STUB_TRNSFRMR);
// let newVerse = UPDATE_Verse(SelectedVerse);
//
// C_in_Both(`   elem.style.color: ${newVerse.style.color}`);

C_in_Console(' OUT> ' + TRK);
