/**
 * Created by CLIF on 4/21/2017.
 */
const C_inDoc = (txt) => document.querySelector(".console").textContent = txt;
const C_inConsole = (txt) => console.log(txt);

module.exports.C_inDoc = C_inDoc;
module.exports.C_inConsole = C_inConsole;
module.exports.C_inBoth = (txt) => {
    C_inConsole(txt);
    C_inDoc(txt);
};
