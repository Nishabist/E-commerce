'use client'

import React,{useState,useEffect} from 'react';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'

import {  Table } from 'antd';

import Image from 'next/image'
import { message, Button, Modal, Card } from 'antd';
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";


const gridStyle = {
  width: '10%',
  textAlign: 'center',
  margin: '0px 10px'
};




const SignupSchema = Yup.object().shape({
  brandName: Yup.string().required('Required'),
  
});



export const index = () => {
  const[brandList,setBrandList]=useState({});
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [selectedEditBrand, setSelectedEditBrand] = useState({});
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

    

  const showModal1 = (item) => {
    setSelectedEditBrand(item);
    setIsModalOpen1(true);
  };
  const showModal2 = (item) => {
    setSelectedEditBrand(item);
    setIsModalOpen2(true);
  };
  const handleCancel = () => {
    setIsModalOpen1(false);
    setIsModalOpen2(false);
  };

  
    const brandFetch = async () => {
      const res = await fetch(`http://localhost:4000/brand`)
      const data = await res.json()
      setBrandList(data.brandList)
    }
   
  
    useEffect(() => {
      brandFetch()
    }, [])

    const registerValidBrand = async (values, resetForm) => {
      const res = await fetch('http://localhost:4000/brand', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      })
      const data = await res.json()
      messageApi.open({
        type: res.status == 200 ? 'success' : 'error',
        content: data.msg,
      });
      console.log(res)
      if (res.status === 200) {
        brandFetch();
        resetForm();
      }
    };

    const deleteBrand = async (id) => {
      const res = await fetch('http://localhost:4000/brand', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      })
      const data = await res.json()
      messageApi.open({
        type: res.status == 200 ? 'success' : 'error',
        content: data.msg,
      });
      console.log(res)
      if (res.status === 200) {
        brandFetch();
        setIsModalOpen2(false);
      }
    };

    const editBrand = async (values,resetForm) => {
      const res = await fetch('http://localhost:4000/brand', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      })
      const data = await res.json()
      messageApi.open({
        type: res.status == 200 ? 'success' : 'error',
        content: data.msg,
      });
      if (res.status === 200) {
        brandFetch();
        handleCancel();
        resetForm()
      }
    };

    const EditForm = () => {
      return (
        <Formik
          initialValues={selectedEditBrand}
          enableReinitialize
          // validationSchema={SignupSchema}
          onSubmit={(values,{ resetForm }) => {
            editCat(values,resetForm)
          }}
        >
          {({ errors, touched }) => (
            <Form className='editForm'>
              <div>
                <label>Brand name:</label>
                <Field name="brandName" placeholder="brandName" />
                {errors.brandName && touched.brandName ? (
                  <div>{errors.brandName}</div>
                ) : null}
              </div>
  
              
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      )
    }


  return(
    <>
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
    <Modal title="Edit brand" open={isModalOpen1} onCancel={handleCancel} footer={null}>
              <EditForm />
            </Modal>
            <Modal title="Delete brand" open={isModalOpen2} onCancel={handleCancel} onOk={()=>deleteBrand(selectedEditBrand._id)}>
              <p>Are you sure you want to delete this brand ?</p>
            </Modal>
      <Card title="Valid Brand list">
        {brandList?.length > 0 ? brandList.map((item, id) => {
          return <Card.Grid style={gridStyle}>
            <h3> {id + 1}.  {item.brandName}</h3>
            <br />
            <div className='icons'>
              <p onClick={() => showModal2(item)}><RiDeleteBin2Fill size={30} color='red' /></p>
              <p onClick={() => showModal1(item)}><FaEdit size={30} color='green' /></p>
            </div>

          
          </Card.Grid>
        }) : "No categories"}
      </Card>

 
  
  </>
)};
export default index 