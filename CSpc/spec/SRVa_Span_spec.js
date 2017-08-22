"use strict";
// requires
let R = require('ramda');
// let myTap = require('../../h/myTap');
// let C_inConsole = require('../../h/C_in_').Console;
// C_inConsole(' Yeah, you can you see me!');
// let mocha = require('mocha');
let chai = require('chai')
    , expect = chai.expect
;

let srva_ChptDIV = R.pipe(R.invoker(1, 'querySelector')
    ('.chpt')
);// (Doc)Fn->(div)

let srva_VerseColl = R.pipe(
    R.invoker(1, 'querySelector')
    ('.chpt'),
    R.prop('children')
);// (Doc)Fn->(Coll)

// NEW CODE UNDER TEST -
let srva_ChptSpan0 = R.pipe(
    R.invoker(1, 'querySelector')
    ('.chpt'),
    R.prop('firstElementChild')
);// (Doc)Fn->(Span)

let srva_SpanNdx = span => R.indexOf(span, span.parentElement.children)
; // (Span)Fn->(Ndx)


describe(` (Doc)Fn->(Span): SRVa_Span from a Doc. 
        `, function () {
    beforeEach(function () {
        loadFixtures('index.html');
        this.div = srva_ChptDIV(document);
        this.span0 = srva_ChptSpan0(document);
        this.coll = srva_VerseColl(document);

    });
    it(`SRVa_Span from a Doc: 
            typically the first div.childElement
            `, function () {
        expect(this.span0.tagName).is.equal('SPAN');
        expect(R.indexOf(this.span0, this.coll)).is.equal(0)
        }
    );
});
describe(` (Span)Fn->(Ndx): SRVa_SpanNdx for a Span: 
    the index is its peer collection position.  
        `, function () {
    beforeEach(function () {
        loadFixtures('index.html');
        this.span0 = srva_ChptSpan0(document);
        this.span5 = R.pipe(srva_VerseColl, R.nth(5))(document)
    });
    it(`SRVa_SpanNdx returns 0 for span0; 5 fo span5. 
     `, function () {
        expect(srva_SpanNdx(this.span0)).is.equal(0);
        expect(srva_SpanNdx(this.span5)).is.equal(5);
        }
    );
});