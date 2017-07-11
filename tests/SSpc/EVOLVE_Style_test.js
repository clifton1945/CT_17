/**
 * EVOLVE_Csd.js
 */
"use strict";
let R = require('ramda')
    , evolve = R.evolve
// , pipe = R.pipe
//     , compose = R.compose
;
let chai = require('chai')
    // , should = chai.should()
    , expect = chai.expect
;

describe(`Fn: EVOLVE_csdStyle.arity:2 RETURNS an EVOLVED Csd
    EXPECTING args: transformerFn and a csdStyle. 
    The pipe version 
        WANTS a SERV_aCsd_frmTrnfrm
        WANTS a SERV_aStyleCsd
        AND RETURNS a TRANSFORMED Csd
    `, function () {
    describe(`SERVE_newCsd_frmTrnfrm.arity:1 RETURNS an EVOLVED Csd
    EXPECTING arg: SERV_trnfrmFn 
    The pipe version wants
        WANTS a SERV_trnfrmFn 
        AND RETURNS 
     
    `, () => {
        // TEST DATA
        let STUB_CSD = {color: "green", backgroundColor: 'pink', opacity: '0.5', fontSize: '70%'};
        let STUB_TRNFRMOR = {backgroundColor: R.always('yellow'), opacity: R.always('0.5')};
        // CODE UNDER TEST
        let _EVOLVED_frmCsd_then_frmTrnfrm = evolve;
        let EVOLVED_Csd_frmTrnfrm = evolve(R.__, STUB_CSD);

        beforeEach(function () {
            EVOLVED_Csd_frmTrnfrm(STUB_CSD)
        });
        it(`expects SERVE_newCsd_frmTrnfrm( trnsfrm ) to RETURN a new style Csd.`, function () {
            expect(EVOLVED_Csd_frmTrnfrm(STUB_TRNFRMOR)).is.a('Object')
                .and.has.property('backgroundColor')
                .and.equal('yellow')
            ;
        });
    });
});

