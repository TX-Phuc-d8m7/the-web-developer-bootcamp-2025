const express = require('express');
const app = express();
const port = 3000;

app.use((req, res) => {
    console.log('We got a request!');
    res.send('<h1>This is first Express App</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});