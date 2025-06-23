const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.filter(n => {
    return n < 7;
})

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


const bestMoviesTitle = movies.filter(m => m.score > 9.0).map(m=> m.title);

