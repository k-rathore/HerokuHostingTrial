const express = require('express');
const app = express();
const importPlayers = require('./players.json');
let port = process.env.PORT || 8000;

app.get('/', function (req, res) {
    res.send("Hello World");
   
})

app.get('/players', function (req, res) {
    res.send(importPlayers);
  
})

app.listen(port, () => {
    console.log(port)
    console.log('Project Host on Heroku on port 8000')
});