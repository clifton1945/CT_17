/**
 * sizesObj
 */
"use strict";
let R = require('ramda')
    , curry = R.curry
    , always = R.always
;

const evolve_SizesDict = curry(
    /**
     *  ...... evolve_SizesDict:: N.size_chptr -> Fn_( N.ndx_focus -> DICT.Sizes )
     *  a Fn
     * @param size_chpr
     * @param ndx_focus
     * @return {*}: an evolved SizesObj.
     *
     * USAGE:
     * let evolve_SizesDict_in_Chpt = evolve_SizesDict(5);
     * let evolvedSizesDict = evolveSizes_in_Chpt(ndxFocus)
     * evolvedSizesDict(3): //-> {pst: 3, cur: 1, fut: 1}
     */
    (size_chpr, ndx_focus) => {
        let dflt = {pst: 0, cur: 0, fut: 0}; // NOTE: I am embedding this constant. Shouldn't I retrieveIt ???
        let trnsfrms = { // NOTE here I embedding these transforms correctly; they are, in fact, the heart of the function.
            pst: (ndx_focus < 0 || ndx_focus >= size_chpr) ? 0 : always(ndx_focus),
            cur: (ndx_focus < 0 ) ? 0 : always(1),
            fut: (ndx_focus > (size_chpr - 1)) ? 0 : always(size_chpr - ndx_focus - 1)
        };
        return R.evolve(trnsfrms, dflt);
    }
); //:: size_chpr -> (  ndx_focus -> evolve_SizesDict )

const fromArray = R.pipe(R.length, evolve_SizesDict);

module.exports.fromSize = evolve_SizesDict;
module.exports.fromArray = fromArray;