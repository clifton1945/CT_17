/**
 * Created by CLIF on 4/21/2017.
 */
// *********** OLD BUT STILL IN USE
const Doc_It = (txt) => document.querySelector(".console").textContent = txt;
const C_It = (txt) => console.log(txt);
module.exports.C_Both = (txt) => {
    C_It(txt);
    Doc_It(txt);
};
