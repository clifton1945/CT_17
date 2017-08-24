/**
 * 170823
 * Somehow this works - can select a focus Verse and mutate all the verse style attributes.
 * the problem has to do w/ the CLICK_VerseToRead
 *  which has within it the call to update(e.target)
 *  passing the span into update.
 *
 *  ??? (1) put CLICK_Verse.... INSIDE update
 *      thus not needing to pass it to update???
 */
"use strict";

// ------- requires ------------
let R = require('ramda');
let C_in = require('./h/C_in_')
    , C_in_Console = C_in.Console
    , C_in_Both = C_in.Both;


let TRK = "wbSample/aTest.js";
C_in_Console('IN> ' + TRK);

// ------- CodeUnderTest requires
let srva_chptDiv = require('./CSpc/src/SRVa_CSpc')('.chpt')
;// (Doc)Fn->(Elem)
let srva_SpanColl = require('./CSpc/src/SRVa_CSpc').srva_SpanColl
;// (Doc)((Span)Fn->)(Coll)
let srva_ChptSpan0 = require('./CSpc/src/SRVa_CSpc').srva_ChptSpan0
;// (Doc)FN->(Span) .. span implying one of many
let srva_SpanNdx = require('./CSpc/src/SRVa_CSpc').srva_SpanNdx
;//(Span)Fn->(Ndx)
let srva_TrnfrmDCT_color =
    require('./SSpc/src/SRVa_TrnfrmDCT').colorStyleTrnfrmDCT
;//(Num, Num)FN-> (FN{k:FN})
let mutate_anElem =
    require('./CSpc/src/MUTATE_Elem').MUTATE_
;// (CSD)(ELEM)FN->(ELEM)

// This EventListener invokes update(for this Event).
function CLICK_VerseToRead(e) {
    if (e.target !== e.currentTarget) {
        update(e.target);
        e.stopPropagation();
    }
    e.stopPropagation();
}

// -------- update starts here -------------

let update = R.curry(
    /**
     * FN:update (anySpan)FN-> mutates all span.styles
     * @param aVTR: the focus Span
     * @usage: update is invoked within click EventHandler which returns a slected span.
     */
    (aVTR) => { // aVTR:VerseToRead

// curried FNs TODO: pipe these into the map FN below
        let vtrNdx = srva_SpanNdx(aVTR, document); // TESTING #1 WORKS
        let versesCOLL = srva_SpanColl(span0, document); // FIX (aVTR)(document) BREAKS
// mutate each verseSpan by evolving a styleDCT
        R.addIndex(R.map)(
            (e, n, a) => {
                // evolve a CSD
                let aCSD = R.evolve(srva_TrnfrmDCT_color(vtrNdx, n), {color: ''});
                C_in_Both(`  > VerseToRead.Index: ${vtrNdx}`);

                // now with an evolved style.Csd, mutate the aVTR Element
                mutate_anElem(aCSD, e);
            }
        )(versesCOLL);
    });

// --------INIT------------------
update(srva_ChptSpan0(document)); // BROKEN

// const init_Spans = R.pipe(srva_ChptSpan0, update)(document); // initial update
// -------- EventHandle: mouseClick to selectVerseToRead then update all the spans
// this fixes the click event to just div.chpt scope.
let ChptDIV = srva_chptDiv(document);

ChptDIV.addEventListener("click", CLICK_VerseToRead, false);

C_in_Console('OUT> ' + TRK);



