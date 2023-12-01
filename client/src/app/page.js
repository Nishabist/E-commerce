'use client'

import React from 'react';
// import Image from 'next/image'
// import Link from 'next/link'
import Card from './Component/card/page';
import Navbar from './Component/Navbar/page';
import Carousel from './Component/Carousel/page';
import { useEffect,useState } from 'react';
import { Pagination } from 'antd';


const App=()=>{
  const[productList,setproductList]=useState([])
  const [count,setCount] = useState(0)
 const fetchProduct=async(page=1)=>{
  const res=await fetch('http://localhost:4000/products?page='+page)
  const data=await res.json()
  setproductList(data.productList) 
  setCount(data.totalCount) 
}

  useEffect(()=> {
   fetchProduct()
  },[])
  return(
    <>
<Navbar/>
<Carousel/>
<div className='flex'>
{productList.length>0 && productList.map((item,id)=>{
  
  return(
   
    <div>
       
      <Card item={item}/>
    </div>
  )
})}

</div>
<Pagination onChange={(page)=>fetchProduct(page)} defaultCurrent={1} total={50} />
</>)}

 
 export default App 
