// const http = require("http");

// const server = http.createServer((req, res) => {
//   if(req.url == "/about"){
//     res.end("Senga Chal De! About");
//   }
//   if(req.url == "/contact"){
//     res.end("Senga Chal De! Contact");
//   }
//   if(req.url == "/home"){
//     res.end("Senga Chal De! Home");
//   }
// });

// server.listen(3000);


const express = require("express")

const app = express();

app.get("/",(req,res)=>{
  res.send("Hi")
})


app.get("/about",(req,res)=>{
  
        res.send("Senga Chal De! About");
      
})

app.get("/contact",(req,res)=>{
        res.send("Senga Chal De! contact");
      
})

app.listen(3000)