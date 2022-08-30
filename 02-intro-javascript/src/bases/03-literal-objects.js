//literal objects
const person = {
     names: 'Tony',
     lastname: 'Stark',
     age: 45,
     address: {
        city: 'New York',
        zip: 33355,
        lat: 56545,
        lng: 45.255,
     }
}

// we create a new object that contains a property called person (which is another object)
// and so print the entire object person
console.log({person});
// better way to see the objects in console
console.table({person});

//Clone person to person2
const person2 = {...person}; //spread operator
person2.names = "Peter";
console.log(person2);