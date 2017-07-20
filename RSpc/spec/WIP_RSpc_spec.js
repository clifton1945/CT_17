"use strict";

let R = require('ramda')
    , curry = R.curry
    // , pipe = R.pipe
    // , evolve = R.evolve
;
let mocha = require('mocha')
    , context = mocha.describe;
// noinspection Annotator
let chai = require('chai')
    , expect = chai.expect
;
//TODO  REFACT this text to roughly correct
context(`Fn: SRVa_Csd__WTHa_CsdTtrnmogFn__GVNa_Csd is CeeingThought's CORE function.
    This verbose name explicitly says
        SRVa_ means it is a Function returning a new something: Csd
        WTHa_ means it already has a needed something:  CsdTrnmogFn Fn. 
        GVNa_ means it requires a something: Csd to be transformed.        
    How can I compose 
    SRVa_Csd = compose( 
        SRVa_Csd__WTHa_CsdTtrnmogFn__GVNa_Csd
            , SRVa_StyleCsd__WTHa_SRVa_FnX__GVNa_StyleCsd
            , SRVa_StyleCsd__WTHa_SRVa_FnY__GVNa_Dflt_StyleCsd
        )(Dflt_StyleCsd)
    Where FnY would needs be a TRIAGE_: 
        GVNa verse  -> verseNdx
        WTHa partialled noonSpan-> noonNdx -> trnmogFn(Csd -> Csd)
        SRVa trnmog
`, () => {
});
// describe(`Fn: WIP( anySpan )  -> Fn( elem, ndx, list )
// `, () => {
//     describe(`I want a Fn(anySpan) -> anySpan default styleCsd.
//         To achieve this, the Fn must already have -
//             (1) the noonSpan || noonSpanNdx
//             &&
//             )2) the default dfltRSpcStyleCsd
//         It will need arguments ( elem, ndx, lst )
//         `, () => {
//         // TEST DATA
//         // NOTE: I had to hard code this Dflt... . wallaby did not find its path in SSpc.
//         let dfltRSpcStyleCsd = {
//             am: {color: "", backgroundColor: 'rgba(255, 7, 109, 0.17', opacity: '0.8', fontSize: '80%'}
//             , noon: {color: "", backgroundColor: 'rgba(247, 241, 6, 0.09)', opacity: '1.0', fontSize: '100%'}
//             , pm: {color: "", backgroundColor: 'rgba(57, 255, 6, 0.1)', opacity: '0.9', fontSize: '95%'}
//         };
//         let noonNdx = 0
//             // , firstSpan = {}
//             , aNodeList = []
//             // , parent = {}
//             , noonSpan = {}
//             // , parentChildren = []
//             , aSpan = {}
//         ;
//         beforeEach(function () {
//             loadFixtures('index.html');
//             aNodeList = document.querySelectorAll('.chpt span');
//             noonSpan = aNodeList[4];
//             aSpan = aNodeList[1];
//         });
//         // CODE UNDER TEST
//         let WIP = curry(
//             (csd, noon_ndx, elem, ndx, lst) => {
//                 return (ndx < noon_ndx) ? csd.am :
//                     (ndx > noon_ndx) ? csd.pm :
//                         csd.noon
//             });
//         describe(`WIP3(...) delivers a Csd Object w/ attributes changing with noonNdx AND/OR spanNdx`, () => {
//             it(`expects noonNdx:3 and spanNdx:1 to be readClass: am`, () => {
//                 let WIP3 = WIP(dfltRSpcStyleCsd, 3)(aSpan, 1, aNodeList);
//                 // noinspection Annotator
//                 expect(WIP3).is.a('Object')
//                     .has.key('color', 'backgroundColor', 'opacity', 'fontSize')
//                     .has.deep.include({fontSize: '80%'});
//             });
//             it(`expects noonNdx:3 and spanNdx:4 to be a readClass: pm`, () => {
//                 let WIP3 = WIP(dfltRSpcStyleCsd, 3)(aSpan, 4, aNodeList);
//                 // noinspection Annotator
//                 expect(WIP3).is.a('Object')
//                     .has.key('color', 'backgroundColor', 'opacity', 'fontSize')
//                     .to.deep.include({opacity: '0.9'});
//             })
//         });
//
//     });
//     describe(` I want to use the SSpc/Dflt_ReadClass_StyleDict BUT wallaby cannot find it. `, () => {
//         // TEST DATA
//         // let dfltRSpcStyleCsd = require('../../SSpc/Dflt_ReadClass_StylesDict'); //  wallaby
//         // it(`expects to throw an error `, () => {
//         //     expect(dfltRSpcStyleCsd).to.throw();
//         // });
//     });
// });