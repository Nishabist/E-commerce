'use client'

import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { message, Button, Modal, Card } from 'antd';
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import styles from '../../styles/brand.module.css'

const gridStyle = {
  width: '10%',
  textAlign: 'center',
  margin: '0px 10px'
};

const SignupSchema = Yup.object().shape({

  productName: Yup.string().required('Required'),
  Description: Yup.string().
    required('Required'),
  Brand: Yup.string(),
  price: Yup.string(),
  Image: Yup.string(),
  brand: Yup.string()
});


export const index = () => {
  const [brandList, setbrandList] = useState({});
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [selectedEditBrand, setselectedEditBrand] = useState({});
  const [messageApi, contextHolder] = message.useMessage();


  const showModal1 = (item) => {
    setselectedEditBrand(item);
    setIsModalOpen1(true);
  };
  const showModal2 = (item) => {
    setselectedEditBrand(item);
    setIsModalOpen2(true);
  };
  const handleCancel = () => {
    setIsModalOpen1(false);
    setIsModalOpen2(false);
  };

  const brandFetch = async () => {
    const res = await fetch(`http://localhost:4000/brand`)
    const data = await res.json()
    setbrandList(data.brandList)
  }


  useEffect(() => {
    brandFetch()
  }, [])


  const registerValidCateogries = async (values, resetForm) => {
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

  const deleteCat = async (id) => {
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


  const editCat = async (values,resetForm) => {
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
              <label>brand name:</label>
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

  return (
    <div >
<div className={styles.brand}>
      <h3>Add new brand:</h3>
      <br/>
      <br/>
      <Formik
        initialValues={{
          brandName: '',
         
        }}
        // validationSchema={SignupSchema}
        onSubmit={(values,{resetForm}) => {
          registerValidCateogries(values,resetForm);
        }}
      >
        {({ errors, touched }) => (
          <Form className='addbrandForm'>
              <div className='formDiv'>
            {contextHolder}
            <Field name="brandName" type="text" placeholder="Enter your  brandName" />
            {errors.brandName && touched.brandName ? <div>{errors.brandName}</div> : null}
              <br/>
              <br/>
            <button className='submitBtn' type="submit">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
      </div>
      <div className={styles.modal}>
      <Modal title="Edit brand" open={isModalOpen1} onCancel={handleCancel} footer={null}>
              <EditForm />
            </Modal>
            <Modal title="Delete brand" open={isModalOpen2} onCancel={handleCancel} onOk={()=>deleteCat(selectedEditBrand._id)}>
              <p>Are you sure you want to delete this brand ?</p>
            </Modal>
      <Card title="Valid brand list">
        {brandList.length > 0 ? brandList.map((item, id) => {
          return <Card.Grid className={styles.box}>
            <h3> {id + 1}.  {item.brandName}</h3>
            <br />
            <div className='icons'>
              <p onClick={() => showModal2(item)}><RiDeleteBin2Fill size={30} color='red' /></p>
              <p onClick={() => showModal1(item)}><FaEdit size={30} color='green' /></p>
            </div>

          
          </Card.Grid>
        }) : "No brand"}
      </Card>

      </div>
    </div>
  )
};
export default index 