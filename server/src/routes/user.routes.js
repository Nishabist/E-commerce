const express = require('express')
const router = express.Router();
router.use(express.json());
const {registerUser,loginUser}=require('../controller/user')


router.post('/register',registerUser)
   
  router.post('/login',loginUser)
   //process we follow while we do login
   //check phone number
   //

   module.exports=router