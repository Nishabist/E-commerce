'use client'

import React from 'react';
import { useSelector, UseSelector } from 'react-redux';
// import Image from 'next/image'
// import Link from 'next/link'
import Card from './Component/card/page';
import Navbar from './Component/Navbar/page';
//import Carousel from './Component/Carousel/page';
import { useEffect,useState } from 'react';
import { Pagination } from 'antd';


const App=()=>{
  const {age}=useSelector(state=>state.user)
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
{/* <Carousel/> */}
<div className='flex'>
  {age}
{productList.length>0 && productList.map((item,id)=>{
  
  return(
   
    <div>
       
      <Card item={item}/>
    </div>
  )
})}

</div>

<Pagination onChange={(page)=>fetchProduct(page)} defaultCurrent={1} total={count} pageSize={3}/>
</>)}

 
 export default App 
