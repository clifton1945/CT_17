"use strict";

let R = require('ramda')
    , curry = R.curry
    // , pipe = R.pipe
    // , evolve = R.evolve
;
let mocha = require('mocha');
let chai = require('chai')
    , expect = chai.expect
;
describe(` The Fn: SRVa_Csd_WTHa_CsdTrnfrmFn_GVNa_Csd is the actual core function in CeeingThought. This verbose name explicitly says
        SRV means it is a Function returning a new Csd
        WTH means it aleady has aCsdTrnfrmFner Fn. 
            This transformer function is inturn the key Fn.
                It  evolves a Csd as f(
                anElem, itsNdx, itsSiblings - use ENS abbrev -
                AND 
                itsReadClass identity). 
        GVN means it requires a Csd to be transformed.
        
        A corresponding USAGE then is Csd = SRVa_Csd_WTHa_CsdTrnfrmFn_GVN_( aCsd)
    Given these steps what would be a verbose compose??
    
    Csd = compose( 
        SRVa_Csd_WTHa_CsdTrnfrmFn_GVNa_Csd
        , SRVa_CsdTrnfrmFn_WTHa_SRV_ENS_GVNa_CsdTrnfrmFn
        , SRVa_CsdTrnfrmFn_WTHa_SRV_ReadClass_GVNa_CsdTrnfrmFn
        )(Dflt_Style Csd)
            
    The last step of CThought is map(MUTATE_Elem)(allVerseList),
   OR map( 'SRV_Elem_wthCsd_gvnElem':
        long but before refactoring maybe useful.
`, () => {

});
describe(`Fn: WIP( anySpan )  -> Fn( elem, ndx, list )
`, () => {
    describe(`I want a Fn(anySpan) -> anySpan default styleCsd.
        To achieve this, the Fn must already have - 
            (1) the noonSpan || noonSpanNdx
            &&
            )2) the default dfltRSpcStyleCsd  
        It will need arguments ( elem, ndx, lst )         
        `, () => {
        // TEST DATA
        // NOTE: I had to hard code this Dflt... . wallaby did not find its path in SSpc.
        let dfltRSpcStyleCsd = {
            am: {color: "", backgroundColor: 'rgba(255, 7, 109, 0.17', opacity: '0.8', fontSize: '90%'}
            , noon: {color: "", backgroundColor: 'rgba(247, 241, 6, 0.09)', opacity: '1.0', fontSize: '100%'}
            , pm: {color: "", backgroundColor: 'rgba(57, 255, 6, 0.1)', opacity: '0.9', fontSize: '95%'}
        };


        let firstSpan = {}, aNodeList = [], parent = {}, noonSpan = {}, parentChildren = [], aSpan = {}
        ;
        beforeEach(function () {
            loadFixtures('index.html');
            aNodeList = document.querySelectorAll('.chpt span');
            noonSpan = aNodeList[4];
            aSpan = aNodeList[1];
        });
        // CODE UNDER TEST
        let WIP = curry(
            (csd, noon_ndx, elem, ndx, lst) => {
                return (ndx < noon_ndx) ? csd.am :
                    (ndx > noon_ndx) ? csd.pm :
                        csd.noon
            });
        let WIP1 = WIP(dfltRSpcStyleCsd);
        let WIP2 = WIP(dfltRSpcStyleCsd, noonSpan);
        let WIP3 = WIP(dfltRSpcStyleCsd, noonSpan)(aSpan, 1, aNodeList);

        it(`WIP1 expects an Object `, () => {
            expect(WIP1).is.a('Function');
            expect(WIP2).is.a('Function');
        });
        it(`WIP3 expects an Object `, () => {
            expect(WIP3).is.a('Object');
            expect(WIP3).is.a('Object').has.key('color', 'backgroundColor', 'opacity', 'fontSize');
        });
    });
    describe(` I want to use the SSpc/Dflt_ReadClass_StyleDict BUT wallaby cannot find it. `, () => {
        // TEST DATA
        // let dfltRSpcStyleCsd = require('../../SSpc/Dflt_ReadClass_StylesDict'); //  wallaby
        // it(`expects to throw an error `, () => {
        //     expect(dfltRSpcStyleCsd).to.throw();
        // });
    });
});