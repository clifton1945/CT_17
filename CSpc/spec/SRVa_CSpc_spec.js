"use strict";
// requires
let R = require('ramda');
// let myTap = require('../../h/myTap');
let C_inConsole = require('../../h/C_in_').Console;
C_inConsole(' IN SRVa_CSpc_spec.  Yeah, you can you see me!');

let assert = require('assert');
let chai = require('chai')
    , expect = chai.expect
;
// ------------ CODE UNDER TEST ----------------
let srva_ = require('../src/SRVa_CSpc') //
    , srva_div_chpt = srva_('.chpt')
    , srva_ChptSpan0 = srva_.ChptSpan0
    , srva_SpanColl = srva_.SpanColl
    , srva_SpanNdx = srva_.SpanNdx
;
describe(`SRVa_CSpc`, () => {
    beforeEach(function () {
        loadFixtures('index.html');
        this.div_chpt = srva_('.chpt')(document);
        this.span0 = srva_ChptSpan0(document);
        this.coll = srva_SpanColl(document);
    });
    describe(` FN: SRVa_ uses* from Str && a Doc. 
        `, function () {
        beforeEach(function () {
            loadFixtures('index.html');
            // this.div_chpt = srva_div_chpt(document);
        });
        it(`***************SRVa_(Str:'.chpt') from a Doc: 
            the div.chpt
            `, function () {
            assert.equal(R.type(srva_), 'Function');
            assert.equal(R.type(srva_('.chpt')), 'Function');
            assert.equal(R.type(srva_('.chpt')(document)), 'HTMLDivElement');
        });
        // it(`SRVa_(Str:'.chpt span')' from a Doc:
        //     the first div.childElement
        //     `, function () {
        //     expect(this.span0.tagName).is.equal('SPAN');
        //     expect(R.indexOf(this.span0, this.coll)).is.equal(0)
        // });
    });
    // describe(` (Str)(Doc)Fn->(Elem): srva_Elem from a Str and a Doc.
    //     `, function () {
    //     beforeEach(function () {
    //         loadFixtures('index.html');
    //         // this.div_chpt = srva_('.chpt')(document);
    //     });
    //     it(`srva_Elem from a Str:'chpt' && a Doc:
    //         is a DIV w/ a first childElement SPAN
    //         `, function () {
    //         expect(this.div_chpt.tagName).is.equal('DIV');
    //         expect(this.div_chpt.firstElementChild.tagName).is.equal('SPAN');
    //     });
    // });
    describe(` (Doc)(Span)Fn->(Coll): srva_.SpanColl from a Span.
        `, function () {
        beforeEach(function () {
            loadFixtures('index.html');
            this.span0 = srva_.ChptSpan0(document);
            this.coll = srva_.SpanColl(this.span0);
        });
        it(`srva_SpanColl from a Doc:
       `, function () {
                assert.equal(R.type(this.coll), 'HTMLCollection');
                assert.equal(R.length(this.coll), 52);
                assert.equal(R.type(this.coll.item(0)), 'HTMLSpanElement');
            }
        );
    });
    // describe(` (Span)Fn->(Ndx): SRVa_SpanNdx for a Span:
    // the index is its peer collection position.
    //     `, function () {
    //     beforeEach(function () {
    //         loadFixtures('index.html');
    //         // this.coll = srva_SpanColl(this.span0);
    //         this.span5 = this.coll[5];
    //     });
    //     it(`SRVa_SpanNdx returns 0 for span0; 5 fo span5.
    //  `, function () {
    //             expect(srva_SpanNdx(this.span0)).is.equal(0);
    //             expect(srva_SpanNdx(this.span5)).is.equal(5);
    //         }
    //     );
    // });
});