const mongoose=require('mongoose')
const connection=async()=>{
    try{
     const conn=await   mongoose.connect('mongodb://0.0.0.0:27017/sahayogidb');
//      const uri = "mongodb://0.0.0.0:27017/";
// const client = new MongoClient(uri);
// const url = "mongodb://0.0.0.0:27017";
    
if(conn){
    console.log("db connected succesfully")
}}
catch(err){
    console.log(err)
   
}
 }
module.exports=connection