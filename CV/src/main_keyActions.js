/**
 * Created by CLIF on 4/21/2017.
 */

"use strict";
let R = require('ramda')
;

let init_keyActions = R.curry(
    (f, ndx = 0) => {
        let C = require('../../h/C_in_')
        ;
        // let n = n === undefined ? 0: ndx;
        let n = ndx;
        let Fn = f;
        let VALID_ndx = n => (n >= 0) ? n : 0;
        return function keyActions(e) {
            /*Left Arrow: read Last Chapter*/
            if (e.keyCode === 37) {
                e.preventDefault();
                e.stopPropagation();
                n += -5;
                n = VALID_ndx(n);
                C._inBoth("Left Arrow: read Last Chapter." + n);
                return Fn(n);
                // return n;
            }
            /*UP Arrow: read Last verse.*/
            if (e.keyCode === 38) {
                e.preventDefault();
                e.stopPropagation();
                n += -1;
                n = VALID_ndx(n);
                C._inBoth("UP Arrow: read Last verse." + n);
                return Fn(n);
            }
            /*Right Arrow: read Next Chptr.*/
            if (e.keyCode === 39 || e.keyCode === 96) { // rt arrow || num pad 0
                e.preventDefault();
                e.stopPropagation();
                n += 5;
                C._inBoth("Right Arrow: read Next Chptr." + n);
                return Fn(n)
            }
            /*DWN Arrow: read Next verse.*/
            if (e.keyCode === 32 || e.keyCode === 40) {
                e.preventDefault();
                e.stopPropagation();
                n += +1;
                C._inBoth("DWN Arrow: read Next verse." + n);
                return Fn(n);
            }
            Fn(100); // NOT SEEN
        }
    }
); //???? N -> ( EVENT - >  N );

module.exports.init_keyActions = init_keyActions;