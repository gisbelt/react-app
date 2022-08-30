//Arrays
const array = [1,2,3,4];

// When we want to insert something into an array we will use the spread operator ...
let array2 = [...array, 5];

// whenever an array is created, the array has map and other functions implicit in its prototype
// map is a función 
// map method creates a new array with the results of the call 
// We multiply each value of array2 by 2
const array3 =  array2.map(function(number){
     return number * 2;
});

console.log(array);
console.log(array2);
console.log(array3);