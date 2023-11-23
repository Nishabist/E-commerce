'use client'

import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { Card, Flex } from 'antd';
import { useEffect,useState } from 'react';
import Meta from 'antd/es/card/Meta';

const App=()=>{
  const[productList,setproductList]=useState([])
 const fetchProduct=async()=>{
  const res=await fetch('http://localhost:4000/products')
  const data=await res.json()
  setproductList(data.productList)  
}

  useEffect(()=> {
   fetchProduct()
  },[])
  return(
    <>

  <ul className='top'>
    <li> <Image
      src="/ecommerce.jpg"
      width={40}
      height={40}
      alt="Picture of the author"
    /></li>
    <li><Link href="../login">Login</Link>    </li>
    <li><Link href="../register">Register</Link> </li>
  </ul>
{/* {JSON.stringify(productList)} */}
{productList.length>0 && productList.map((item,id)=>{
  return(
    <div>
      {/* {item.productName} */}
      <Card 
    hoverable
    style={{ width: 240 , display:Flex,gap:5}}
    cover={<img alt="example" src="" />}
  >
    <Meta  title={item.productName} description={item.Description} />
  </Card>
    </div>
  )
})}
    </>
  )
}
export default App
// import { Formik, Form, Field } from 'formik';
// import { Breadcrumb, Layout, Menu, theme, Input } from 'antd';
// import { AudioOutlined } from '@ant-design/icons';
// const { Search } = Input;
// const { Header, Content, Footer } = Layout;
// const App = () => {
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();

//   const suffix = (
//     <AudioOutlined
//       style={{
//         fontSize: 16,
//         color: '#1677ff',
//       }}
//     />
//   );
//   const onSearch = (value, _e, info) => console.log(info?.source, value);
//   return (
//     <Layout className="layout">
//       <Header
//         style={{
//           display: 'flex',
//           alignItems: 'center',
//           backgroundColor:'#fff',
//           border: '1px solid'
//         }}
//       >
//         <div className="demo-logo" />
      
//         <Menu
//           theme="dark"
//           mode="horizontal"
//           defaultSelectedKeys={['2']}
//           items={[{key:1, label:"login"},{key:2, label:"sign up"} ]}
//         />
//       </Header>
//       <Content
//         style={{
//           padding: '0 50px',
//         }}
//       >
//         <Breadcrumb
//           style={{
//             margin: '16px 0',
//           }}
//         >
//           <Search
//       placeholder="Enter Your Traking Order"
//       enterButton="Search"
//       size="large"
//       suffix={suffix}
//       onSearch={onSearch}
//     />
//         </Breadcrumb>
//         <div
//           className="site-layout-content"
//           style={{
//             background: colorBgContainer,
//           }}
//         >
//           Content
//         </div>
//       </Content>
//       <Footer
//         style={{
//           textAlign: 'center',
//         }}
//       >
//         Ant Design ©2023 Created by Ant UED
//       </Footer>
//     </Layout>
//   );
// };
// export default App;