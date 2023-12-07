'use client'

import React,{useEffect,useState} from 'react'

function page({params}) {
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
    
    <div>{JSON.stringify(productDetail)} Hello it is page</div>
    
    </>
  )
}

export default page
