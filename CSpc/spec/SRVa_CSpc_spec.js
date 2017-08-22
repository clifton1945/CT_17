"use strict";
// ------------------   requires
let R = require('ramda');
// let myTap = require('../../h/myTap');
let C_inConsole = require('../../h/C_in_').Console;
// C_inConsole(' HEY, THIS SHOWS the wallaby Console can be used!!!');
let chai = require('chai')
    , expect = chai.expect
;
// NEW CODE UNDER TEST -
module.exports = str => R.pipe(R.invoker(1, 'querySelector'))(str)
; // (Doc)((queryStr)Fn->)(Elem)
module.exports.srva_SpanColl = span => R.path(['parentElement', 'children'])(span)
; // (Doc)((Span)Fn->)(Coll)
module.exports.srva_SpanNdx = span => R.indexOf(span, span.parentElement.children)
; // (Doc)((Span)Fn->)(Ndx)


describe(`the SRVa_CSpc_spec module combines srva_FNs AND their Tests.
    The default export is srva_:: (Doc)((queryStr)Fn->)(Elem)
    `, () => {
// NEW CODE UNDER TEST -
    /**
     * (Doc)((queryStr)Fn->)(Elem)
     * @type {(function(*=): *)|*}
     * @private
     */
    let srva_ = require('./SRVa_CSpc_spec');
    /**
     * (Doc)((Span)Fn->)(Coll)
     * @type {(function(*=))|*}
     */
    let srva_SpanColl = require('./SRVa_CSpc_spec').srva_SpanColl;
    /**
     * (Doc)((Span)Fn->)(Ndx)
     * @type {(function(*=))|*}
     */
    let srva_SpanNdx = require('./SRVa_CSpc_spec').srva_SpanNdx;

    beforeEach(function () {
        loadFixtures('index.html');
        this.div = R.pipe(R.invoker(1, 'querySelector'))('.chpt')(document);
        this.span0 = R.pipe(
            R.invoker(1, 'querySelector')
            ('.chpt'),
            R.prop('firstElementChild'))(document);
        this.coll = R.path(['parentElement', 'children'])(this.span0);
    });

    describe(` (Doc)(Str)Fn->(*): SRVa_* from Str && a Doc. 
        `, function () {

        beforeEach(function () {
            loadFixtures('index.html');
            this.div = srva_('.chpt')(document);
            this.span0 = srva_('.chpt')(document).firstElementChild;
            this.coll = R.path(['parentElement', 'children'])(this.span0);
        });
        it(`SRVa_(Str:'.chpt') from a Doc: 
            the div.chpt
            `, function () {
            expect(this.div.tagName).is.equal('DIV');
            expect(this.div.firstElementChild.tagName).is.equal('SPAN');
        });
        it(`SRVa_(Str:'.chpt span')' from a Doc:
            the first div.childElement
            `, function () {
            expect(this.span0.tagName).is.equal('SPAN');
            expect(R.indexOf(this.span0, this.coll)).is.equal(0)
        });
    });

    describe(` (Str)(Doc)Fn->(Elem): srva_Elem from a Str and a Doc. 
        `, function () {
        beforeEach(function () {
            loadFixtures('index.html');
            this.div = srva_('.chpt')(document);
        });
        it(`srva_Elem from a Str:'chpt' && a Doc: 
            is a DIV w/ a first childElement SPAN
            `, function () {
            expect(this.div.tagName).is.equal('DIV');
            expect(this.div.firstElementChild.tagName).is.equal('SPAN');
        });
    });

    describe(` (Doc)(Span)Fn->(Coll): srva_SpanColl from a Span. 
        `, function () {
        beforeEach(function () {
            loadFixtures('index.html');
            this.coll = srva_SpanColl(this.span0);
        });

        it(`srva_SpanColl from a Doc: 
       `, function () {
                expect(this.coll).is.a('HTMLCollection');
                expect(this.coll.length).is.gt(0).and.is.lt(100);
            }
        );
    });
    describe(` (Span)Fn->(Ndx): SRVa_SpanNdx for a Span: 
    the index is its peer collection position.  
        `, function () {
        beforeEach(function () {
            loadFixtures('index.html');
            this.span5 = this.coll[5];
        });
        it(`SRVa_SpanNdx returns 0 for span0; 5 fo span5. 
     `, function () {
                expect(srva_SpanNdx(this.span0)).is.equal(0);
                expect(srva_SpanNdx(this.span5)).is.equal(5);
            }
        );
    });
});
