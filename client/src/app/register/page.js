'use client'

import React from 'react';
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
 import Link from 'next/link'
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
   .min(5, 'Too Short!')
   .max(50, 'Too Long!')
   .required('Required'),
   password: Yup.string().required('Password is required'),
   passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
 });
 
 export const register = () => {
  const handleRegister=(value)=>{
    fetch('http://localhost:4000/register',{
      method:'POST',
      headers:{'Content-Types':'application/json'},
      body:JSON.stringify(values)
    })
  }
  return(
   <div className='form1'>
     <h1>Register</h1>
     <Image
      src="/ecommerce.jpg"
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
         password:''
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form>
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
           <br />
           <br />
           <Field name="address" type="text" placeholder="Enter your address"/>
           <br /><br />
           <Field name="password" type="password" placeholder="Enter your password"/>
           {errors.password && touched.password? <div>{errors.password}</div> : null}
           <br /><br />
           <Field name=" passwordConfirm" type="password" placeholder="Enter your previous password"/>
           <br /> <br /> <button type="submit">Submit</button>
          <br />
          already have account
          <br />
          <Link href="../">login</Link>
         </Form>
       )}
     </Formik>
   </div>
 )};
export default register