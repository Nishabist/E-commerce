const express = require('express')
const connection=require('./db/connection')
const app = express()
const port = 4000
const cors=require('cors')
const User=require('./models/user')
User()
connection()
app.use(cors())
app.use(express.json())
app.post('/register',async(req,res)=>{
 const data=await User.create(req.body)
 if(data)res.json({msg:'user registered'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})