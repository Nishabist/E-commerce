const express = require('express')
var router = express.Router();

const{createCategory,getCategory,updateCategory,deleteCategory,editCategory}=require('../controller/categories')
const Category=require('../models/category')
router.use(express.json());

router.post('/categories',createCategory)

router.get('/categories',getCategory)

 
 router.put('/categories',updateCategory)

 router.delete('/categories',deleteCategory)

 router.put('/categories',editCategory)

module.exports=router