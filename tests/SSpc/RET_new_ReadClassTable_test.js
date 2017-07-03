/**
 * EVOLVE_Csd.js
 */
"use strict";
let R = require('ramda')
// , pipe = R.pipe
//     , compose = R.compose
;
let chai = require('chai')
    , should = chai.should()
    , expect = chai.expect
;

// var g = document.getElementById('my_div');
// for (var i = 0, len = g.children.length; i < len; i++) {
//
//     (function (index) {
//         g.children[i].onclick = function () {
//             alert(index);
//         }
//     })(i);
//
// }

describe(`Fn: RET_new_ReadClassTable       WILL
    RETURN new {siz: valu} in each of the three keys,
    INVOKED w/ a NoonSpan.
    
    NOTE; this is a high level function with some smaller Fns LIKE
        (1) if (its argument is a noon Span) then I need to extract its Index
            with a Fn: RET_spanNdx(span).
                I might do this in the Fn:RET_new_NoonSpan.
                something like -> i=(litems.item(i).parentNode==parentObj?i+1:i) 
        (2) RET_new_ReadClassTable_SIZES(noonIndex)
    `, function () {

    let RET_new_ReadClassTable = (noon_span) => {
        return 12345
    };

    beforeEach(function () {
        this.TEST_Tabl = require('../../SSpc/readClassTable');
    });

    it(`expects RET_new_ReadClassTable is a Function 
    RETURNING an Table
     WITH its sizKey : valu a NUMBER `, function () {
        expect(RET_new_ReadClassTable).is.a('Function');
        expect(RET_new_ReadClassTable({})).is.a('Number');
    });
    it.skip(`expects RET_new_ReadClassTable.`, function () {
        expect(RET_new_ReadClassTable(this.STUB_TRNFRMOR).should.be.a('Object')
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