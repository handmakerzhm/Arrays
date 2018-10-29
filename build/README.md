# Arrays: Data Structures

Arrays are used to store multiple values that can be accessed and manipulated into new data or for output purposes. 

Data type are the values that are store inside a single variable. This include strings, numbers ,booleans, arrays, objects and functions.

> It is advise to use the same data types in your arrays instead of using various data types. This avoid confusion.

```

 let strings = ['wane','anton','smith'];

 console.log(strings);
 console.log(strings[0]);
----
 let numbers = [5,6,7,8,9];

 console.log(numbers[2]);
----
 let booleans = [true,false,true];

 console.log(booleans[1]);
----
 let array = [
     ['plums and mangos','cherries and grapes','dates and nuts','tea and figs'],
     ['chicken with beans','fish with potatoes','stromboli with crepes']
 ];

console.log(`For dinner I'm having ${array[1][2]} and some ${array[0][1]}`);

----
/*notice: the first array block accesses the specific array, and the second block access array index value*/

 let functionExample = [ function blueberry () {}
 ];

 console.log(functionExample);
----
 
 let objectExample = [
 {
     pencil:'lead holder',
     colorpencil:'prismacolor',
     staedtler:'eraser'
 },
 {
     music:'brass, strings',
     paper:'canson',
     charcoal:'generals'
 }
 ];

//
console.log(objectExample[1].music);

console.log(`Tools for drawing includes ${objectExample[0].pencil}, ${objectExample[0].staedtler} and some ${objectExample[1].paper} art paper.`);

----
```


---

## Example: 1

> Basic array

_Selecting the whole key value._ 

```
let webDevelopment = ['HTML','CSS','Javascript','Node.js','GIT','Mongodb'];

console.log(webDevelopment);

//output /*HTML,CSS,Javascript,Node.js,GIT,Mongodb */


```
---
## Example: 2

_Selecting the value inside the array._ 


> note: The array index value starts at 0, thus meaning the second string is number 1 in the array.
```
let webDevelopment = ['HTML','CSS','Javascript','Node.js','GIT','Mongodb'];

console.log(webDevelopment[0]);
//output// HTML
```
---
## Example: 3

_Selecting multiple values while using template literals._

>Using back tics `` 
```
let webDevelopment = ['HTML','CSS','Javascript','Node.js','GIT','Mongodb'];

 console.log(`My favorite parts of webDevelopment is ${webDevelopment[2]} and ${webDevelopment[3]}`);

//output//My favorite part of webDevelopment is Javascript and Node.js
```

---
## Example: 4

_Outputting inside the HTML document._

```
let webDevelopment = ['HTML','CSS','Javascript','Node.js','GIT','Mongodb'];

document.getElementById('data').innerHTML = (`My favorite parts of webDevelopment is ${webDevelopment[2]} and ${webDevelopment[3]}`);

```

---
## Example: 5

_Changing data inside the array._
```

You can use method properties to change elements inside the array.

let jobs = ['freelancer','entrepreneur','problem solver','illustrator'];

//Array methods
//jobs.pop('illustrator');
//jobs.push('author');
//jobs.sort();
//jobs.reverse();
//jobs.shift();
//jobs.unshift();

console.log(jobs);

//array method below
//console.log(jobs.length);


```

# To be continued..