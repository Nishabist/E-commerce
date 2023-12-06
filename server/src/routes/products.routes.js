const express = require('express')
var router = express.Router();

const Product=require('../models/products')
router.use(express.json());

router.post('/products',async(req,res)=>{
  const productdetail=await Product.create(req.body)
  if(productdetail){
   res.json({msg:`${req.body.productName} has been created`})
  }
 
}
   )

   router.get('/products',async(req,res)=>{
    const totalCount=await Product.find().count()
    const skipPage=(req.query.page -1)*3
    const productdetail=await Product.find().limit(3).skip(skipPage)
     if(productdetail){
      res.json({productList:productdetail,totalCount})
     }
  }
     )

     router.get('/products/:_id',async(req,res)=>{
      const data=await Product.findById(req.params.id)
      if(data){
        res.json({productList:data})
      }
     })

   module.exports=router