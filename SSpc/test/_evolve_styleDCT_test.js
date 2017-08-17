/**
 * it is not clear what I am testing here in _evolve_styleDCT_test.js.
 * I do not have a clear destination
 * I think what I should test is piping:
 *      pipe a trnfrmDCT to a evolverFN -> styleDCT to a mapperFN of VersesCOLL????
 *      DO THIS WED AM
 */
"use strict";
let R = require('ramda')
// , evolve = R.evolve
// , curry = R.curry
// , pipe = R.pipe
// , compose = R.compose
;
let assert = require('assert');


describe(`Fn: CUT_retAlwaysFN: {k: v} 
        evolveFN_trnfrmDCT:: {{k: v} → k: (v → v)} →  {k: v}  returns an evolved styleDCT FROM A trnfrmDCT
    `, () => {
    //TEST DATA
    let old_styleDCT = {color: 'red', bgColor: 2, fSize: 3};
    // CODE UNDER TEST the CUT_retAlwaysFN  --------------------
    let CUT_retAlwaysFN = (val, key, obj) => R.always('green');
    // CODE UNDER TEST the CUT_trnfrmDCT  --------------------
    let CUT_trnfrmDCT = R.mapObjIndexed(CUT_retAlwaysFN, old_styleDCT);

    let evolveFN_trnfrmDCT = R.evolve(R.__, old_styleDCT);//  {{k: v} → k: (v → v)} →  {k: v}
    let newer_styleDCT = evolveFN_trnfrmDCT(CUT_trnfrmDCT);

    beforeEach(function () {
        // loadFixtures('index.html'); //REMEMBER this BREAKS a mocha test !!
        this.evolvedDCT = evolveFN_trnfrmDCT(CUT_retAlwaysFN);
    });
    // CODE UNDER TEST
    it(`expects evolveFN_trnfrmDCT             -> a function to return an evolved styleCsd.`, function () {
        // expect(evolveFN_trnfrmDCT).is.a('Function').and.has.length(1);
        assert.ok(typeof evolveFN_trnfrmDCT === 'function', '');
        assert.equal(evolveFN_trnfrmDCT.length, 1, 'pred: evolveFN_trnfrmDCT.length');
    });
    it(`expects _evolveFN_trnfrmDCT(trnsfrm )  -> a new style Csd.`, function () {
        assert.ok(typeof this.evolvedDCT === 'object', '');
        assert.equal(this.evolvedDCT.color, 'green', 'attr.color is new');
        assert.ok(typeof this.evolvedDCT === 'object', '');

        // expect(evolveFN_trnfrmDCT(CUT_retAlwaysFN)).is.a('Object')
        // .and.has.property('bgColor')
        // .and.has.property('color')
        // .and.equal('red') // new valu
    });
});

