alert('This is Javascript {;-)');

//Data types

// let strings = ['wane','anton','smith'];

// console.log(strings);
// console.log(strings[0]);

// let numbers = [5,6,7,8,9];

// console.log(numbers[2]);

// let booleans = [true,false,true];

// console.log(booleans[1]);

// let array = [
//     ['plums and mangos','cherries and grapes','dates and nuts','tea and figs'],
//     ['chicken with beans','fish with potatoes','stromboli with crepes']
// ];

// console.log(`For dinner I'm having ${array[1][2]} and some  ${array[0][1]}`);

/*notice: the first array block accesses the specific array, and the second block access array index value*/


// let functionExample = [ function blueberry () {}
// ];

// console.log(functionExample);

// let objectExample = [
// {
//     pencil:'lead holder',
//     colorpencil:'prismacolor',
//     staedtler:'eraser'
// },
// {
//     music:'brass, strings',
//     paper:'canson',
//     charcoal:'generals'
// }
// ];

// console.log(objectExample[1].paper);
// console.log(objectExample);
// console.log(objectExample);
// console.log(`Tools for drawing includes ${objectExample[0].pencil}, ${objectExample[0].staedtler} and some ${objectExample[1].paper} art paper.`);

//Basic array

// let webDevelopment = ['HTML','CSS','Javascript','Node.js','GIT','Mongodb'];

// console.log(webDevelopment);

//output /*HTML,CSS,Javascript,Node.js,GIT,Mongodb */

//Selecting the value inside the array 

// let webDevelopment = ['HTML','CSS','Javascript','Node.js','GIT','Mongodb'];

//  console.log(webDevelopment[0]);

// output // HTML

//Quick example using template literal 

//  let webDevelopment = ['HTML','CSS','Javascript','Node.js','GIT','Mongodb'];

//  console.log(`My favorite part of webDevelopment is ${webDevelopment[2]} and ${webDevelopment[3]}`);

//My favorite parts of webDevelopment is Javascript and Node.js

//Example: 4
//outputting  data

// let webDevelopment = ['HTML','CSS','Javascript','Node.js','GIT','Mongodb'];

// document.getElementById('data').innerHTML = (`My favorite parts of webDevelopment is ${webDevelopment[2]} and ${webDevelopment[3]}`);


// Example: 5

/* You can use methods to change elements inside the array.
There are more methods, these are some that suite my needs*/


// jobs.pop('illustrator');
// jobs.push('author');
// jobs.sort();
// jobs.reverse();
// jobs.shift();
// jobs.unshift();

/*With the splice method you can delete elements and add values inside the deleted array.  Note: To understand the splice method, practice to see how the deletion and insertions work with the array. (start,end)*/

// jobs.splice(0,1);//items deleted: entrepreneur,problem solver,illustrator
// jobs.splice(0,2);//items deleted: problem solver, illustrator
// jobs.splice(0,3) // item deleted: illustrator
// jobs.splice(0,4)// does not delete any item
// jobs.splice(1,0)// does not delete any item
// jobs.splice(1,1)// items deleted freelancer,problem solver,illustrator
//jobs.slice(0,3);// works similarly as splice does.
// jobs.concat(['gatekeeper','web developer']);// adds to an array
// array method
// console.log(jobs.length);

//Practice array with multiple methods


// let jobs = [' freelancer',' entrepreneur',' problem solver',' illustrator'];
// let newJob = jobs.concat([' gatekeeper',' web developer']);

// document.getElementById('data').innerHTML = newJob.concat([' gatekeeper',' web developer']);

// console.log(newJob);

// let jobs = [' freelancer',' entrepreneur',' problem solver',' illustrator'];
// let newJob = jobs.concat([' gatekeeper',' web developer']);
// document.getElementById('data').innerHTML = newJob.sort();
// document.getElementById('data').innerHTML = newJob.reverse();
// document.getElementById('data').innerHTML = (newJob.length);// Optional to check the length.
// console.log(newJob);










