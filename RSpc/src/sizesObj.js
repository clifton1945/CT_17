/**
 * sizesObj
 */
"use strict";
let R = require('ramda')
    , curry = R.curry
    , always = R.always
;
//
// let RSpace_Lengths = curry(
//     /**
//      *  ...... RSpace_Lengths::
//      * @param cspc_focus
//      * @param cspc_len
//      * @return RSpc_Lengths Obj/Dict{*}
//      */
//     (cspc_focus, cspc_len) => { // determine order of the Parameters: MAYBE partial the CSpc Len and return (focusNdx -> SizeObj)
//         let dflt = {pst: 0, cur: 0, fut: 0};
//         let trnsfrms = {
//             pst: (cspc_focus < 0 || cspc_focus >= cspc_len) ? 0 : always(cspc_focus),
//             cur: (cspc_focus < 0 ) ? 0 : always(1),
//             fut: (cspc_focus > (cspc_len - 1)) ? 0 : always(cspc_len - cspc_focus - 1)
//         }
//         return R.evolve(trnsfrms, dflt);
//     }
// ); // CSpc_FocusN -> ( CSpc_LengthN -> RSpc_LengthsOBJ )
//
// const RSpace_Sizes = curry(
//     cspc_len => RSpace_Lengths(R.__, cspc_len)
// );
// const RSpace_SizeObj = R.pipe(R.length, RSpace_Sizes); // CSpc_Arr -> (CSpc_FocusN -> RSpc_LengthsOBJ )
//
// module.exports.RSpace_Lengths = RSpace_Lengths; // CSpc_FocusN  -> ( CSpc_LengthN   -> RSpc_LengthsOBJ )
// module.exports.RSpace_SizeObj = RSpace_SizeObj; // CSpc_Arr     -> ( CSpc_FocusN    -> RSpc_LengthsOBJ)
// // ................... NEW .................................

const sizesObj_in_RSpc = curry(
    /**
     *  ...... sizesObj_in_RSpc::
     * @param size_chpr
     * @param ndx_focus
     * @return {*}: sizesObj_in_RSpc
     */
    (size_chpr, ndx_focus) => {
        let dflt = {pst: 0, cur: 0, fut: 0}; // NOTE: I am embedding this constant. Shouldn't I retrieveIt ???
        let trnsfrms = { // NOTE here I embedding these transforms correctly; they are, in fact, the heart of the function.
            pst: (ndx_focus < 0 || ndx_focus >= size_chpr) ? 0 : always(ndx_focus),
            cur: (ndx_focus < 0 ) ? 0 : always(1),
            fut: (ndx_focus > (size_chpr - 1)) ? 0 : always(size_chpr - ndx_focus - 1)
        }
        return R.evolve(trnsfrms, dflt);
    }
); // size_chpr -> (  ndx_focus -> sizesObj_in_RSpc )

const fromArray = R.pipe(R.length, sizesObj_in_RSpc);

module.exports.fromSize = sizesObj_in_RSpc;
module.exports.fromArray = R.pipe(R.length, sizesObj_in_RSpc);