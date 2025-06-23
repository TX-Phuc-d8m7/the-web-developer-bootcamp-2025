// Destructuring Array
const scores = [12, 21, 34, 32, 325, 435]

const highScore = scores[0];
const secondHighScore = scores[1]
// const [gold, silver, bronze] = scores;


const raceResults = ['Eliud Kipchoge', 'Feyisa Lelisa', 'Galen Rupp'];

const [gold, silver, bronze] = raceResults;
gold;
silver;
bronze;

const [fastest, ...everyoneElse] = raceResults
fastest;
everyoneElse;


// Destructuring Object
const user = {
    email: 'email@gmail.com',
    password: 'sldjflskjfsdf',
    firstName: 'Truong',
    lastName: 'Xuan Phuc',
    born: 2004,
    city: 'Da Nang'

}

const {email} = user;


