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
C_in_Both("< IN  " + TRK);

// ...................... get the CVList of Chapter Verses
// let _chptVersesNL = require('./CSpc/src/SELECT_ChptVerses')._spansNL;

let invokeSelectorAll = R.invoker(1, 'querySelectorAll');
let verseNL = invokeSelectorAll('.chptr span')(document);
// CODE UNDER TEST
let STUB_CSD = {"opacity": "0.5", "color": "blue"};
let UPDATE_anElem = require('./CSpc/src/UPDATE_Elem').anElem;
let CUT = pipe(UPDATE_anElem)(STUB_CSD);
let retElem = CUT(verseNL[2]);
C_in_Both(`elem.style.color: ${retElem.style.color}`);

C_in_Console(' OUT> ' + TRK);
