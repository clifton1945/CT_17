"use strict";
let R = require('ramda')
    , curry = R.curry
;
let chai = require('chai')
    , expect = chai.expect
;
// TEST  DATA
let bgColorMap = new Map([
    ['AR', '{ backgroundColor:(255, 7, 109, 0.17)}'],
    ['RR', '{ backgroundColor:(247, 241, 6, 0.09)}'],
    ['BR', '{ backgroundColor:(057, 255, 6, 0.10)}]']
]);
let testMap = new Map([
    ['AR', 'red'], ['RR', 'green'], ['BR', 'blue']
]);

//CODE UNDER TEST
let SRVa_ReadStateAttr = require('../src/SRVa_Attr');

describe(`Fn: SRVa_ReadStateAttr   SERVES a styleCsd TRIAGED by ReadFocus <-
    GVN a readSpanMap AND a versesSet Index )     
    GoDownAnd create a backgroundColor Attribute Map that returns
    `, () => {


    it(`expects SRVa_ReadStateAttr(testMap)           -> an CSD Object with ReadState Keys:AR, RR, BR.
    `, function () {
        expect(SRVa_ReadStateAttr(testMap, 1, 0)).equal('red');
        expect(SRVa_ReadStateAttr(testMap, 1)(1)).equal('green');
        expect(SRVa_ReadStateAttr(testMap)(1)(2)).equal('blue');
    });

    it(`expects SRVa_Attr(bgColorMap)        -> a backgroundColor Csd based on the readIndex and ChptIndex.
    `, function () {
        expect(SRVa_ReadStateAttr(bgColorMap, 1, 0)).equal('{ backgroundColor:(255, 7, 109, 0.17)}');
    });

})
;
// BREAKS for (const [key, value] of TestMap) {
//     console.log(key, value);    }

// BREAKS for (const [key, value] of TestMap.entries()) {
//     console.log(key, value);
// }

// let lst = (map) => {
//     let ret = [];
//     for (const entry of map.entries()) {
//         ret = R.append(([entry[0], entry[1]]), ret);
//     }
//     console.log(ret);
//     return ret
// };
// lst(TestMap);



