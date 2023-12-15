'use client'

import React from 'react';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'

import {  message } from 'antd';

import Image from 'next/image'

const SignupSchema = Yup.object().shape({

  brandName: Yup.string().required('Required'),
  
});

export const index = () => {

  const [messageApi, contextHolder] = message.useMessage();
  const brandLogin = async(values) => {
    const res = await fetch('http://localhost:4000/brand', {
        method:'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      })
      const data = await res.json()
        messageApi.open({
          type: res.status == 200 ? 'success': 'error',
          content: data.msg,
        });
        if(res.status==200){
       console.log(res)
        }
    
    } 
  
  return(
  <div className='form'>
    <h1>Enter Brand Name</h1>
    
    <Image
      src="/Sahayogi.png"
      width={80}
      height={80}
      alt="Picture of the author"
    />
    <Formik
      initialValues={{
       
        brandName: '',
    
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        brandLogin(values)
      }}
    >
      {({ errors, touched }) => (
        <Form >
      
          <Field name="brandName" type="brandName" placeholder="Enter your brandName" />
          {errors.brandName && touched.brandName ? <div>{errors.brandName}</div> : null}
          <br />
          <br />
          
          
          <button className='btn' type="submit">Submit</button>
         
         
        </Form>
      )}
    </Formik>
  </div>
)};
export default index 