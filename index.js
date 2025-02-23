const express = require('express')
const app = express()

app.get('/',(req,res)=>{

  throw new Error('Something went wrong!');
  
  // console.log(req.method);
  // console.log(req.url);
  // console.log(req.headers);
  // console.log(req.baseUrl);
})


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


//centralized error handling
// function errorHandling(err,req,res,next){
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// }

// app.use(errorHandling)

app.listen(3000)