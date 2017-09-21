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
let SRV_aChptDIV;
SRV_aChptDIV = R.invoker(1, 'querySelector')(Dflt_ChptSelector)
;// (DOC)FN-> (DIV)
// --------------------- TESTS -------------------------------------
describe(`WIP: CodeUnderTest
    `, () => {
    describe(` SRV_aChptDIV is a Function delivering the default Chapter DIV
   `, () => {
        beforeEach(function () {
            loadFixtures('index.html');
            this.Chpt = SRV_aChptDIV(document);
        });
        describe(` SRV_aChptDIV  IS aFunction READY TO DELIVER the Default ChptDIV.
            @form: (docDiv) FN-> (chptDIV)
                    `, function () {
            it(` is a FN of arity:1 able to DELIVER aChptDIV                 `, function () {
                assert.equal(R.type(SRV_aChptDIV), 'Function');
                assert.equal(R.length(SRV_aChptDIV), 1);
                assert.equal(R.type(SRV_aChptDIV()(document)), 'HTMLDivElement');
            });
        });
        describe(` SRV_aChptDIV(document) -> RETURNS typeOf HTMLDivElement.
        `, function () {
            it(` SRV_aChptDIV's a DIV                  `, function () {
                assert.equal(R.type(this.Chpt), 'HTMLDivElement');
                assert.equal(R.type(this.Chpt.children), 'HTMLCollection');
                assert.equal(R.type(this.Chpt.children[0]), 'HTMLSpanElement');
            });
        });
    });
});
