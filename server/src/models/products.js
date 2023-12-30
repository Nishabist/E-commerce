const mongoose=require('mongoose')
const { Schema } = mongoose;

const products = new Schema({
    categoryName: String, 
    brandName: String,
 productName: String, // String is shorthand for {type: String}
  Description: String,
  Brand: String,
 price :String,
 image:String,
 Category:String,

  
});

const Product = mongoose.model('Product', products);
module.exports = Product