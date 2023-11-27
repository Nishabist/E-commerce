'use client'

import React from 'react';
// import Image from 'next/image'
// import Link from 'next/link'
import Card from './Component/card/page';
import Navbar from './Component/Navbar/page'
import { useEffect,useState } from 'react';


const App=()=>{
  const[productList,setproductList]=useState([])
 const fetchProduct=async()=>{
  const res=await fetch('http://localhost:4000/products')
  const data=await res.json()
  setproductList(data.productList)  
}

  useEffect(()=> {
   fetchProduct()
  },[])
  return(
    <>
<Navbar/>
  {/* <ul className='top'>
    <li> <Image
      src="/ecommerce.jpg"
      width={40}
      height={40}
      alt="Picture of the author"
    /></li>
    <li><Link href="../login">Login</Link>    </li>
    <li><Link href="../register">Register</Link> </li>
  </ul> */}
{/* {JSON.stringify(productList)} */}
{/* {productList.length>0 && productList.map((item,id)=>{
  return(
    
      {/* {item.productName} */}
     {/* <div>
     <Card item={item}/>
     
    
 
    </div>)
// })} */}
<div className='flex'>
{productList.length>0 && productList.map((item,id)=>{
  
  return(
   
    <div>
       
      <Card item={item}/>
    </div>
  )
})}
</div>
</>)}
 
 export default App 
