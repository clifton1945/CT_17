/**
 *  Peace is Progress towards a known Destination.
 *  170801 -  the destination is
 *      (1) I will make a SRVa_ListOfReadClassLists
 *          because I begin with a NodeList OR Collection of Chapter spans.
 *      (2) I will then need a way to SRVa_
 *
 *
 */
"use strict";

let C_in = require('./h/C_in_')
    // , C_in_Doc = C_in.Doc
    , C_in_Console = C_in.Console
    , C_in_Both = C_in.Both
;
let myTap = require('./h/myTap')
;
let R = require('ramda')
    , curry = R.curry
    , concat = R.concat
    , pipe = R.pipe
    // , evolve = R.evolve
;

//  -------------- a test

let TRK = "wbSample/aTest.js";
C_in_Console('  IN> ' + TRK);

// get 8 actual spanVerses List
let SRV_ChptVerses_Dflt = require('./CSpc/src/SRVa_ChptVerseList').SRV_ChptVerses_Dflt;
// first some verseSpans in a list.
let spans = R.take(18)(SRV_ChptVerses_Dflt(document));

let STUB_noonNdx = 17; // NOTE:  N MUST BE >= 0 and < spans.length


// split into the three ReadClass lists
let splits = R.splitAt(STUB_noonNdx, spans);
let amLst = splits[0];
let noonLst = [spans[STUB_noonNdx]];
let pmLst = R.pipe(R.drop(1))(splits[1]);

/**
 * Now use the lists to set ReadClass Attributes
 * for instance some weighted Attribute for a given read class
 */
let mapIndexed = R.addIndex(R.map);
let SRVa_WtFn__GVNa_Cnst = require('./RSpc/src/SRVa_WtFn').SRV_WtFn__GVNa_Cnst;
let SRVa_WtFn = [];
// let Fn = (E) => R.take(5, E.innerText);
// ------- CODE UNDER TEST ------------------
//am

// SRVa_WtFn = pipe(SRVa_WtFn__GVNa_Cnst(0.55));// FIX 170731
// SRVa_WtFn = SRVa_WtFn__GVNa_Cnst(0.9);// FIX 170731
// amLst = mapIndexed(SRVa_WtFn )( amLst);

// weight am elements opacity
let SRVa_weight = require('./RSpc/src/SRVa_WtFn').weightedElem;

let SRVa_weightedElem_Opacity = {};
//am
SRVa_weightedElem_Opacity = SRVa_weight(0.9);
amLst = mapIndexed(SRVa_weightedElem_Opacity)(amLst);

//noon
SRVa_weightedElem_Opacity = SRVa_weight(0.15);
noonLst = mapIndexed(SRVa_weightedElem_Opacity)(noonLst);
//pm
SRVa_weightedElem_Opacity = SRVa_weight(0.9);
pmLst = mapIndexed(SRVa_weightedElem_Opacity)(R.reverse(pmLst));

//pmWts;
// Re combine the three lists
// let _newVals = R.pipe(R.concat, R.concat);
// let NewVals = _newVals(amLst, noonLst)(R.reverse(pmLst));
// C_in_Console(JSON.stringify(NewVals));
let noop = 0;


C_in_Console(' OUT> ' + TRK);


