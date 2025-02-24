//what is Cookie 
//when we using some webs , and we want to like a photo so that website will say l=who are you log in hojawo
// so again if we want to like another photo again we will render to log in so from that museebat Cookie session comes into picture , so when we again log in so server gives us a string so whenever we like some photos it see that string and maintain your data and this is how we are using websites

//Session
//Session is that process where the server stores information about the user in memory or a database. 
//When a user logs in, the server creates a session and assigns a unique session ID to the user. 
//This session ID is then sent to the user's browser as a cookie. 
//On subsequent requests, the browser sends the session ID back to the server, allowing the server to identify the user and retrieve their session data.


const express = require('express')
const app = express()


//when we fill a form where we enter ur name , email etc.... so it convert into blob=> which is unreaded data it contains IP adress , location, etc...

app.use(express.json())
app.use(express.urlencoded({extended:true}))
