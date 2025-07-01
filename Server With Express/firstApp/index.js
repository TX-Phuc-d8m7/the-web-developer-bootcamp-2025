const express = require('express');
const app = express();
const port = 3000;

// app.use((req, res) => {
//     console.log('We got a request!');
//     res.send('<h1>This is first Express App</h1>');
// });

app.get('/r/:subreddit/:postID', (req, res) => {
    const {subreddit, postID} = req.params;
    res.send(`<h1>Welcome to the ${subreddit} subreddit!</h1><p>Viewing post ID: ${postID}</p>`);
});

app.get('/cats', (req, res) => {
    res.send('Meow! Meow! Meow!');
});
app.get('/dogs', (req, res) => {
    res.send('Woof! Woof!');
});
app.get('/', (req, res) => {
    res.send('<h1>This is first Express App</h1>');
});

app.get('/search', (req, res) => {
    const {q} = req.query;
    res.send(`You searched for: ${q}`);
});

app.get(/(.*)/, (req, res) => {
    res.send('This is a wildcard route. No specific route matched.');

});



// /cats => 'Meow! Meow!'
// /dogs => 'Woof! Woof!'
// '/'

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});