let unicodeCharacter= ['s','b','a','c'];

let u = String.fromCharCode(0x016F);
let C = String.fromCharCode(0x010C);
let c = String.fromCharCode(0x010D);
let a = String.fromCharCode(0x00e1);
let d = String.fromCharCode(0x0111);
let D = String.fromCharCode(0x0110);


//-------------------------------------------------
/*test loop for special characters: forEach loop,plus sort*/

// unicodeCharacter.forEach(function(){
// document.getElementById('output').innerHTML = unicodeCharacter.concat(u,c,a,C,d,D).sort();
    
// });

//--------------------------------------------
/*test loop2 for special characters: forof loop, plus sort.*/

// for(let l of unicodeCharacter){
//     document.getElementById('output').innerHTML = unicodeCharacter.concat(u,c,a,C,d,D).sort();
// }

// console.log(unicodeCharacter.concat(u,c,a,C,d,D).sort());

//------------------------------------------------
/*test loop2-2 for special characters: forof loop, plus reverse*/
// for(let l of unicodeCharacter){
//     document.getElementById('output').innerHTML = unicodeCharacter.concat(u,c,a,C,d,D).reverse();
// }

// console.log(unicodeCharacter.concat(u,c,a,C,d,D).reverse());

//-----------------------------------------------
//test function with special characters

// let sorter = function(){
//    let sortOutput= document.getElementById('output').innerHTML = unicodeCharacter.concat(u,c,a,C,d,D).sort();
//     console.log(sortOutput.sort());
// }
// sorter();

//--------------------------------------------------------
//Different log options
// console.log(u);
// console.log(U);
// console.log(unicodeCharacter,(u));
// console.log(unicodeCharacter,(c));
// console.log(unicodeCharacter.concat(u,c,a).sort());
// console.log(unicodeCharacter.concat(u));
// console.log(unicodeCharacter.join(u));
// console.log(unicodeCharacter.concat(u,c,a,C,d,D));




 