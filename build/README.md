# Arrays

Arrays are used to store multiple values that can be accessed and manipulated into new data or for output purposes.

Data type are the values that are store inside a single variable. This include strings, numbers ,booleans, arrays, and objects.


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