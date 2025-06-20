

const add = function (a, b) {
  return a + b;
}

function addF(x,y) {
    return x + y;
}

const addArrow = (a, b) => a + b;


const greet = (name) => {
    return `Hello, ${name}!`;
}

const greet2 = (name) => `Hello, ${name}!`;


// Implicit return
const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
}
const rollDie2 = () => (Math.floor(Math.random() * 6) + 1);