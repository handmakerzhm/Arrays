let unicodeCharacter= ['s','b','a','c'];

let u = String.fromCharCode(0x016F);
let U = String.fromCharCode(0x016E);
let C = String.fromCharCode(0x010C);
let c = String.fromCharCode(0x010D);
let a = String.fromCharCode(0x00e1);
let A = String.fromCharCode(0x0111);
let s = String.fromCharCode(0x0161);
let d = String.fromCharCode(0x0111);
let D = String.fromCharCode(0x0110);
let r = String.fromCharCode(0x0159);
let e = String.fromCharCode(0x011B);
let n = String.fromCharCode(0x00F1);
let invertedQuestionMark = String.fromCharCode(0x00BF);
let copyrightSymbol = String.fromCharCode(0x00A9);
let registerSymbol = String.fromCharCode(0x00AE);




unicodeCharacter.forEach(function(){
document.getElementById('output').innerHTML = unicodeCharacter.concat(u,c,a,C,d,D,r,e,s,n).sort();
    
});

console.log(unicodeCharacter.concat(u,c,a,C,d,D,r,e,s,n));
console.log(copyrightSymbol,registerSymbol,invertedQuestionMark);
// console.log(unicodeCharacter.concat(u,c,a).sort());


// console.log(unicodeCharacter.concat(u));
// console.log(unicodeCharacter.concat(c));
// console.log(unicodeCharacter.concat(a));
// console.log(unicodeCharacter.join(u));
// console.log(u);
// console.log(unicodeCharacter,(u));
// console.log(unicodeCharacter,(c));



 