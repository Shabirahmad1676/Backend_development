const mongoose = require('mongoose')


//to connect connection with database and node js
const connection = mongoose.connect('mongodb://0.0.0.0/BACKENDDEVELOPMENT').then(()=>{
 console.log('Connected');
})


module.exports = connection