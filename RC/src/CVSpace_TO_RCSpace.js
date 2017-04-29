/**
 * CVSpace_TO_RCSpace_t.
 */
"use strict";
let R = require('ramda')
;
let context = describe
;
const IS = require('../src/IS_xxxRC');

let cvTOrc = R.curry(
    (ndx_CurBeg, ndx) => {
        let IS_PstRC = IS._PstRC(ndx_CurBeg);
        let IS_CurRC = IS._CurRC(ndx_CurBeg);
        // let IS_FutRC = IS._FutRC(ndx_CurBeg);

        let subtra = IS_PstRC(ndx) ? 0 :
            IS_CurRC(ndx) ? ndx_CurBeg : ndx_CurBeg + 1;
        return ndx - subtra
    });

module.exports.cvTOrc = cvTOrc;

context(`An Element's Ndx in RCSpace IS generally its Ndx in CVSpace minus {one of 3 subtrahends)
    { pst: 0, cur: cur_beg, fur: cur_beg + 1
    }
    
    NOTE 2017.04.28 I have dropped the currentRC_ Len for a while. The curLen || lenCUR is always 1.
    
    NOTE:  In general, an operand ending in "-nd" will carry the meaning "about to be ---ed".
    e.g. minuend - subtrahend  = difference
    e.g. augend + addend`, () => {
});