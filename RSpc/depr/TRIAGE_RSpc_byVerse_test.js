"use strict";

let R = require('ramda')
    , curry = R.curry
;
let chai = require('chai')
    , expect = chai.expect
;
describe(`Fn: UPDATE_RSpcVerses     span -> csd `, () => {
    // CODE UNDER TEST
    let SRV_aStyle = require('../src/SRVa_RSpcStyle').SRV_aReadClssStyle;
    // TEST DATA
    let noonSpan = [2], aNodeList = [[0], [1], [2], [3]]
    ;
    beforeEach(function () {
    });
    it(`SRV_aStyle( span == noonSpan ) `, () => {
        expect(SRV_aStyle(aNodeList, noonSpan, [2])).is.deep.equal({color: 'green'});
    });
    it(`SRV_aStyle( span < noonSpan ) `, () => {
        expect(SRV_aStyle(aNodeList, noonSpan, [0])).is.deep.equal({color: 'red'});
    });
    it(`SRV_aStyle( span > noonSpan ) `, () => {
        expect(SRV_aStyle(aNodeList, noonSpan, [3])).is.deep.equal({color: 'blue'});
    });
});