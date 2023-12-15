const express = require('express')
var router = express.Router();
const Category=require('../models/category')
router.use(express.json());



router.post('/category',async(req,res)=>{
    const data =await Category.create(req.body)
    if(data){
        res.json({msg:"Category created sucessfully"})
    }
    })

router.get('/category',async(req,res)=>{
    const data=await Category.find()
    if(data){
        res.json({categoryList:data})

    }
})

module.exports=router