'use client'

import React from 'react';
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
 import Link from 'next/link'
 import {  message } from 'antd';
 import Image from 'next/image'

 const SignupSchema = Yup.object().shape({
   firstName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   lastName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   email: Yup.string().email('Invalid email').required('Required'),
   address: Yup.string()
   .min(2, 'Too Short!')
   .max(50, 'Too Long!')
   .required('Required'),
   category:Yup.string(),
   phonenumber: Yup.string()
   .min(2, 'Too Short!')
   .max(11, 'Too Long!')
   .required('Required'),
   password: Yup.string().required('Password is required'),
 
 });
 
    const register = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const handleRegister = async(values) => {
  const res = await fetch('http://localhost:4000/register', {
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
  return(
   <div className='form1'>
     <h1>Register</h1>
     <Image
      src="/Sahayogi.png"
      width={80}
      height={80}
      alt="Picture of the author"
    />
     <Formik
       initialValues={{
         firstName: '',
         lastName: '',
         email: '',
         address:'',
         phonenumber:'',
         category:'',
         password:''
       }}
      validationSchema={SignupSchema}
       onSubmit={values => {
         // same shape as initial values
      handleRegister(values)
       }}
     >
       {({ errors, touched }) => (
         <Form>
            {contextHolder}
           <Field name="firstName" placeholder="Enter your first name"/>
           {errors.firstName && touched.firstName ? (
             <div>{errors.firstName}</div>
           ) : null}<br /><br />
           <Field name="lastName" placeholder="Enter your last name" />
           {errors.lastName && touched.lastName ? (
             <div>{errors.lastName}</div>
           ) : null}
           <br /><br />
           <Field name="email" type="email" placeholder="Enter your email"/>
           {errors.email && touched.email ? <div>{errors.email}</div> : null}
           <br /><br />
           <Field name="phonenumber" type="string" placeholder="Enter your phonrnumber"/>
           {errors.phonenumber && touched.phonenumber ? <div>{errors.phonenumber}</div> : null}
           <br />
           <br />
           enter your category
           <Field as="select" name="category"  >
            
             <option value="seller">Seller</option>
             <option value="user">user</option>
             
           </Field>
           <br /><br />
           <Field name="address" type="text" placeholder="Enter your address"/>
           <br /><br />
           <Field name="password" type="password" placeholder="Enter your password"/>
           {errors.password && touched.password? <div>{errors.password}</div> : null}
           <br /><br />
            <button type="submit">Submit</button>
            
          <br />
          already have account
          <br />
          <Link href="/login">login</Link>
         </Form>
       )}
     </Formik>
   </div>
 )};
export default register