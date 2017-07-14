
"use strict";
let R = require('ramda')
// , pipe = R.pipe
//     , compose = R.compose
;
let chai = require('chai')
    , expect = chai.expect
;
context(`Fn: BUILD_aTRNFRM( keyStr ) RET-> Fn( wanting a trnsfomer Function )   
        TO RET-> a transformed style_Attribute.`, () => {
    describe(` Fn (attrKey) -> { TRANSFORM_styleCsd( D.csdD )} -> D.csdD
        RETURNS a Function, arity:1, that RETURNS R.always Function
    `, function () {
        //CODE UNDER TEST
        let TRNFRM_ = require('./BUILD_aTRNFRM').BUILD_aTRNFRM;
        beforeEach(function () {
            this.table = TRNFRM_('backgroundColor', 'yellow');
        });

        it(`expects TRNFRM_  is an arity:2 Function `, function () {
            expect(TRNFRM_).is.a('Function').length(2);
        });
        it(`expects TRNFRM_( strKey ) is a arity:1 Function RETURNING a Function`, function () {
            expect(TRNFRM_('opacity')).is.a('Function').length(1);
        });
        it(`expects TRNFRM_( strKey, strValu ) is objTable w/ Attribute Key && Attr Transformation FUNCTION.`, function () {
            expect(this.table).is.a('Object').has.property('backgroundColor').is.a('Function');
            ;
        });
    });
});
