'use client'

import React,{useEffect,useState} from 'react'

function page({params,props}) {
    const[productDetail,setproductDetail]=useState({})
    const fetchProduct=async()=>{
     const res=await fetch(`http://localhost:4000/products/${params._id}`)
     const data=await res.json()
     setproductDetail(data.productList)  
   }
   
     useEffect(()=> {
      fetchProduct()
     },[])
  return (
    <>
    {/* {JSON.stringify(productDetail)} */}
    <div>
      
       {productDetail.productName}
       <div>
        <img style={{overflow:'hidden',objectFit:'fill',}} src={`http://localhost:4000/products-image?productId=${params._id}` }/>
        </div> 
       {/* {productDetail.image} */}
      
      </div>
    
    </>
  )
}

export default page
