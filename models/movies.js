const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const movieSchema = new Schema({
      madeBy:String,
      title:String,
      likes: {type: Number, default:0}
    },
    {timestamps:true}
);


const Movies = mongoose.model('Movie', movieSchema);
module.exports = Movies;
