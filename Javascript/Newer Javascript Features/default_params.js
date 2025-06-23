// Default Params The Old Way

function multiply(a,b) {
    b = typeof b !== 'undefined' ? b : 1;
    return a * b;
}

multiply(7);
multiply(7,3);

// Default Params The NEW Way

function multiply_new(a, b = 1) {
    return a * b;
}

multiply_new(4);
multiply_new(4, 5);


function greet(person, msg = "Hi there", react = "!") {
    console.log(`${msg}, ${person} ${react}`)
}


const movies = [
    {
        title: "Inception",
        score: 8.8,
        year: 2010
    },
    {
        title: "Interstellar",
        score: 8.6,
        year: 2014
    },
    {
        title: "The Dark Knight",
        score: 9.0,
        year: 2008
    },
    {
        title: "The Matrix",
        score: 8.7,
        year: 1999
    },
    {
        title: "Pulp Fiction",
        score: 8.9,
        year: 1994
    },
    {
        title: "The Shawshank Redemption",
        score: 9.3,
        year: 1994
    },
    {
        title: "Forrest Gump",
        score: 8.8,
        year: 1994
    },
    {
        title: "The Godfather",
        score: 9.2,
        year: 1972
    },
    {
        title: "The Godfather: Part II",        
        score: 9.0,
        year: 1974
    },
    {
        title: "Schindler's List",
        score: 8.9,
        year: 1993
    }           
]


// movies.filter((movies) => movies.score >= 9.0)

// Using destructuring params
movies.filter(({score}) => score >= 9.0)


movies.map(movie => {
    return `${movie.title} is rated ${movies.score}`
})


movies.map(({title, score}) => {
    return `${title} is rated ${score}`
})
