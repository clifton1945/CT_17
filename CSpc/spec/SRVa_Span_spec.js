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
);// (document)Fn->(div)
let srva_ChptSpan = R.pipe(
    R.invoker(1, 'querySelector')
    ('.chpt'),
    R.prop('firstElementChild')
);// (document)Fn->(Span)

let srva_VerseColl = R.pipe(
    R.invoker(1, 'querySelector')('.chpt'),
    R.prop('children')
);// (document)Fn->(Coll)

describe(` Fn: SRVa_Span from a document 
        `, function () {
    beforeEach(function () {
        loadFixtures('index.html');
        this.div = srva_ChptDIV(document);
        this.span = srva_ChptSpan(document);
        this.coll = srva_VerseColl(document);

    });
    // it(`Fn: SRVa_div should return the div class='chpt':
    //     `, function () {
    //     expect(this.div.nodeName).is.equal("DIV");
    // });
    // it(`Fn: SRVa_Coll should have a span Collection of length > 0:
    //     `, function () {
    //     expect(this.coll.length).is.gt(0);
    // });
    it(`Fn: SRVa_Span should have a default SPAN: 
            typically the first div.childElement`
        , function () {
            expect(this.span.tagName).is.equal('SPAN');
            expect(R.indexOf(this.span, this.coll)).is.equal(0)
        });


});