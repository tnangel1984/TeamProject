const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Movies = require('../models/movies.js');

//Routes

//get

router.get('/', (req, res)=>{
  Movies.find({}, (error, allMovies)=>{
      console.log('test');
  })
})


//post

router.post('/', (req, res)=>{
  Movies.create(req.body, (error, newMovie)=>{
      console.log(req.qbody);
       res.json(newMovie);
  })
})

//put

router.put('/:id', (req, res)=>{

})

//delete

router.delete('/:id', (req, res)=>{

})


//index

router.get('/:id', (req, res)=>{

})


module.exports = router;
