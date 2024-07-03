//idk
import express from "express";
import {Database} from "bun:sqlite";
const db = new Database("SQL.db");
// const express = require("express");
// const server = Bun.serve({
//     port: 25565,
//     fetch(request) {
//       return Bun.file(test.html).text();
//     },
//   });
  
//   console.log(`Listening on localhost:${server.port}`);
//idk
const app = express();
const port = 25565;
//idk
app.use("static", express.static("static"));

//when pass in str, parse the query
//idrk
app.set('query parser', function(str){
    return str;
});

//url stuff
app.get("/", async (req,  res)=>{
    res.send(await Bun.file("test.html").text());
});

app.get("/test1", async (req, res)=>{
    
})

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
  });