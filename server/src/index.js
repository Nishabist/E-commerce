const express = require('express')
const connection=require('./db/connection')
const app = express()
const userrouter=require('./routes/user.routes')
const productRouter=require('./routes/products.routes')
const port = 4000
const cors=require('cors')

connection()
app.use(cors())
app.use(express.json())
app.use(userrouter)
app.use(productRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})