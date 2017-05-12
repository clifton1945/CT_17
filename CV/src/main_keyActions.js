/**
 * Created by CLIF on 4/21/2017.
 */

"use strict";
let R = require('ramda')
;

let init_keyActions = R.curry(
    (f, ndx) => {
        let C = require('../../h/C_in_')
        ;
        let n = ndx;
        let Fn = f;
        return function keyActions(e) {
            /*Left Arrow: read Last Chapter*/
            if (e.keyCode === 37) {
                e.preventDefault();
                e.stopPropagation();
                n += -5; // FIX
                C._inBoth("read Last Chptr:" + n);
                // return Fn(n);
                // return n;
            }
            /*UP Arrow: read Last verse.*/
            if (e.keyCode === 38) {
                e.preventDefault();
                e.stopPropagation();
                n += -1; // TODO limit this
                C._inBoth("read Last Verse:" + n);
                Fn(n);
            }
            /*Right Arrow: read Next Chptr.*/
            if (e.keyCode === 39 || e.keyCode === 96) { // rt arrow || num pad 0
                e.preventDefault();
                e.stopPropagation();
                n += 5;
                C._inBoth("read Next Chptr:" + n);
                // return Fn(n);
                return n
            }
            /*DWN Arrow: read Next verse.*/
            if (e.keyCode === 32 || e.keyCode === 40) {
                e.preventDefault();
                e.stopPropagation();
                n += +1;// TODO limit this
                C._inBoth("read Next Verse:" + n);
                // Fn(n);
                // return n // DO I REALLY NEED this return n?/
            }
            return n;
        }
    }
); //???? N -> ( EVENT - >  N );

module.exports.init_keyActions = init_keyActions;