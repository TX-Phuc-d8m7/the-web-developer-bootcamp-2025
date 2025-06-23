prices = [10, 20, 30, 40, 50];

const totalPrice = prices.reduce((total, price) => total + price);

const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
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

const bestMovie = movies.reduce((bestMovie, currentMovie) => {
    if (currentMovie.score > bestMovie.score) {
        return currentMovie;
    }
    return bestMovie;
})

const evens = [2, 4, 6, 8, 10];
evens.reduce((sum, num) => sum + num, 100); 