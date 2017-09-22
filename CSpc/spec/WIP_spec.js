"use strict";
// requires
let R = require('ramda');
let assert = require('assert');
// let myTap = require('../../h/myTap');
let C_inConsole = require('../../h/C_in_').Console;

// ------------ CODE UNDER TEST ----------------
let Dflt_ChptSelector = require('../Dflt_ChptSelector'); // ->  ".chpt"
/**
 * FN: CodeUnderTest
 * @type {Function}
 */
let SRV_Dflt_ChptDIV;
SRV_Dflt_ChptDIV = R.invoker(1, 'querySelector')(Dflt_ChptSelector)
;// (DOC)FN-> (DIV)
// --------------------- TESTS -------------------------------------
describe(`WIP: CodeUnderTest
    `, () => {
    describe(` SRV_DfltChptDIV is a Function delivering the default Chapter DIV
   `, () => {
        beforeEach(function () {
            loadFixtures('index.html');
            this.spanFocus = SRV_Dflt_ChptDIV(document);
        });
        describe(` SRV_DfltChptDIV  IS aFunction READY TO DELIVER the Default ChptDIV.
            @form: (docDiv) FN-> (chptDIV)
                    `, function () {
            it(` is a FN of arity:1 able to DELIVER aChptDIV                 `, function () {
                assert.equal(R.type(SRV_Dflt_ChptDIV), 'Function');
                assert.equal(R.length(SRV_Dflt_ChptDIV), 1);
                assert.equal(R.type(SRV_Dflt_ChptDIV()(document)), 'HTMLDivElement');
            });
        });
        describe(` SRV_DfltChptDIV(document) -> RETURNS typeOf HTMLDivElement.
        `, function () {
            it(` SRV_DfltChptDIV's a DIV                  `, function () {
                assert.equal(R.type(this.spanFocus), 'HTMLDivElement');
                assert.equal(R.type(this.spanFocus.children), 'HTMLCollection');
                assert.equal(R.type(this.spanFocus.children[0]), 'HTMLSpanElement');
            });
        });
    });
});
