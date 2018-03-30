const express = require('express');
const app = express();
const mongoose = require('mongoose');


//Controllers


//Middleware
   app.use(express.json());
   app.use(express.static('public'));

//test Route
app.get('/', (req, res)=>{
     res.send("Hello world");
})




//Connections
const mongoURI='mongodb://localhost:27017/NewDB';
mongoose.connect(mongoURI);
mongoose.connection.once('open', ()=>{
    console.log("Mongo is connected");
})

app.listen(3000, ()=>{
     console.log("Listening");
})
