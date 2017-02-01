/**
 * Created by CLIF on 1/28/2017.
 */
"use strict";
let R = require('ramda');
let compose = R.compose;

let mocha = require('mocha'),
    describe = mocha.describe,
    it = mocha.it;

let chai = require('chai'),
    expect = chai.expect,
    should =  chai.should();

let _mutate = require('../src/mutateTheFirstVerseStyle');

describe("mutateElemStyleProp:: Dom -> Dom.", function () {
    let dom, anElem;
    mocha.beforeEach(() => {
        loadFixtures('index.html');
        dom = document;
    });
    it("should mutate the DOM.", function () {
        let anElem = dom.querySelector('#theFirst');
        let styleCSD = anElem.style;
        // BEFORE: hard code
        styleCSD.backgroundColor = 'pink';
        styleCSD.opacity = '0.99';
        styleCSD.color = 'red';
        _mutate(dom);
        anElem.style.color.should.equal('green');
        anElem.style.opacity.should.equal('0.4');
    });

});



