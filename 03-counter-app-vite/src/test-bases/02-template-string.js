const names = "Gis";
const lastname = "Torres";

//old way
const fullname1 = names + ' ' + lastname;
//better use of template  string
const fullname2 = `${names} ${lastname}`;

console.log(fullname2);

function getHello(names){
    return "hello "+names; //old way, doesn't matters to use it here
}

//through template string we get the getHello(names) function 
console.log(`This is a text: ${getHello(names)}`);