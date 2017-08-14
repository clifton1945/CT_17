"use strict";

let R = require('ramda')
    , curry = R.curry
    // , always = R.always
    // , evolve = R.evolve
;
let SRV_ = curry(
    /**
     *
     * @param key
     * @param fn
     */
    (key, fn) => R.assoc(
        key, fn, {}
    ));


let by_always = curry(
    /**
     *  ..... Fn: by_always( key_str, valu_a )       RETURNS a  R.always DCT)
     * @param key_str
     * @param valu_a
     * @return {{}}
     *      the valu_a can be a Noun or a Fn/Verb)
     * USAGE:
     *  colorTrnfrm = by_always('color', 'red');// -> {color:'red'}
     */
    (key_str, valu_a) => {
        return {[key_str]: R.always(valu_a)}
    }
);
// exports -----------
module.exports._by_Fn = SRV_;
module.exports.by_always = by_always; // by_always( STR.key ) -> Fn( STR.valu  -> newTRNFRM )
