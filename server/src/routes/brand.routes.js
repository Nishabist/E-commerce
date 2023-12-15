const express = require('express')
var router = express.Router();
const Brand=require('../models/brand')
router.use(express.json());



router.post('/brand',async(req,res)=>{
    const data =await Brand.create(req.body)
    if(data){
        res.json({msg:"brand created sucessfully"})
    }
    })

router.get('/brand',async(req,res)=>{
    const data=await Brand.find()
    if(data){
        res.json({brandList:data})

    }
})

module.exports=router