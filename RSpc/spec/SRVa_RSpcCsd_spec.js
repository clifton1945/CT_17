"use strict";

let R = require('ramda')
    , curry = R.curry
    // , pipe = R.pipe
    // , evolve = R.evolve
;
let mocha = require('mocha')
;
let chai = require('chai')
    , expect = chai.expect
;
let myTap = require('../../h/myTap');
let C_inConsole = require('../../h/C_in_').Console;

describe(`Fn: SRVa_Csd__GVNa_spanNdx    csd -> noonNdx -> ( spanNdx -> RSpcCsd )`, () => {
    // CODE UNDER TEST
    /**
     * Fn: SRVa_Csd__GVNa_spanNdx
     * Fn: TRIAGE_1
     * @param RSpcCsdDict
     * @param noonNdx
     * @param spanNdx
     * @return a CSD
     */
    let SRVa = require('../src/SRVa_RSpcCsd');

    // TEST DATA
    let aSpanColl = []
        , aNodeList = []
        , aNodeArray = []
        , parent = {}
        , noonSpan = {}
        , parentChildren = []
        , anotherSpan = {}
        , dfltStyle = {}
        , SRVa_Style = {}
    ;
    beforeEach(function () {
        loadFixtures('index.html');
        //      REMEMBER loadFixtures BREAKS a Mocha debug !!
        aNodeList = document.querySelectorAll('.chpt span');
        aNodeArray = Array.apply(null, aNodeList);
        noonSpan = aNodeArray[4];
    });
    dfltStyle = require('C:\\Users\\CLIF\\WSProjects\\wbSample\\RSpc\\Dflt_RSpcStyles.js').Dflt;

    let SRVa_RSpcCsd = SRVa.RSpcCsd;   // === SRVa_
    SRVa_Style = R.pipe(SRVa_RSpcCsd(dfltStyle));

    // CODE UNDER TEST
    it(`aNodeList has 52 spans`, () => {
        expect(aNodeList).is.a('NodeList').of.length(52);
        expect(aNodeList).is.not.a('Array');
    });
    it(`aNodeArray has 52 spans`, () => {
        expect(aNodeArray).is.a('Array').of.length(52);
    });
    it(`noonSpan is a spans`, () => {
        expect(aNodeArray[4].tagName).is.equal('SPAN');
        expect(noonSpan.tagName).is.equal('SPAN');
    });

    it(` expect SRV_aStyle(csd, 4, 1 ) -> the 'am' readStyle.`, () => {
        expect(SRVa_Style(4, 1))
            .is.a('Object')
            .has.key('color', 'backgroundColor', 'opacity', 'fontSize')
            .to.deep.include({opacity: '0.8'});
    });
    it(` expect SRV_aStyle(csd, 4, 4 ) -> the 'noon' readStyle.`, () => {
        expect(SRVa_Style(4, 4))
            .is.a('Object')
            .has.key('color', 'backgroundColor', 'opacity', 'fontSize')
            .to.deep.include({opacity: '1.0'});
    });
    it(` expect SRV_aStyle(csd, 4, 6 ) -> the 'pm' readStyle.`, () => {
        expect(SRVa_Style(4, 6))
            .is.a('Object')
            .has.key('color', 'backgroundColor', 'opacity', 'fontSize')
            .to.deep.include({opacity: '0.9'});
    });
});
