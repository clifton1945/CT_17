"use strict";
let R = require('ramda')
    , curry = R.curry
;
let chai = require('chai')
    , expect = chai.expect
;
//CODE UNDER TEST

const SRVa_aReadState = curry(
    /**
     *
     * @param read_map : {AR: valu, RR:valu, BR: valu}
     * @param r_ndx
     * @param v_ndx
     * @return {*}
     */
    (read_map, r_ndx, v_ndx) => {
        return (v_ndx < r_ndx) ? read_map.get('AR')
            : (v_ndx > r_ndx) ? read_map.get('BR')
                : read_map.get('RR')
    });

describe(`Fn: SRVa_Attr   SERVES a styleCsd TRIAGED by ReadFocus <-
    GVN a readSpanMap AND a versesSet Index )     
    GoDownAnd create a backgroundColor Attribute Map that returns
    `, () => {
    //DATA
    let bgColorMap = new Map([
        ['AR', '{ backgroundColor:(255, 7, 109, 0.17)}'],
        ['RR', '{ backgroundColor:(247, 241, 6, 0.09)}'],
        ['BR', '{ backgroundColor:(057, 255, 6, 0.10)}]']
    ]);
    let testMap = new Map([
            ['AR', 'red'], ['RR', 'green'], ['BR', 'blue']
        ]
    );

    it(`expects SRVa_Attr(testMap)           -> an CSD Object with ReadState Keys:AR, RR, BR.
    `, function () {
        expect(SRVa_aReadState(testMap, 1, 0)).equal('red');
        expect(SRVa_aReadState(testMap, 1)(1)).equal('green');
        expect(SRVa_aReadState(testMap)(1)(2)).equal('blue');
    });

    it(`expects SRVa_Attr(bgColorMap)        -> an CSD Object with keys:backgroundColor.
    `, function () {
        expect(SRVa_aReadState(bgColorMap, 1, 0)).equal('{ backgroundColor:(255, 7, 109, 0.17)}');
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



