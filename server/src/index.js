const express = require('express')
const connection=require('./db/connection')
const app = express()
require('dotenv').config()
const userrouter=require('./routes/user.routes')
const productRouter=require('./routes/products.routes')
const brandRouter=require('./routes/brand.routes')
const categoryRouter=require('./routes/category.routes')
console.log(process.env.SECRET_KEY)
const port = 4000;
const cors=require('cors')

connection()
app.use(cors())
app.use(express.json())
app.use(userrouter)
app.use(productRouter)
app.use(brandRouter)
app.use(categoryRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})