/**
 CV/src/main_UPDATE_anElement
 */
"use strict";

let chai = require('chai')
    , should = chai.should()
    , expect = chai.expect
;


let R = require('ramda')
// , pipe = R.pipe
// , compose = R.compose
    , map = R.map
    , curry = R.curry
;

let UPDATE = require('')

// let
describe(`UPDATE_anElement:: updates each style.property in param: propertyObject
         WITHOUT interfering with other existing style.properties.`, () => {
    describe(`:: `, () => {
        beforeEach(function () {
            // loadFixtures('index.html'); //REMEMBER this BREAKS a mocha test !!
            this.elem = {'style': {'name': 'tim'}};
            // this.CUT = UPDATE_anElement(this.elem)
        });

        it(`should update a style.property given in param: pro.`, () => {
            (UPDATE_anElement({'style': {'name': 'tim'}}, 'name')).should.equal('Cliff');
        });
    });

});