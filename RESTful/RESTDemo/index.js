const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

const comments = [
    {
        username: 'Todd',
        comment: 'LOL that is so funny'
    },

    {
        username: 'XXXXXX',
        comment: 'I like to go birdwatching with my dog'
    }, 

    {
        username: 'AAAAAA',
        comment: 'I wanna go home'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', {comments});
}); 

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
});

app.post('/comments', (req, res) => {
    const {username, comment} = req.body
    comments.push({username, comment});
    res.send("It works")
});

app.get('/tacos', (req, res) => {
    const { meat, qty } = req.query; 
    res.send(`You ordered ${qty} ${meat} tacos!`);
});

app.post('/tacos', (req, res) => {
    console.log(req.body);
    res.send(`You posted an order for ${req.body.qty} ${req.body.meat} tacos!`);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});