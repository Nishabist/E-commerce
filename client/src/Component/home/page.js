'use client'
import React from 'react'

// import Image from 'next/image'
// import Link from 'next/link'
import Card from '../card/page'
import Navbar from '../Navbar/page';
import Footer from '../../app/footer/page'
// import Carousel from '../Component/Carousel/page';
import { useEffect,useState } from 'react';
import { Pagination } from 'antd';
function home() {
         // const {age}=useSelector(state=>state.user)
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
  return (
    <div>
 
  
   
<Navbar/>

{/* <Carousel/> */}
{/* <Carousel/> */}
<div className='flex'>
  
{productList.length>0 && productList.map((item,id)=>{
  
  return(
   
    <div>
       
      <Card item={item}/>
    </div>
  )
})}

</div>
<br/>

<Pagination onChange={(page)=>fetchProduct(page)} defaultCurrent={1} total={count} pageSize={3}/>
    
<Footer/> 
</div>)


}

export default home
