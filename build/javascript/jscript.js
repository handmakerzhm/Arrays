// alert('This is Javascript {;-)');

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
/*toString separates the strings into commas and space */

// console.log(jobs.toString());
/*join combined the array with add data.
Note it's space sensitive */
// console.log(jobs.join(' wane '));

/*Combining arrays with concat. Create a new array by combining the old array with the new array. Syntax:
 jobs.concat(); */

// let jobs = [' freelancer',' entrepreneur',' problem solver',' illustrator'];

// let skills = ['sewing','adobe photoshop','adobe illustrator'];

// let combined = jobs.concat(skills);

// console.log(combined);

//Combining multiple arrays
// let jobs = [' Freelancer',' entrepreneur',' problem solver',' illustrator'];

// let skills = [' sewing ',' adobe photoshop ',' adobe illustrator '];

// let interests = [' languages ',' music ',' exercising '];

// let combined = jobs.concat(skills,interests);

// document.getElementById('data').innerHTML = (`A brief description. ${combined}`);

// console.log(combined);

//Combining an array with values

// let skills = ['sewing','adobe photoshop','adobe illustrator'];

// let interests = skills.concat(['languages','music','exercising']);

// document.getElementById('data').innerHTML = interests;


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





//Array iterations

// let myData = [35,46,17,8,49,88,73];
// let mySet = new Set(myData);

//Add string
// mySet.add("opossum");
//Add numbers in a new array
// mySet.add([25,35,45,55]);
// multiple key values in one object
// mySet.add({animal:"opossum",name:"A-possum",age:3});
// mySet.add({animal_2:"skunk",name:"smelly","Likes berries": true});
// mySet.add("opossum");
//delete value
// mySet.delete(73);
//Clear the array
// mySet.clear();
// mySet.add(73+35);
// mySet.add(33);

// console.log();

/*loop through values: old version of loop*/
// mySet.forEach(function(value){
    
//     console.log(value);
// });

//Map method
// let myMap = new Map ([['more content','and a string'],['more values','some more values']]);

// console.log(myMap);

//add to map method by adding data value
// let myMap = new Map ([['more content','and a string'],['more values','some more values']]);
// myMap.set('added string','more added strings');
// console.log(myMap);

//delete method that deletes by the KEY:
// let myMap = new Map ([['a1','more content','and a string'],['b2','more values','some more values']]);
// myMap.delete('a1');
// // myMap.delete('b2');
// console.log(myMap); //insert dot size behind myMap to see the map size










