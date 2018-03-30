const express = require('express');
const app = express();
const mongoose = require('mongoose');


//Controllers
   const newController = require('./controllers/new.js')

//Middleware
   app.use(express.json());
   app.use(express.static('public'));
   app.use('/new',newController);

   
// //test Route
// app.get('/', (req, res)=>{
//      res.send("Hello world");
// })




//Connections
const mongoURI='mongodb://localhost:27017/NewDB';
mongoose.connect(mongoURI);
mongoose.connection.once('open', ()=>{
    console.log("Mongo is connected");
})

app.listen(3000, ()=>{
     console.log("Listening");
})
