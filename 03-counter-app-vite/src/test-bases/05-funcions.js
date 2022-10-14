
// Funciones en JS
// const saludar = function( nombre ) {
//     return `Hola, ${ nombre }`;
// }

const hello2 = (names) =>{
    return `Hello, ${names}`;
}

const hello3 = (names) => `Hello, ${names}`;
const hello4 = () => `Hello World`;

// console.log( saludar('Goku') )

console.log( hello2('Vegeta') );
console.log( hello3('Goku') );
console.log( hello4() );


const getUser = () => ({
        uid: 'ABC123',
        username: 'Baby_1501'
});


const user = getUser();
console.log(user);

//Practice
const getUserActive = (names) => ({
    uid: 'ABC567',
    username: names
});

const userActive = getUserActive('Jake');
console.log(userActive);


