/**
 * 170825
 * ready to modify the span style attributes fontSize and opacity
 *  as a function of its index in the spanCollection
 *
 *   *  CODE UNDER TEST is srva_TrnfrmDCT_color =
 require('./SSpc/src/SRVa_TrnfrmDCT').colorStyleTrnfrmDCT
 ;//(Num, Num)FN-> (FN{k:FN})
 */
"use strict";

// ------- requires ------------
let R = require('ramda');
let C_in = require('./h/C_in_')
    , C_in_Console = C_in.Console
    , C_in_Both = C_in.Both
;
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
// --------------- CODE UNDER TEST ----------------
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
                //---------------- CODE UNDER TEST ---------------------------
                let aCSD = R.evolve(
                    srva_TrnfrmDCT_color(vtrNdx, n),
                    {color: ''}
                );
                C_in_Both(`  > VerseToRead.Index: ${vtrNdx}`);

                // now with an evolved style.Csd, mutate the aVTR Element
                mutate_anElem(aCSD, e);
            }
        )(versesCOLL);
    });
// --------INIT------------------
let span0 = srva_ChptSpan0(document);
// update(span0); // GOOD
// update(srva_ChptSpan0(document)); //GOOD
// R.compose(update, srva_ChptSpan0)(document); // GOOD
// R.pipe(srva_ChptSpan0, update)(document); // GOOD
let init_Verses = R.pipe(srva_ChptSpan0, update);// GOOD
init_Verses(document);

// -------- THEN invoke an EventHandle: mouseClick to selectVerseToRead then update all the spans
// set the click event scope to be div.chpr
let ChptDIV = srva_chptDiv(document);
//   TODO  LEARN AND USE THE onLoad Event before this addListener
ChptDIV.addEventListener("click", CLICK_VerseToRead, false);

C_in_Console('OUT> ' + TRK);



