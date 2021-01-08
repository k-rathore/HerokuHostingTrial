const express=require('express');
const app=express();
const importPlayers=require('./players.json')
let port=8000;

app.get("/",(req,res)=>{
    res.send("Hello World");
    res.end();
})

app.get("/players",(req,res)=>{
res.send(importPlayers);
})
app.listen(port,()=>{
    console.log('Project Host on Heroku on port 8000');
})