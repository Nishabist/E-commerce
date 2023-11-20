const express = require('express')
const connection=require('./db/connection')
const app = express()
const port = 4000
const cors=require('cors')
const User=require('./models/user')
const bcrypt=require('bcrypt')
const saltRounds=10;
connection()
app.use(cors())
app.use(express.json())




app.post('/register',async(req,res)=>{
  
 try{
  //check if phone number doesnot exist already
  const userExists = await User.findOne({phonenumber: req.body.phonenumber })
  if(userExists){
    //console.log(userExists)
       res.status(409).json({msg :'Phone Number already taken!'})

  }else{
   //generate hash password
   const hashpassword=await bcrypt.hash(req.body.password,saltRounds)
   req.body.password=hashpassword
   //create new user with hash password
   const data=await User.create(req.body)
  if(data) res.json({msg :'User registered. Please login'})
 }
 }
 //to stop server crash
 catch(err){
  console.log(err)
 }
}
)

app.post('/login',async(req,res)=>{
//check if phone number exists
console.log(req.body)
const userDetail=await User.findOne({phonenumber:req.body.phonenumber})

if(!userDetail){
  res.status(401).json({msg:'Invalid User'})
}else{
  
  const isMatched=await bcrypt.compare(req.body.password,userDetail.password)
  if(isMatched){
    res.json({msg:'Login sucessfully'})
  }else{
    res.status(401).json({msg:'Password doesnot matched'})
  }
}
})
//process we follow while we do login
//check phone number
//
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})