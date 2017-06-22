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
    , curry = R.curry
    // , pipe = R.pipe
    // , evolve = R.evolve
;
// let mocha = require('mocha');
// let chai = require('chai');
// let should = require('chai').should();

// ************** MAIN ********
let TRK = "wbSample/main.js";
C_in_Console('  IN> ' + TRK);

let MUTATE_Elem = require('./CSpc/src/MUTATE_Elem').anElem;
let MUT_Elt_gvnCsd = curry(doc => MUTATE_Elem(R.__, doc));

let aCsd = {opacity: '0.5', color: 'blue'};
let ret = MUT_Elt_gvnCsd(document)(aCsd);

C_in_Both(`   color:${ret.style.color}, opacity:${ret.style.opacity}`);

C_in_Console(' OUT> ' + TRK);
