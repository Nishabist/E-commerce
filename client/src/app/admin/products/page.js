'use client'

import React ,{useState} from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import {  message } from 'antd';


const SignupSchema = Yup.object().shape({

  productName: Yup.string().required('Required'),
  Description:Yup.string(),  
  Brand:Yup.string(),
  price:Yup.string(),
  
  Category:Yup.string()
});

export const index = () => {
  const[file,setfile]=useState(null)
  const [messageApi, contextHolder] = message.useMessage();

  
  const productHandle = async(values) => {
    var formData=new formData();
    formData.append('image',file)
    Object.entries(values).map((item,id)=>{
      formData.append(item[0],item[1])
    })
    const res = await fetch('http://localhost:4000/products', {
        method:'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
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
  return(
  <div className='form'>
    <h1>Product Information</h1>
    
    
    <Formik
      initialValues={{
       
        productName: '',
        Description:'',
        Brand:'',
        price:'',
        
        Category:'', 
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
          <Field name="productName" type="text" placeholder="Enter your  productName" />
          {errors.productName && touched.productName ? <div>{errors.productNamer}</div> : null}
          <br />
          <br />
          <Field name="Description" type="text" placeholder="Enter about your product"/>
          {errors.Description && touched.Description? <div>{errors.Description}</div> : null}
          <br />
          <br />
          <Field name="Brand" type="textr" placeholder="Enter your Brand" />
          {errors.Brand && touched.Brand ? <div>{errors.Brand}</div> : null}
          <br />
          <br />
          <Field name="price" type="text" placeholder="Enter your product price" />
          {errors.price && touched.price ? <div>{errors.price}</div> : null}
          <br />
          <br />
          <input type="file" onChange={uploadImage}/>
          <br />
          <br />
          <Field name="Category" type="text" placeholder="Enter your product Category" />
          {errors.Category && touched.Category ? <div>{errors.Category}</div> : null}
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