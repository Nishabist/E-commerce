'use client'

import React ,{useState,useEffect} from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image'
import {  message } from 'antd';
import styles from '../../../styles/product.module.css'

const SignupSchema = Yup.object().shape({
  producCateogry: Yup.string(),
  productBrand: Yup.string(),
  productName: Yup.string().required('Required'),
  Description:Yup.string(),  
 
  price:Yup.string(),
  
 
});

export const index = () => {
  const[file,setfile]=useState(null)
  const [messageApi, contextHolder] = message.useMessage();
  const [categoryList, setCategoryList] = useState({})
  const [brandList, setBrandList] = useState({})

  const productHandle = async(values) => {
    var formData=new FormData();
    formData.append('image',file)

    Object.entries(values).map((item,id)=>{
      formData.append(item[0],item[1])
    })

    const res = await fetch('http://localhost:4000/products', {
        method:'POST', 
        
        body: formData
      })
      const data = await res.json()
        messageApi.open({
          type: res.status == 200 ? 'success': 'error',
          content: data.msg,
        });
      console.log(res)
    } 
  const uploadImage=(e)=>{
    setfile(e.target.files[0])
  }
    const categoryFetch = async()=> {
    const res = await fetch(`http://localhost:4000/categories`)
    const data = await res.json()
    setCategoryList(data.categoryList) 
  }

  const brandFetch = async()=> {
        const res = await fetch(`http://localhost:4000/brand`)
        const data = await res.json()
        setBrandList(data.brandList) 
      }

      useEffect(()=>{
            categoryFetch(),
            brandFetch()
          },[])

  return(
  <div className={styles.product}>

<Image
      src="/watch.jpg"
      width={500}
      height={300}
      alt="Picture of the author"
    />

    <h1 className={styles.producthead}>Enter Product Information</h1>
    
    
    <Formik
      initialValues={{
        categoryName: categoryList?.[0]?.categoryName,
        brandName: brandList?.[0]?.brandName,
        productName: '',
        Description:'',
       
        price:'',
        
    
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        productHandle(values)
      }}
    >
      {({ errors, touched }) => (
        <Form >
         {contextHolder}
         <p> Category:</p>
        <Field as='select'   name='categoryName' >
            {categoryList.length>0 && categoryList.map((item)=>{
              return   <option value={item.categoryName}>{item.categoryName}</option>
            })}
            </Field>
            <br/>
             <br/><p> Brand:</p>
          <Field as='select'   name='barndName' >
            {brandList.length>0 && brandList.map((item)=>{
              return   <option value={item.brandName}>{item.brandName}</option>
            })}
            </Field>
            <br/>
             <br/>
             Product Name:
             <br/>
          <Field name="productName" type="text" placeholder="Enter your  productName" />
          {errors.productName && touched.productName ? <div>{errors.productNamer}</div> : null}
          <br />
          <br />
          Describe about your product 
          <br/>
          <Field name="Description" type="text" placeholder="Enter about your product"/>
          {errors.Description && touched.Description? <div>{errors.Description}</div> : null}
          <br />
          <br />
          
          Enter product Price <br/>
          <Field name="price" type="text" placeholder="Enter your product price" />
          {errors.price && touched.price ? <div>{errors.price}</div> : null}
          <br />
          <br />
          Upload product Image <br/> 
          <input className={styles.image} type="file" onChange={uploadImage}/>
          <br />
          <br />
         
          <button type="submit">Submit</button>
          <br />
          
        </Form>
      )}
    </Formik>
  </div>
)};
export default index 



























































