"use strict";

let R = require('ramda')
    , curry = R.curry
;
module.exports = curry(
// const SRVa_aReadState = curry(
    /**
     *
     * @param read_map : ['AR': valu1], ['RR': valu2], ['BR': valu3]
     * @param r_ndx     : readVerseNdx
     * @param v_ndx     : siblVerseNdx
     * @return {*}      : 1 of 3 Csd values
     */
    (read_map, r_ndx, v_ndx) => {
        return (v_ndx < r_ndx) ? read_map.get('AR')
            : (v_ndx > r_ndx) ? read_map.get('BR')
                : read_map.get('RR')
    });