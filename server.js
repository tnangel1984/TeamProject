const express = require('express');
const app = express();
const mongoose = require('mongoose');

//Middleware
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));

//Controllers
const moviesController = require('./controllers/movies.js')
app.use('/movies', moviesController);

//Connections
const mongoURI='mongodb://localhost:27017/MoviesDB';
mongoose.connect(mongoURI);
mongoose.connection.once('open', ()=>{
    console.log("Mongo is connected");
})

app.listen(3000, ()=>{
     console.log("Listening");
})
