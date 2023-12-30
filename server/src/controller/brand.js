const Brand=require('../models/brand')

const createBrand=async(req,res)=>{
    const data= await Brand.create(req.body)
    if(data){
      res.json({msg: "brand created successfully"})
    }
   }

  const getBrand=async(req,res)=>{
    const data= await Brand.find()
    if(data){
      res.json({brandList: data})
    }
   }

   const updateBrand=async(req,res)=>{
    const id = req.body._id;
    const data= await Brand.findByIdAndUpdate(id,req.body);
    if(data){
      res.json({msg: "brand updated successfully"})
    }else{
      res.json({msg:'couldnot update brand'});
    }
   }

const deleteBrand=async(req,res)=>{
    console.log(req.body)
    const data= await Brand.findByIdAndDelete(req.body.id)
  
    if(data){
      res.json({msg: "brand deleted successfully"})
    }
   }
  
const editBrand=async(req,res)=>{
    const data = await Brand.findByIdAndUpdate(req.params.id,req.body);
    console.log(data);
    if(data){
      res.json({msg:'successfully updated profile details',brandList:data})
    }else{
      res.json({msg:'couldnot update profile details'});
    }
   }

   module.exports={createBrand,getBrand,updateBrand,deleteBrand,editBrand}