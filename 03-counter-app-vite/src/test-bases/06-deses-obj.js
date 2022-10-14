
//Destructuring of objects
const person = {
    name: 'Tony',
    age: 45,
    password: 'Stark123'
};

// const { edad, clave, nombre, } = persona;
 
// console.log( nombre );
// console.log( edad );
// console.log( clave );

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

