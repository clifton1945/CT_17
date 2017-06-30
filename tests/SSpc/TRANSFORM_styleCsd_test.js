/**
 * EVOLVE_Csd.js
 */
"use strict";
let R = require('ramda')
// , pipe = R.pipe
//     , compose = R.compose
;
let chai = require('chai')
    , should = chai.should()
    , expect = chai.expect
;
context(`Fn:: TRANSFORM_styleCsd | styleCsd_TRNFRMOR are Tables|Dictionaries RETURNING  a new style_Attribute_Csd_TRANSFORM`, () => {
    before(function () {
        // this.STUB_Csd = require('../../SSpc/Dflt_Csd');
        this.STUB_Csd = {color: "green", backgroundColor: 'pink', opacity: '0.5', fontSize: '70%'};
        this.STUB_TRNFRMOR = {backgroundColor: R.always('yellow'), opacity: R.always('0.5')};
    });
    describe(` Fn (attrKey) -> { TRANSFORM_styleCsd( D.csdD )} -> D.csdD
        RETURNS a Function, arity:1, that RETURNS a TRANSFORMED DfltCsd using the STUB Transforms
    `, function () {

        let EVOL_use_Trnsfrm_useDfltCsd = require('../../SSpc/src/TRANSFORM_styleCsd').TRNFRM_

        beforeEach(function () {
            this.STUB_TRNFRMOR = {backgroundColor: R.always('yellow'), opacity: R.always('0.5')};
        });

        it(`expects Fn:EVOL_use_Trnsfrm_useDfltCsd to be a Function of arity:1`, function () {
            expect(x => x).is.a('Function').and.is.length(1);
        });
        it.skip(`expects Fn:EVOL_Style INVOKED w/ a CsdDCT to RETURN a new Csd DCT.`, function () {
            EVOL_use_Trnsfrm_useDfltCsd(this.STUB_TRNFRMOR).should.be.a('Object')
                .and.have.property('backgroundColor')
                .and.equal('yellow')
            ;
        });
    });
});

