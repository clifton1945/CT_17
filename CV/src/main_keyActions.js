/**
 * Created by CLIF on 4/21/2017.
 */
/**
 *  WIP   a_KeyPress::(initN) -> (fn) -> updatedChptr
 */

"use strict";
// let c = require('C:/Users/CLIF/WSProjects/wbSample/h/C_in_');
let c = require('../../h/C_in_');
// let C_inBoth = c.C_inBoth;
// let C_inDoc = c.C_inDoc;


/**
 *      ----- a_KeyPress:: (a key event) -> N:: (+1||-1) value
 *      USED to increment the beginning of current Rclss DIV children
 * @constructor
 */
let keyActions = function (e, n) {
    n = 12345;
    // read Last Chapter
    if (e.keyCode === 37) {
        e.preventDefault();
        e.stopPropagation();
        n += -5; // FIX
        c.C_inBoth("read Last Chptr:" + n);
        // return Fn(n);
    }

    // read Last verse.
    if (e.keyCode === 38) {
        e.preventDefault();
        e.stopPropagation();
        n += -1; // TODO limit this
        c.C_inBoth("read Last Verse:" + n);
        // return Fn(n);
    }
    // read Next Chptr.
    if (e.keyCode === 39 || e.keyCode === 96) { // rt arrow || num pad 0
        e.preventDefault();
        e.stopPropagation();
        n += 5;
        c.C_inBoth("read Next Chptr:" + n);
        // return Fn(n);
    }
    // read Next verse.
    if (e.keyCode === 32 || e.keyCode === 40) {
        e.preventDefault();
        e.stopPropagation();
        n += +1;// TODO limit this
        c.C_inBoth("read Next Verse:" + n);
        // return Fn(n);
    }
    return n;
};
module.exports.keyActions = keyActions;

let x = n => ` -> x:${n}`;
module.exports.x = x;
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