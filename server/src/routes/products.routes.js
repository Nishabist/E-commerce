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
    const productdetail=await Product.find()
     if(productdetail){
      res.json({productList:productdetail})
     }
   
  }
     )

   module.exports=router