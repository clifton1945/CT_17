"use strict";

let R = require('ramda')
    , curry = R.curry
    // , always = R.always
    // , evolve = R.evolve
;
// let SRVa_Attr = curry(
//     (key, fn) => R.assoc(
//         key, fn, {}
//     ));
//
// module.exports._by_Fn = SRVa_Attr;
//
// let by_always = curry(
//     /**
//      *  ..... Fn: by_always( keyStr )       RETURNS an R.alwaysFn( wanting a valu)
//      the valu can be a Noun or a Fn/Verb)
//      * @param key
//      * @param val
//      * @return {{}}
//      */
//     (key, val) => {
//         return {[key]: R.always(val)}
//     }
// );
// module.exports.by_always = by_always; // by_always( STR.key ) -> Fn( STR.valu  -> newTRNFRM )
