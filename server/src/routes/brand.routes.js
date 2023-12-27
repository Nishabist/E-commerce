const express = require('express')
var router = express.Router();
const Brand=require('../models/brand')
router.use(express.json());

const{createBrand,getBrand,updateBrand,deleteBrand,editBrand}=require('../controller/brand')

router.post('/brand',createBrand)

router.get('/brand',getBrand)

 
 router.put('/brand',updateBrand)

 router.delete('/brand',deleteBrand)

 router.put('/brand',editBrand)

module.exports=router