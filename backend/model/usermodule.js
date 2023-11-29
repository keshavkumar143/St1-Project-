const mongoose = require('mongoose')

const Review = new mongoose.Schema({
    content :String,
     rating: Number,
     author : String , 
    createdAt : String    
})

module.exports = mongoose.model('Review_Data' , Review)