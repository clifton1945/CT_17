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
     * @param cspc_focus
     * @param cspc_len
     * @return RSpc_Lengths Obj/Dict{*}
     */
    (cspc_focus, cspc_len) => { //TODO determine order of the Parameters: MAYBE partial the CSpc Len and return (focusNdx -> SizeObj)
        let dflt = {pst: 0, cur: 0, fut: 0};
        let trnsfrms = {
            pst: (cspc_focus < 0 || cspc_focus >= cspc_len) ? 0 : always(cspc_focus),
            cur: (cspc_focus < 0 ) ? 0 : always(1),
            fut: (cspc_focus > (cspc_len - 1)) ? 0 : always(cspc_len - cspc_focus - 1)
        }
        return R.evolve(trnsfrms, dflt);
    }
); // CSpc_FocusN -> ( CSpc_LengthN -> RSpc_LengthsOBJ )

const RSpace_Sizes = curry(
    cspc_len => RSpace_Lengths(R.__, cspc_len)
);
const RSpace_SizeObj = R.pipe(R.length, RSpace_Sizes); // CSpc_Arr -> (CSpc_FocusN -> RSpc_LengthsOBJ )

module.exports.RSpace_Lengths = RSpace_Lengths; // CSpc_FocusN  -> ( CSpc_LengthN   -> RSpc_LengthsOBJ )
module.exports.RSpace_Sizes = RSpace_Sizes;     // CSpc_FocusN  -> ( CSpc_LengthN   -> RSpc_LengthsOBJ )
module.exports.RSpace_SizeObj = RSpace_SizeObj; // CSpc_Arr     -> ( CSpc_FocusN    -> RSpc_LengthsOBJ)