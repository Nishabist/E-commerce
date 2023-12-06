const User=require('../models/user')
const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken');
const saltRounds=10;

const registerUser=async(req,res)=>{
    try{
     //check if phone number doesnot exist already
     const userExists = await User.findOne({phonenumber: req.body.phonenumber })
     if(userExists){
      
          res.status(409).json({msg :'Phone Number already taken!'})
   
     }else{
      //generate hash password
      const hashpassword=await bcrypt.hash(req.body.password,saltRounds)
      req.body.password=hashpassword
      //create new user with hash password
      const data=await User.create(req.body)
     if(data) res.json({msg :'User registered. Please login'})
   
    }
    }
    //to stop server crash
    catch(err){
     console.log(err)
    }
   }
   

   const loginUser=async(req,res)=>{
    //check if phone number exists
    // console.log(req.body)
    const userDetail=await User.findOne({phonenumber:req.body.phonenumber}).lean()
    
    if(!userDetail){
      res.status(401).json({msg:'Invalid User'})
    }else{
      
      const isMatched=await bcrypt.compare(req.body.password,userDetail.password)
      if(isMatched){
       const{password, ...userInfo}=userDetail;
 
       //it generate token for the user
       const token = jwt.sign({ phonenumber:req.body.phonenumber, id:userDetail.password }, process.env.SECRET_KEY);
       //the content inside curly bracket is a paylod
        res.json({msg:'Login sucessfully',token,userDetail:userInfo})
      }else{
        res.status(401).json({msg:'Password doesnot matched'})
      }
    }
    }


    module.exports={registerUser,loginUser}