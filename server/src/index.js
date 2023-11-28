const express = require('express')
const connection=require('./db/connection')
const app = express()
require('dotenv').config()
const userrouter=require('./routes/user.routes')
const productRouter=require('./routes/products.routes')
console.log(process.env.SECRET_KEY)
const port = process.env.PORT
const cors=require('cors')

connection()
app.use(cors())
app.use(express.json())
app.use(userrouter)
app.use(productRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})