// Ternary conditional operators

const active = true;

//tradicional
const msg1 = (active) ? 'Active': 'Inactive';
const msg2 = (!active) ? 'Active': 'Inactive';
//if we don't need an else
const msg3 = active && 'Active';
console.log(msg3)