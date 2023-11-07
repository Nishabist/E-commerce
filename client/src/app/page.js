'use client'

import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link'
import Image from 'next/image'

const SignupSchema = Yup.object().shape({

  email: Yup.string().email('Invalid email').required('Required'),
  password:Yup.string().
  required('Required')
});

export const index = () => (
  <div className='form'>
    <h1>Login</h1>
    <Image
      src="/ecommerce.jpg"
      width={80}
      height={80}
      alt="Picture of the author"
    />
    <Formik
      initialValues={{
       
        email: '',
        password:''
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form >
         
          <Field name="email" type="email" placeholder="Enter your email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <br />
          <br />
          <Field name="password" type="password" placeholder="Enter your password"/>
          {errors.password && touched.password? <div>{errors.password}</div> : null}
          <br />
          <br />
          <button type="submit">Submit</button>
          <br />
          if you don"t have account
          <br /><Link href="./register">go to register</Link>
        </Form>
      )}
    </Formik>
  </div>
);
export default index 