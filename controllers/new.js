const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();


//Routes

//get

router.get('/', (req, res)=>{
  res.send("test");
})


//post

router.post('/', (req, res)=>{

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
