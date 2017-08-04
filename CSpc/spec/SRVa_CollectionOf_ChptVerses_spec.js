"use strict";
// requires
let R = require('ramda');
let myTap = require('../../h/myTap');
let C_inConsole = require('../../h/C_in_').Console;
let chai = require('chai')
    , expect = chai.expect
;
// CODE UNDER TEST
let SRVa_CollectionOf_ChptVerses = require('../src/SRVa_CollectionOf_ChptVerses').SRVa_CollectionOf_ChptVerses;


// NEW CODE UNDER TEST - what is d
let fn = (doc) => {
    let select = R.invoker(1, 'querySelector');
    return select('.chpt', doc);
};


describe(` Fn: SRVa_CollectionOf_ChptVerses(doc) -> HTMLCollection 
    
    IF the Document has div .chptr.  
        `, function () {
    beforeEach(function () {
        loadFixtures('index.html');
        //REMEMBER this BREAKS a mocha test !!
        this.coll = SRVa_CollectionOf_ChptVerses(document);
        // this.coll = fn(document); this breaks it
    });
    it(`Fn: SRVa_ChptVerseCollection(doc) -> HTMLCollection of a length`,
        function () {
            expect(this.coll).is.a('HTMLCollection');
            expect(this.coll.length).is.a('Number').above(0).and.below(100);
        });
    // it(``, function () {
    //     expect(MUTATE_Elem_byElem(TEST_Elem)).is.a('Function').and.has.length(1);
    // });
    // it(``, function () {
    //     expect(MUTATE_Elem_byElem(TEST_Elem)(TEST_Csd).style).is.property('color').equals('red')
    //     ;
    // });
});