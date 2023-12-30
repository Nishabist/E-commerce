'use client'

import React ,{useState,useEffect} from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import {  message } from 'antd';
import {setProductDetails} from '../../../redux/reducerSlices/productSlice'
import { useSelector, useDispatch } from 'react-redux';

const SignupSchema = Yup.object().shape({
  producCateogry: Yup.string()
  .min(2, 'Too Short!')
  .max(50, 'Too Long!')
  .required('Required'),
  producBrand: Yup.string(),
  productName: Yup.string().required('Required'),
  Description:Yup.string(),  
  Brand:Yup.string(),
  price:Yup.string(),
  
  Category:Yup.string()
});

export const index = () => {
  
  const dispatch= useDispatch()
  const[file,setfile]=useState(null)
  const [messageApi, contextHolder] = message.useMessage();
  const [categoryList, setCategoryList] = useState({})
  const [brandList, setBrandList] = useState({})
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
  return(
  <div className='form'>
    <h1>Product Information</h1>
    
    
    <Formik
      initialValues={{
        categoryName: categoryList?.[0]?.categoryName,
        brandName: brandList?.[0]?.brandName,
        productName: '',
        Description:'',
       
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
          <Field name="productName" type="text" placeholder="Enter your  productName" />
          {errors.productName && touched.productName ? <div>{errors.productNamer}</div> : null}
          <br />
          <br />
          <Field name="Description" type="text" placeholder="Enter about your product"/>
          {errors.Description && touched.Description? <div>{errors.Description}</div> : null}
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