"use strict";

let R = require('ramda')
    // , curry = R.curry
    // , always = R.always
    // , evolve = R.evolve
;
let BUILD_aTRNFRM = R.curry(
    /**
     *  ..... BUILD_aTRNFRM IS a Fn of arity:2. @Sign = Fn( strAtt ) -> Fn( strValu ->  { k: Fn::R.always(valu)}
     *  USAGE: Fn( strAttrName ) RETURNS a transformer Object:
     *      of form { attributeKey: R.always(attrValu) }
     *      for use in Fn: evolve a CSD
     */
    (key, val) => {
        return {[key]: R.always(val)} //
    }
);
module.exports.BUILD_aTRNFRM = BUILD_aTRNFRM; // BUILD_aTRNFRM( STR.key ) -> Fn( STR.valu  -> newTRNFRM )
