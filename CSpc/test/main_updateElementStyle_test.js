/**
 // CV/test/main_updateElementStyle_test
 */
"use strict";
//
let R = require('ramda')
// , pipe = R.pipe
//     , compose = R.compose
//     , map = R.map
//     , curry = R.curry
;

let chai = require('chai')
    // , should = chai.should()
    , expect = chai.expect
;

// CODE UNDER TEST
let cut = require('../src/main_updateElementStyle');
// BIG NOTE the Fn: updateStyle REQUIRES I USE 'var' NOT 'let' in the for (loop) TO WORK


context(`Fn: updateElementStyle does that, typically on an iterable's Chapter Verses.
    it is typically = updateStyle(thisCSD). A partialed CSD for this.verse.
      
    USAGE: map(updateElementStyle, NodeListVerses)
    WAIT!!  the CSD has to be a f(the element: indexNum, siblingList and RSpcStyles) 
     `, function () {

    describe(`CUT Fn: updateElementStyle( ELEM.CSpc -> ELEM.CSpc )
        `, function () {
        let CUT, STUB_CSD, STUB_Elem;
        beforeEach(function () {
            STUB_Elem = {style: {op: 1, bgColor: 'red'}};
            STUB_CSD = {"op": "0.5", "bgColor": "green"};
            CUT = cut.updateStyle(STUB_CSD);
        });
        it(`expects an Element with a style Attribute, typically a span.verse, and RETURNS an Element.
         `, () => {
            expect(STUB_Elem).is.deep.property('style.op');
        });
        it(`expects to RETURN an Element with a new .style Attribute already partialled within. 
         `, () => {
            // expect(updateStyle(STUB_CSD, STUB_Elem)).is.deep.equal({style:{op:0.5, bgColor:'green'}});
            expect(CUT(STUB_Elem)).is.deep.equal({style: {op: '0.5', bgColor: 'green'}});
        });
    });
});