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


// Express ====>>>>>>>>>>>>>>>>

const express = require("express");

const app = express();

app.set("view engine", "ejs");


//imports shcema and db
const userModel = require('./models/User')
const dbconnection = require('./config/db')

//these middleware is used for to read data from req.body
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//to connect publics file it includes all the file which needs for frontend
app.use(express.static("public"))

//there are some built-in middleware 
//we need to install npm i morgan

const morgan = require('morgan')
app.use(morgan('dev'))
// it shows like type of req, req no , and on which route , it works on all route what if we want to make it for specific routes


//this is routing concepts

// app.get("/", (req, res) => {
//   res.send("Hi it is Home Page");
// });

// app.get("/about", (req, res) => {
//   res.render("index");
// });

// app.get("/contact", (req, res) => {
//   res.render("contact");
// });

// MiddleWaers ==> just  like going to some specific routes but first pass through this function, it have three params like req, res, nest()
//><><><><><><><><><><><><><><><><><><><><><>>>>><><><<<<<<<>>>>>>>>><<<<<<><><>>>>>
//this is custom middleware
// app.use((req,res,next)=>{
//   // res.send("hi middleware")
//   console.log('hi middleware');
//   return next()
// })


app.get("/", (req, res) => {
  // res.render("form");
  console.log(req.method);
});

app.get("/about", (req, res) => {
  res.render("index");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});



// get method is used for server to frontend 
// it shows on url all the form data 
// app.get(("/form-data"),(req,res)=>{
//   console.log(req.query);
//   res.send("Received!")
// })


//post method is used for frontend say backend tak data ko lanay k leye 
app.post(("/form-data"),async (req,res)=>{
  const {username,email,password} =  req.body

  const userData = await userModel.create({
    username:username,
    email:email,
    password:password
  })
  res.send(userData)
})


app.get("/userData",(req,res)=>{
    userModel.find().then((users)=>{
      res.send(users)
    })
})


//built-in middleware
// app.get("/",(req,res,next)=>{
//     const a = 12;
//     const b = 20;
//     console.log(a+b);
//     next()
// } , (req, res) => {
//   res.render("middleware");
// });


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


app.listen(3000);