const express = require('express')
var router = express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/image' })

const Product=require('../models/products')
router.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/uploads/image/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Math.ceil(Math.random()*4000)
    cb(null,  uniqueSuffix+file.originalname )
  }
})


router.post('/products', upload.single('image'), async(req,res)=>{
  // console.log(req)
  
  
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

   module.exports=router