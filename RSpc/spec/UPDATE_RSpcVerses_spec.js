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
describe(`Fn: UPDATE_RSpcVerses     span -> List OR Obj w/ 4 lists? `, () => {
    // CODE UNDER TEST
    let SRV_aStyle = require('../src/UPDATE_RSpcVerses').SRV_aStyle;
    // TEST DATA
    let firstSpan = {}, aNodeList = [], parent = {}, noonSpan = {}, parentChildren = [], anotherSpan = {};
    ;
    beforeEach(function () {
        loadFixtures('index.html');
        //      REMEMBER this BREAKS a Mocha debug !!
        firstSpan = document.querySelector('.chpt span');
        aNodeList = document.querySelectorAll('.chpt span');
        noonSpan = aNodeList[4];
        anotherSpan = aNodeList[1];
        parent = noonSpan.parentElement;
        parentChildren = parent.children;
    });

    it(`a span parent to have span children. i.e. a child's siblings.`, () => {
        expect(parentChildren.length).is.equal(52);
        expect(parent.childElementCount).is.equal(52);
    });
    it(`GET the noonSpan's sibling index: it does not come from the event handler with an index.`, () => {
        expect(R.indexOf(noonSpan, parentChildren)).is.equal(4);
        expect(R.flip(R.indexOf)(parentChildren, noonSpan)).is.equal(4);
    });
    it(`
    Fn: SRV_aStyle( parentChildren, noonSpan, aNodeList.span.`, () => {
        expect(SRV_aStyle(parentChildren, noonSpan, anotherSpan)).is.deep.equal({color: 'red'});
    });


});