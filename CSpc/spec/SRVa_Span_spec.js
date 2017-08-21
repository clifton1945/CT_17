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
// NEW CODE UNDER TEST -
let srva_ChptDIV = R.pipe(R.invoker(1, 'querySelector')
    ('.chpt')
);// (Doc)Fn->(div)
let srva_VerseColl = R.pipe(
    R.invoker(1, 'querySelector')('.chpt'),
    R.prop('children')
);// (Doc)Fn->(Coll)
let srva_ChptSpan = R.pipe(
    R.invoker(1, 'querySelector')
    ('.chpt'),
    R.prop('firstElementChild')
);// (Doc)Fn->(Span)
let srva_SpanNdx = span => R.indexOf(span, span.parentElement.children)
; // (Span)Fn->(Ndx)


describe(` Fn: SRVa_Span from a Doc: (Doc)Fn->(Span) 
        `, function () {
    beforeEach(function () {
        loadFixtures('index.html');
        this.div = srva_ChptDIV(document);
        this.span = srva_ChptSpan(document);
        this.coll = srva_VerseColl(document);

    });
    it(`Fn: SRVa_Span from a Doc: 
            typically the first div.childElement
            `, function () {
            expect(this.span.tagName).is.equal('SPAN');
            expect(R.indexOf(this.span, this.coll)).is.equal(0)
        }
    );
});
describe(` Fn: SRVa_SpanNdx from a Span: (Span)Fn->(Ndx) 
        `, function () {
    beforeEach(function () {
        loadFixtures('index.html');
        this.span = srva_ChptSpan(document);
    });
    it(`Fn:(Span)Fn->(Ndx) SRVa_SpanNdx returns a index NUM of its peer position. 
     `, function () {
            expect(this.span.tagName).is.equal('SPAN');
        expect(R.indexOf(this.span, this.span.parentElement.children)).is.equal(0)
        }
    );
});