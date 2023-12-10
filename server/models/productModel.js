const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
let productSchema = new mongoose.Schema({
     title:{
          type:String,
          required:true,
     },
     slug:{
          type:String,
          required:true,
     },
     description:{
          type:String,
          required:true,
     },
     price:{
          type:Number,
          required:true,
     },
     images:{
          type:[String],
          required:true,
     },
     author:{
          type:String,
          required:true,
     },
     productType:{
          type:String,
          required:true,
     },
     quantity:{
          type:Number,
          default: 1,
     },
});

//Export the model
module.exports = mongoose.model('Product', productSchema);