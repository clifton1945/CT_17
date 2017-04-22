/**
 * Created by CLIF on 4/21/2017.
 */
/**
 *  STABLE  a_KeyPress::(initN) -> (fn) -> updatedChptr
 *  190906  @1512 each keyEvent triggers an entire Chptr Spans update for each RclssDIV.
 *  FILE:: bind_keyEvents.js  key event ->  sets a new curRclss begin Span and updates all spans.
 */

"use strict";
// let assert = require('assert');

let C_Both = require('../../h/C_Both');


/**
 *      ----- a_KeyPress:: (a key event) -> N:: (+1||-1) value
 *      USED to increment the beginning of current Rclss DIV children
 * @constructor
 */
let keyActions = function (e, n) {
    // read Last Chapter
    if (e.keyCode === 37) {
        e.preventDefault();
        e.stopPropagation();
        n += -5; // FIX
        C_Both("read Last Chptr:" + n);
        // return Fn(n);
    }

    // read Last verse.
    if (e.keyCode === 38) {
        e.preventDefault();
        e.stopPropagation();
        n += -1; // TODO limit this
        C_Both("read Last Verse:" + n);
        // return Fn(n);
    }
    // read Next Chptr.
    if (e.keyCode === 39 || e.keyCode === 96) { // rt arrow || num pad 0
        e.preventDefault();
        e.stopPropagation();
        n += 5;
        C_Both("read Next Chptr:" + n);
        // return Fn(n);
    }
    // read Next verse.
    if (e.keyCode === 32 || e.keyCode === 40) {
        e.preventDefault();
        e.stopPropagation();
        n += +1;// TODO limit this
        C_Both("read Next Verse:" + n);
        // return Fn(n);
    }
    return n;
};

module.exports.keyActions = keyActions;

// let tst = require('./bind_keyEvents').a_KeyPress;
// click Events **********************
// DEPR use of book till need CLICK EVENTS let BindHandlers = function BindHandlers(book)
//     let selectedRange = null;
//     let getSelectedRange = function () {
//         try {
//             if (window.getSelection) {
//                 selectedRange = window.getSelection().getRangeAt(0);
//             } else {
//                 selectedRange = document.getSelection().getRangeAt(0);
//             }
//         } catch (err) {
//         }
//         //console.log('selectedRange:' + selectedRange.toString());
//     };
//     // add event listener to table
//     let b = document.querySelector('.book');
//     b.addEventListener("click",
//         () => {
//             getSelectedRange();
//             let el = document.querySelector('#result');
//             el.textContent= selectedRange.toString();
//             console.log(`textContent:${el.textContent}`);
//         },false
//     );
// };


