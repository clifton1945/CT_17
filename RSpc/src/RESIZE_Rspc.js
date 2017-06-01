/**
 * sizesObj
 */
"use strict";
let R = require('ramda')
    , curry = R.curry
    , always = R.always
;

const RESIZE_ = curry(
    /**
     *  Fn...... RESIZE_:: N|ARR -> ( N -> DICT )
     *
     *  RESIZE_: arity:2 function RETURNS a DICT of RClass sizes
     *      GIVEN a ChptSize
     *      GIVEN a ndxFocus
     *
     * @param size_chpr : N
     * @param ndx_focus : N
     * @return {*}: an evolved SizesObj : DICT.
     *
     * USAGE:
     * let RESIZE_ = require('...path/RESIZE_').fromSize(5);
     * // OR
     * let RESIZE_ = require('...path/RESIZE_').fromArray([0,1,2,3,4]);
     * // THEN if needed,
     * let EVOLVED_SizesDict = RESIZE_(3): //-> {pst: 3, cur: 1, fut: 1}
     */
    (size_chpr, ndx_focus) => { // N|ARR -> N -> DICT
        let dflt = {pst: 0, cur: 0, fut: 0}; // NOTE: I am embedding this constant. Shouldn't I retrieve It ? ??
        let trnsfrms = { // NOTE here I embedding these transforms correctly; they are, in fact, the heart of the function.
            pst: (ndx_focus < 0 || ndx_focus >= size_chpr) ? 0 : always(ndx_focus),
            cur: (ndx_focus < 0 ) ? 0 : always(1),
            fut: (ndx_focus > (size_chpr - 1)) ? 0 : always(size_chpr - ndx_focus - 1)
        };
        return R.evolve(trnsfrms, dflt);
    }
); //:: size_chpr -> (  ndx_focus -> RESIZE_ )

const fromSize = RESIZE_; // this is the default fromSize
const fromArray = R.pipe(R.length, RESIZE_);

module.exports.fromSize = fromSize;
module.exports.fromArray = fromArray;