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
        , parent = {}
        , noonSpan = {}
        , parentChildren = []
        , anotherSpan = {}
        , dfltStyle = {}
        , SRVa_Style = {}
    ;
    dfltStyle = require('C:\\Users\\CLIF\\WSProjects\\wbSample\\RSpc\\Dflt_RSpcStyles.js').Dflt;
    beforeEach(function () {
        loadFixtures('index.html');
        //      REMEMBER loadFixtures BREAKS a Mocha debug !!
        aNodeList = document.querySelectorAll('.chpt span');
        noonSpan = aNodeList[4];
        // anotherSpan = aNodeList[1];
        // parent = noonSpan.parentElement;
        // parentChildren = parent.children;
    });

    let SRVa_RSpcCsd = SRVa.RSpcCsd;   // === SRVa_
    SRVa_Style = R.pipe(SRVa_RSpcCsd(dfltStyle));
    // CODE UNDER TEST
    it(`aNodeList has 52 spans`, () => {
        expect(aNodeList).is.a('NodeList').of.length(52);
    });
    it(`noonSpan is a spans`, () => {
        expect(noonSpan.tagName).is.equal('SPAN');
    });
    let SRVa_noonNdx = R.indexOf;
    let n = R.indexOf(noonSpan, aNodeList);
    C_inConsole(`_N = ${n}`); // -> 4
    it(`{R.indexOf(noonSpan, aNodeList) -> 4 .`, () => {
        expect(n).is.equal(4);
    });
    let SRVa_Style__WTHa_noonVers__GVNa_VersNdx = curry(
        R.pipe(
            SRVa_noonNdx(aNodeList)
            , SRVa.RSpcCsd(dfltStyle)
        ))(noonSpan);

    // it(` expect SRVa_Style__WTHa_noonVers:4 __GVNa_VersNdx( 0 -> 3 ) -> the 'am' readStyle.opacity:'0.8'.`, () => {
    //     expect(SRVa_Style__WTHa_noonVers__GVNa_VersNdx(2))
    //         .is.a('Object')
    //         .has.key('color', 'backgroundColor', 'opacity', 'fontSize')
    //         .to.deep.include({opacity: '0.8'});
    // });
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
    // console.log(`csd-> ${JSON.stringify(dfltStyle)}`);
    it(` expect dfltStyle -> aCsdDict.`, () => {
        expect(dfltStyle).is.a('Object').has.key('am', 'noon', 'pm');
        expect(dfltStyle.am).is.a('Object').to.deep.include({opacity: '0.8'});
    });

});
