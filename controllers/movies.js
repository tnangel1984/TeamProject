const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Movies = require('../models/movies.js');

//Routes

//get

router.get('/', (req, res)=>{
  Movies.find({}, (error, allMovies)=>{
      res.json(allMovies);
  });
});


//post

router.post('/', (req, res)=>{
  Movies.create(req.body, (error, newMovie)=>{
      console.log(req.body);
       res.json(newMovie);
  });
});

//put

router.put('/:id', (req, res)=>{
    Movies.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedMovie)=>{
        res.json(updatedMovie);
    });
});

//delete

router.delete('/:id', (req, res)=>{
    Movies.findByIdAndRemove(req.params.id,(error, foundMovie)=>{
        res.json(foundMovie);
    });
});


//index

router.get('/:id', (req, res)=>{
  Movies.findById(req.params.id, (error, foundMovie)=>{
      res.json(foundMovie);
  });
});


module.exports = router;
