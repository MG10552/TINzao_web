/*jshint globalstrict: true, devel: true, node:true */
'use strict';


String.prototype.erLik = function(text) {
    
    // createAlternativeSpelling
    var cAS = function() {
    //é, è, ê, e - and rev
    return this.replace(/é/g, 'e')
    .replace(/è/g, 'e')
    .replace(/ê/g, 'e')
    //ó, ò, ô, o - and rev
    .replace(/ó/g, 'o')
    .replace(/ò/g, 'o')
    .replace(/ô/g, 'o')
    //å, aa - and rev
    .replace(/å/g, 'aa').replace(/Å/g, 'Aa')
    .replace(/æ/g, 'ae').replace(/Æ/g, 'Ae')
    .replace(/ø/g, 'oe').replace(/Ø/g, 'Oe');
    };
    //æ, ae - and rev
    //ø, oe - and rev  
    if (cAS.valueOf() !== text.valueOf())
    {
    return false;}
    else {return true;}
};



var test = new String("bokmål");
console.log(test.erLik());
console.log(test.erLik("bokmål"));
console.log(test.erLik("bokmaal"));
console.log(test.erLik("bokmal"));

