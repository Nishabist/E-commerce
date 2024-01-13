'use client'

import React,{useEffect,useState} from 'react'
import styles from '../../../styles/page.module.css'

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
      <div className={styles.design}>
 
       <div>
        <img className={styles.image} style={{overflow:'hidden',objectFit:'fill',}} src={`http://localhost:4000/products-image?productId=${params._id}` }/>
        </div>

        <div>  
           <p> {productDetail.productName}</p>  
           <p>{productDetail.price}</p> 
           </div>



       {/* {productDetail.image} */}
       </div>
      </div>
    
    </>
  )
}

export default page
