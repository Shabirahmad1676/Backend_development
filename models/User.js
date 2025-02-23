const mongoose = require('mongoose')

//this is schema like collection of user data which type of properties user should have
const userSchema = new mongoose.Schema({
  username:String,
  email:String,
  password:String,
})

//here we used this userSchema
const userModel = mongoose.model('user',userSchema)

//and finally exports
module.exports = userModel