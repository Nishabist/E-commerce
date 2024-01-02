const express = require('express')
var router = express.Router();
const Product=require('../models/products')
router.use(express.json());
const multer  = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/image')
  },
  filename: function (req, file, cb) {
   
    const uniqueSuffix = Math.ceil(Math.random()*4000)
    cb(null,  uniqueSuffix+file.originalname )
  }
})


const upload = multer({ storage: storage })
router.post('/products', upload.single('image'), async(req,res)=>{
    req.body.image=req.file.filename
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
      const data=await Product.findById(req.params._id)
      if(data){
        res.json({productList:data})
      }
     })

router.get('/products', async(req,res)=>{
  const productImage=await Product.findById(req.query.productId)
  console.log(productImage)
})

   module.exports=router