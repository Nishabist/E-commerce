const mongoose=require('mongoose')
const { Schema } = mongoose;

const brands = new Schema({
    brandName: String, // String is shorthand for {type: String}
 

  
});

const Brand = mongoose.model('Brand', brands);
module.exports = Brand