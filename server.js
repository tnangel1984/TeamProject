const express = require('express');
const app = express();
const mongoose = require('mongoose');


//Controllers
   const moviesController = require('./controllers/movies.js')

//Middleware
   app.use(express.json());
   app.use(express.static('public'));
   app.use('/movies',moviesController);
   app.use(express.urlencoded({extended:false}))

//test Route
app.get('/', (req, res)=>{
     res.send("Hello world");
})




//Connections
const mongoURI='mongodb://localhost:27017/MoviesDB';
mongoose.connect(mongoURI);
mongoose.connection.once('open', ()=>{
    console.log("Mongo is connected");
})

app.listen(3000, ()=>{
     console.log("Listening");
})
