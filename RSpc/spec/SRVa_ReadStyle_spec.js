"use strict";

let R = require('ramda')
    , curry = R.curry
    // , pipe = R.pipe
    // , evolve = R.evolve
;
// let mocha = require('mocha')
// ;
let assert = require('assert');
let chai = require('chai'), expect = chai.expect
;
let myTap = require('../../h/myTap');
let C_inConsole = require('../../h/C_in_').Console;

describe(`FN(srva_ReadStyleDCT) SERVES (a ReadStyleDCT)       
    PICKED FROM (all ReadStylesDCT) BY APPLYING (a VerseNdxNUM) TO FN(pick_a_ReadStyleDCT).
   `, () => {
    // CODE UNDER TEST
    /**
     * Fn: SRVa_Csd__GVNa_spanNdx
     * Fn: TRIAGE_1
     * @param ReadCsdDict
     * @param noonNdx
     * @param spanNdx
     * @return a CSD
     */
    let SRVa_ = require('../src/SRVa_ReadStyle');
    let SRVa_Style = SRVa_.Style;

    // TEST DATA
    let aSpanColl = []
        , aNodeArray = []
        , noonSpan = {}
        , dfltStyle = {}
    ;
    beforeEach(function () {
        loadFixtures('index.html');
        //      REMEMBER loadFixtures BREAKS a Mocha debug !!
        this.NodeList = document.querySelectorAll('.chpt span');
        aNodeArray = Array.apply(null, this.NodeList);
        noonSpan = aNodeArray[4];
    });

    dfltStyle = require('../Dflt_ReadStyles');
    let SRVa_dfltStyle = SRVa_Style(dfltStyle);

    // CODE UNDER TEST FIX TO NOT BE expected Data but rather expected functionality.

    it(` expect SRV_aStyle(csd, 4, 1 ) -> the 'am' readStyle.`, () => {
        expect(SRVa_dfltStyle(4, 1))
            .is.a('Object')
            .has.key('color', 'backgroundColor', 'opacity', 'fontSize')
        ;
    });
    it(` expect SRV_aStyle(csd, 4, 4 ) -> the 'noon' readStyle.`, () => {
        expect(SRVa_dfltStyle(4, 4))
            .is.a('Object')
            .has.key('color', 'backgroundColor', 'opacity', 'fontSize')
        // .to.deep.include({opacity: '1.0'})
        ;
    });
    it(` expect SRV_aStyle(csd, 4, 6 ) -> the 'pm' readStyle.`, () => {
        expect(SRVa_dfltStyle(4, 6))
            .is.a('Object')
            .has.key('color', 'backgroundColor', 'opacity', 'fontSize')
        // .to.deep.include({opacity: '0.9'})
        ;
    });

});