const numbers = [ 9, 3, 2, 8];

Math.max(numbers); // NaN

Math.max(...numbers); // Same as Math.max(9,3,2,8)


// Spread in Array Literals

const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs] // Copy dữ liệu từ mảng gốc


// Spread in Object Literals

const feline = {legs: 4, family: 'Felidae'};
const canline = {family: 'Caninae', fury: true};

const dog = {...canline, isPet: true};


const spread_object = {...[2,4,6,8]}
console.log(spread_object)