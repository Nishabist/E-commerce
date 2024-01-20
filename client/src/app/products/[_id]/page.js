'use client'

import React,{useEffect,useState} from 'react'
import styles from '../../../styles/page.module.css'
import  Footer from '../../footer/page'

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
 
       <div className={styles.imgdesign}>
        <img className={styles.image} style={{overflow:'hidden',objectFit:'fill',}} src={`http://localhost:4000/products-image?productId=${params._id}` }/>
        </div>

        <div className={styles.productdesign}>  
           <p className={styles.productname}> {productDetail.productName}</p>  
           <p>{productDetail.price}</p> 
           <button className={styles.botton}>Buy Now</button> <br/>
           <button className={styles.botton}>Add To Cart</button>
           
           </div>



       {/* {productDetail.image} */}
       </div>
       <Footer/>
      </div>
    
    </>
  )
}

export default page
