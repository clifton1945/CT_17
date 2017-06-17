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

let aCsd = {opacity: '0.5', color: 'blue'};

let MUTATE_allElts = require('./CSpc/src/UPDATE_Elem').MUTATE_allElts;
let MUTATE_allElts_byCsd = R.curry(MUTATE_allElts(aCsd));
let ret = MUTATE_allElts_byCsd(document);

C_in_Both(`   color:${ret[1].style.color}, opacity:${ret[1].style.opacity}`);

C_in_Console(' OUT> ' + TRK);
