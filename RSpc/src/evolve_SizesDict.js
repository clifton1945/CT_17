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
     *  Fn...... evolve_SizesDict:: N|ARR -> ( N -> DICT )
     *  this function RETURNS a DICT of RClass sizes
     *      GIVEN a ChptSpc ndxFocus
     *  it can be configured to accept
     *      a CSpc sizeChpt in CSpc OR CSpc chptARR
     *
     * @param size_chpr : N
     * @param ndx_focus : N
     * @return {*}: an evolved SizesObj : DICT.
     *
     * USAGE:
     * let evolve_SizesDict = require('path/evolve_SizesDict').fromSize(5);
     * // OR
     * let evolve_SizesDict = require('path/evolve_SizesDict').fromArray([0,1,2,3,4]);
     * // THEN
     * evolvedSizesDict = evolve_SizesDict(3): //-> {pst: 3, cur: 1, fut: 1}
     */
    (size_chpr, ndx_focus) => { // N|ARR -> N -> DICT
        let dflt = {pst: 0, cur: 0, fut: 0}; // NOTE: I am embedding this constant. Shouldn't I retrieveIt ???
        let trnsfrms = { // NOTE here I embedding these transforms correctly; they are, in fact, the heart of the function.
            pst: (ndx_focus < 0 || ndx_focus >= size_chpr) ? 0 : always(ndx_focus),
            cur: (ndx_focus < 0 ) ? 0 : always(1),
            fut: (ndx_focus > (size_chpr - 1)) ? 0 : always(size_chpr - ndx_focus - 1)
        };
        return R.evolve(trnsfrms, dflt);
    }
); //:: size_chpr -> (  ndx_focus -> evolve_SizesDict )

const fromSize = evolve_SizesDict;
const fromArray = R.pipe(R.length, evolve_SizesDict);

module.exports.fromSize = fromSize;
module.exports.fromArray = fromArray;