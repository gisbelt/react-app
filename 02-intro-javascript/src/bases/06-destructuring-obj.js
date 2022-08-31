//Destructuring of objects
const person = {
    name: 'Tony',
    age: 45,
    password: 'Stark123'
};

/**************FIRST WAY************************/
// If we need print any items of the object 
// Basically extract from objects only we need
// Extract what is inside the keys from the object person
const {name, password:pass, age} = person; //No matter the order
console.log(name);
console.log(pass);
console.log(age);

/**************SECOND WAY************************/
// We also can print or return the items of object person through a function 
// We put as parameter the items of the object inside keys and then print
const returnPerson = ({name, age, password}) =>{
    console.log(name, age, password)
}
returnPerson(person);

//We also can assign values by default
const returnPerson2 = ({name, age, password, range = "Captain"}) =>{
    console.log(name, age, password, range)
}
returnPerson2(person);

/**************PRACTICE************************/
//We return other items with values of object person
const userContext = ({name, age, password, range = "Captain"}) =>{
    return {
        passName: password,
        year: age
    }
}
//First way: Destructuring of object userContext
const {passName,year} = userContext (person);
console.log(passName, year);
//Second way: Destructuring of object userContext
const avenger =  ({passName,year}) =>{
    console.log(passName, year);
}
avenger(userContext(person));


/**************PRACTICE 2************************/
//Extract object from object
const userContext2 = ({name, age, password, range = "Captain"}) =>{
    return {
        passName: password,
        year: age,
        latlng: {
            lat: 14.1232,
            lng: -21.455
        }
    }
}
// latlng:{lat,lng} extract lat and lng from latlng, print lat and lng
const avenger2 =  ({passName,year, latlng:{lat,lng}}) =>{
    console.log(passName, year, lat, lng);
}
avenger2(userContext2(person));

//Another way
const avenger3 =  ({passName,year,latlng}) =>{
    console.log(passName, year);
    // Destructuring object latlng from userContext2 
    const printlat = ({lat, lng}) => {
        console.log(lat, lng);
    }
    printlat(latlng);
}
avenger3(userContext2(person));