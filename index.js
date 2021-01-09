const express = require('express');
const app = express();
const importPlayers = require('./players.json');
let port =process.env.port || 8000;

app.get('/', function (req, res) {
    res.send("Hello World");
    res.end();
})

app.get('/players', function (req, res) {
    res.send(importPlayers);
    res.end();
})

app.listen(port, () => {
    console.log('Project Host on Heroku on port 8000')
});