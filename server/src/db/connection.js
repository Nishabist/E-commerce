const mongoose=require('mongoose')
const connection=async()=>{
    try{
     const conn=await   mongoose.connect('mongodb://127.0.0.1:27017/sahayogidb');
    
if(conn){
    console.log("db connected succesfully")
}}
catch(err){
    console.log(err)
   
}
}
module.exports=connection