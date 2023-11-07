const mongoose=require('mongoose')
const { Schema } = mongoose;

const users = new Schema({
 firstname: String, // String is shorthand for {type: String}
  lastname: String,
  email: String,
 phonenumber:String,
 password:String,

  
});

const User = mongoose.model('User', users);
module.exports = User