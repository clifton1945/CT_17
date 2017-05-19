/**
 *RSpace_Lengths
 */
"use strict";
let R = require('ramda')
    , curry = R.curry
    , always = R.always
;

let RSpace_Lengths = curry(
    /**
     *  ...... RSpace_Lengths::
     * @param cspc_len
     * @param cspc_focus
     * @return RSpc_Lengths Obj/Dict{*}
     */
    (cspc_len, cspc_focus) => {
        let dflt = {pst: 0, cur: 0, fut: 0};
        let trnsfrms = {
            pst: (cspc_focus < 0 || cspc_focus >= cspc_len) ? 0 : always(cspc_focus),
            cur: (cspc_focus < 0 ) ? 0 : always(1),
            fut: (cspc_focus > (cspc_len - 1)) ? 0 : always(cspc_len - cspc_focus - 1)
        }
        return R.evolve(trnsfrms, dflt);
    }
); // CSpc_Length -> ( CSpc_Focus -> RSpc_Lengths )

module.exports = RSpace_Lengths;