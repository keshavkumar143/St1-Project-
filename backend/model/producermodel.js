const mongoose = require('mongoose')
const producer =  new mongoose.Schema({
    name : String , 
    description : String , 
    price : Number , 
    category : String
})
module.exprorts = mongoose.model('Product_user' , producer)