'use client'

import React,{useEffect,useState} from 'react'

function page() {
    const[productDetail,setproductDetail]=useState([])
    const fetchProduct=async()=>{
     const res=await fetch(`http://localhost:4000/products/${params.id}`)
     const data=await res.json()
     setproductDetail(data.productList)  
   }
   
     useEffect(()=> {
      fetchProduct()
     },[])
  return (
    <div>
      I am product page
    </div>
  )
}

export default page
