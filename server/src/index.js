const express = require('express')
const connection=require('./db/connection')
const app = express()
const port = 4000
const cors=require('cors')
const User=require('./models/user')

connection()
app.use(cors())
app.use(express.json())




app.post('/register',async(req,res)=>{
  const userExists = await User.findOne({phoneNumber: req.body.phoneNumber})
   if(userExists){
        res.status(409).json({msg :'Phone Number already exist!'})
   }else{
    const data=  await User.create(req.body)
   if(data) res.json({msg :'User registered. Please login'})
  }
 
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})