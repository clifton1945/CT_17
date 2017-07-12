/**
 * EVOLVE_Csd.js
 */
"use strict";
// let R = require('ramda')
// , pipe = R.pipe
//     , compose = R.compose
// ;
let chai = require('chai')
    // , should = chai.should()
    , expect = chai.expect
;
describe(`Fn: SERVE_new_ReadClassTable       RETURNS new {siz: valu} in each of the three keys,
    INVOKED w/ a NoonSpan.
    
    NOTE; this is a high level function with some smaller Fns LIKE
        (1) if (its argument is a noon Span) then I need to extract its Index
            with a Fn: SERVE_spanNdx(span).
                I might do this in the Fn:SERVE_new_NoonSpan.
                something like -> i=(items.item(i).parentNode==parentObj?i+1:i) 
        (2) SERVE_new_ReadClassTable_SIZES(noonIndex)
    `, function () {

    let SERVE_new_ReadClassTable = (noon_span) => {
        return " FIX This. Expect a new Table."
    };

    beforeEach(function () {
        this.TEST_Tabl = require('../readClassTable');
    });

    it(`expects SERVE_new_ReadClassTable is a Function 
    RETURNING a Table
     WITH its sizKey : valu a NUMBER `, function () {
        expect(SERVE_new_ReadClassTable).is.a('Function');
    });
    it.skip(`expects SERVE_new_ReadClassTable.`, function () {
        expect(SERVE_new_ReadClassTable(this.STUB_TRNFRMOR).is.a('Object')
            // .and.have.property('siz')
            // .and.equal('yellow')
            // ;
        )
    });
})
;
/*  REFERENCE
../../SSpc/readClassTable.Test = {
am: {
    siz: 0, csd: {color: 'green', backgroundColor: 'red', opacity: '0.8', fontSize: '80%'}
},
noon: {
    siz: 1, csd: {color: '', backgroundColor: '', opacity: '1.0', fontSize: '120'}
},
pm: {
    siz: 0, csd: {color: 'red', backgroundColor: 'pink', opacity: '0.9', fontSize: '90%'},
},
};
* */