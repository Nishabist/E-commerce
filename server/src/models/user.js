const mongoose=require('mongoose')
const { Schema } = mongoose;

const users = new Schema({
 firstname: String, // String is shorthand for {type: String}
  lastname: String,
  email: String,
  address:String,
 phonenumber:String,
 password:String,
 category:{
    type:String,
    enum:['admin','user'],
    default:'user'
 }

  
});

const User = mongoose.model('User', users);
module.exports = User